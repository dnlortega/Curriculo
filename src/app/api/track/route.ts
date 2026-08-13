import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { put } from '@vercel/blob';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Parse data from frontend
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Desconhecido';
    
    const rawCountry = request.headers.get('x-vercel-ip-country') || formData.get('country') as string || 'Desconhecido';
    const rawCity = request.headers.get('x-vercel-ip-city') || formData.get('city') as string || 'Desconhecido';
    const region = request.headers.get('x-vercel-ip-country-region') || '';
    const lat = formData.get('lat') as string || request.headers.get('x-vercel-ip-latitude') || '';
    const lng = formData.get('lng') as string || request.headers.get('x-vercel-ip-longitude') || '';
    
    const country = rawCountry !== 'Desconhecido' ? decodeURIComponent(rawCountry) : 'Desconhecido';
    let city = rawCity !== 'Desconhecido' ? decodeURIComponent(rawCity) : 'Desconhecido';
    if (region && city !== 'Desconhecido') {
      city = `${city} - ${decodeURIComponent(region)}`;
    }
    
    const device = formData.get('device') as string || 'Desconhecido';
    const os = formData.get('os') as string || 'Desconhecido';
    const browser = formData.get('browser') as string || 'Desconhecido';
    const screen = formData.get('screen') as string || '';
    const language = formData.get('language') as string || '';
    const cpu = formData.get('cpu') as string || '';
    const advancedDetailsStr = formData.get('advancedDetails') as string || '{}';

    let advancedObj: Record<string, string> = {};
    try {
      advancedObj = JSON.parse(advancedDetailsStr);
    } catch (e) {}

    if (lat && lng) {
      advancedObj['Coordenadas (GPS)'] = `${lat}, ${lng}`;
      advancedObj['Google Maps'] = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    }

    const advancedDetails = JSON.stringify(advancedObj);
    
    let photoUrl = null;
    const photo = formData.get('photo') as File | null;
    
    if (photo && photo.size > 0) {
      // Upload photo to Vercel Blob if available
      try {
        const blob = await put(`visitors/${Date.now()}-${photo.name}`, photo, {
          access: 'public',
        });
        photoUrl = blob.url;
      } catch (blobError) {
        console.error("Error uploading to blob:", blobError);
        // Continue even if photo upload fails
      }
    }

    // Save to Prisma
    const savedLog = await prisma.accessLog.create({
      data: {
        ip,
        country,
        city,
        device,
        os,
        browser,
        screen,
        language,
        cpu,
        advancedDetails: advancedDetails ? advancedDetails : undefined,
        photoUrl,
      },
    });

    // Send Telegram Notification (if configured)
    const settings = await prisma.systemSettings.findUnique({ where: { id: 'default' } });
    const tgToken = settings?.telegramBotToken || process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = settings?.telegramChatId || process.env.TELEGRAM_CHAT_ID;

    if (tgToken && tgChatId) {
      const tgMsg = `🚨 *Novo Acesso no Portfólio!*\n\n` +
                    `📍 *Local:* ${city}, ${country}\n` +
                    `💻 *Dispositivo:* ${device} (${os})\n` +
                    `🌐 *Origem:* ${advancedObj.referrer || 'Acesso Direto'}\n` +
                    `🕵️ *IP:* ${ip}\n` +
                    (lat && lng ? `🗺️ [Abrir no Maps](https://www.google.com/maps/search/?api=1&query=${lat},${lng})` : '');
      
      fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgChatId,
          text: tgMsg,
          parse_mode: 'Markdown',
        }),
      }).catch(e => console.error("Telegram error:", e));
    }

    return NextResponse.json({ success: true, log: savedLog });
  } catch (error) {
    console.error("Failed to track access:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const all = searchParams.get('all');

    if (all === 'true') {
      await prisma.accessLog.deleteMany();
      return NextResponse.json({ success: true, message: "Todos os logs foram apagados." });
    } else if (id) {
      await prisma.accessLog.delete({ where: { id } });
      return NextResponse.json({ success: true, message: "Log apagado com sucesso." });
    }

    return NextResponse.json({ success: false, error: "Missing parameters" }, { status: 400 });
  } catch (error) {
    console.error("Failed to delete log:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, duration, readingLog, lat, lng, city } = await request.json();
    
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing id" }, { status: 400 });
    }

    const dataToUpdate: any = {};
    if (duration !== undefined) dataToUpdate.duration = duration;
    if (readingLog) dataToUpdate.readingLog = JSON.stringify(readingLog);
    if (city) dataToUpdate.city = city;

    // Handle advancedDetails update for GPS
    if (lat && lng) {
      const existingLog = await prisma.accessLog.findUnique({ where: { id } });
      let advancedObj = {};
      if (existingLog?.advancedDetails) {
        try {
          advancedObj = JSON.parse(existingLog.advancedDetails);
        } catch (e) {}
      }
      (advancedObj as any)['Coordenadas (GPS)'] = `${lat}, ${lng}`;
      (advancedObj as any)['Google Maps'] = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      dataToUpdate.advancedDetails = JSON.stringify(advancedObj);
    }

    const updatedLog = await prisma.accessLog.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, log: updatedLog });
  } catch (error) {
    console.error("Failed to update access log:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
