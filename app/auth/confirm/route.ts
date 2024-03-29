import { createClient } from '@/lib/supabaseServer';
import { EmailOtpType } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'edge';
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const next = searchParams.get('next') ?? '/';
  const type = searchParams.get('type') as EmailOtpType | null;
  const cookieStore = cookies();
  const supabaseServer = createClient(cookieStore);
  if (token_hash && type) {
    const { error } = await supabaseServer.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      return NextResponse.redirect(next);
    }
  }
  return NextResponse.redirect('/error');
}
