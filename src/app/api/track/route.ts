import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { put } from '@vercel/blob';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Parse data from frontend
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Desconhecido';
    
    // Attempt to get location from Vercel headers (only works in production on Vercel edge)
    const country = request.headers.get('x-vercel-ip-country') || formData.get('country') as string || 'Desconhecido';
    const city = request.headers.get('x-vercel-ip-city') || formData.get('city') as string || 'Desconhecido';
    
    const device = formData.get('device') as string || 'Desconhecido';
    const os = formData.get('os') as string || 'Desconhecido';
    const browser = formData.get('browser') as string || 'Desconhecido';
    
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
        photoUrl,
      },
    });

    return NextResponse.json({ success: true, log: accessLog });
  } catch (error) {
    console.error("Failed to track access:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
