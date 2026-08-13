import { NextResponse } from 'next/server';

export async function POST() {
  return new NextResponse('Chatbot desativado temporariamente.', { status: 503 });
}
