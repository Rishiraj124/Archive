import { createClient } from '@/lib/supabaseServer';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'edge';
export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const supabaseServer = createClient(cookieStore);
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  if (session) {
    await supabaseServer.auth.signOut();
  }

  return NextResponse.redirect(new URL('/', req.url), {
    status: 302,
  });
}
