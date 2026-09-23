# Aqui Conecta

Diretório de estabelecimentos, eventos, vagas e serviços de Treze Tílias e do Meio Oeste catarinense — a plataforma nasceu no Programa Nascer Sebrae 2024. Documentação completa do projeto (roadmap, arquitetura, modelo de negócio) está no workspace do Notion "Aqui Conecta".

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS
- [Supabase](https://supabase.com) — banco de dados, autenticação (login via Google) e storage

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha com as chaves do projeto Supabase
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app` — páginas e rotas (App Router)
- `src/components` — componentes de UI
- `src/lib/supabase` — clientes Supabase (browser e servidor)
- `src/middleware.ts` — mantém a sessão do usuário atualizada

## Fases do produto

Ver a página "Funcionalidades por Fase" no Notion para o roadmap completo (Fundação → Vagas/Prestadores + Agente de IA → Marketplace Local → Ingressos e Agenda → Avançado).
