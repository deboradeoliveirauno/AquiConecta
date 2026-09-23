import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// Rota de retorno do login via Google (OAuth). O Supabase troca o código
// pela sessão do usuário e a gente redireciona pra home já autenticado.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/erro`);
}
