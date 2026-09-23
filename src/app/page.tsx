import { GoogleLoginButton } from "@/components/google-login-button";

const pilares = [
  {
    titulo: "Diretório",
    descricao: "Estabelecimentos e prestadores de Treze Tílias e região.",
  },
  {
    titulo: "Vagas e prestadores",
    descricao: "Emprego, freelancers e serviços com match por perfil.",
  },
  {
    titulo: "Eventos",
    descricao: "O que está acontecendo na cidade, sempre atualizado.",
  },
  {
    titulo: "Marketplace local",
    descricao: "Brechó e produtos com entrega confirmada antes do repasse.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-brand-gray">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
        <span className="rounded-full bg-brand-yellow/20 px-4 py-1 text-sm font-medium text-brand-gray">
          Treze Tílias · Meio Oeste catarinense
        </span>
        <h1 className="text-4xl font-bold sm:text-5xl">
          Aqui <span className="text-brand-pink">Conecta</span>
        </h1>
        <p className="max-w-xl text-lg text-brand-gray/80">
          Tudo o que acontece na cidade — estabelecimentos, eventos, vagas e
          serviços — em um só lugar.
        </p>
        <GoogleLoginButton />
      </section>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-2">
        {pilares.map((pilar) => (
          <div
            key={pilar.titulo}
            className="rounded-2xl border border-brand-gray/10 p-6 shadow-sm"
          >
            <h2 className="mb-2 text-lg font-semibold text-brand-green">
              {pilar.titulo}
            </h2>
            <p className="text-sm text-brand-gray/70">{pilar.descricao}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
