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
    
    const country = rawCountry !== 'Desconhecido' ? decodeURIComponent(rawCountry) : 'Desconhecido';
    const city = rawCity !== 'Desconhecido' ? decodeURIComponent(rawCity) : 'Desconhecido';
    
    const device = formData.get('device') as string || 'Desconhecido';
    const os = formData.get('os') as string || 'Desconhecido';
    const browser = formData.get('browser') as string || 'Desconhecido';
    const screen = formData.get('screen') as string || '';
    const language = formData.get('language') as string || '';
    const cpu = formData.get('cpu') as string || '';
    
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
    const accessLog = await prisma.accessLog.create({
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
        photoUrl,
      },
    });

    return NextResponse.json({ success: true, log: accessLog });
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
    const { id, duration, readingLog } = await request.json();
    
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing id" }, { status: 400 });
    }

    const updatedLog = await prisma.accessLog.update({
      where: { id },
      data: {
        duration,
        readingLog: readingLog ? JSON.stringify(readingLog) : undefined,
      },
    });

    return NextResponse.json({ success: true, log: updatedLog });
  } catch (error) {
    console.error("Failed to update access log:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
