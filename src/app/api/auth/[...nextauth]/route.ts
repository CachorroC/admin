import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

export async function GET(
  Request: NextRequest 
) {
  return new NextResponse();
}

export async function POST() {}
