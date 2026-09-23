export default function AuthErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold text-brand-gray">
        Não foi possível entrar
      </h1>
      <p className="text-brand-gray/70">
        Algo deu errado ao confirmar seu login com o Google. Tente novamente.
      </p>
    </main>
  );
}
