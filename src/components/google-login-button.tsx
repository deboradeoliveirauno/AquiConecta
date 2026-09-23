"use client";

import { createClient } from "@/lib/supabase/client";

export function GoogleLoginButton() {
  const supabase = createClient();

  async function handleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <button
      onClick={handleLogin}
      className="inline-flex items-center gap-2 rounded-full bg-brand-gray px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
    >
      Entrar com Google
    </button>
  );
}
