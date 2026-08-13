import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

// Protect these routes to ensure only the authenticated admin can view/edit keys
async function checkAuth() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_session')?.value === 'authenticated';
  return isAuthenticated;
}

export async function GET() {
  const isAuth = await checkAuth();
  if (!isAuth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    let settings = await prisma.systemSettings.findUnique({
      where: { id: 'default' }
    });

    if (!settings) {
      settings = await prisma.systemSettings.create({
        data: { id: 'default' }
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const isAuth = await checkAuth();
  if (!isAuth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const data = await req.json();

    const updatedSettings = await prisma.systemSettings.upsert({
      where: { id: 'default' },
      update: {
        adminPassword: data.adminPassword,
        geminiApiKey: data.geminiApiKey,
        telegramBotToken: data.telegramBotToken,
        telegramChatId: data.telegramChatId,
      },
      create: {
        id: 'default',
        adminPassword: data.adminPassword,
        geminiApiKey: data.geminiApiKey,
        telegramBotToken: data.telegramBotToken,
        telegramChatId: data.telegramChatId,
      }
    });

    return NextResponse.json({ success: true, settings: updatedSettings });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
