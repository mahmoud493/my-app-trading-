# MT5 Analytics Frontend

Front-end Next.js 15 pour une plateforme SaaS de suivi de performance trading MT5. Le design est inspiré de plateformes fintech premium comme TradingView.

## Stack

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- Zustand
- React Hook Form
- Zod
- Socket.IO client
- Lightweight Charts

## Installation

```bash
cd c:\node\my-app
npm install
npm run dev
```

## Structure

- `app/`: routes App Router
- `components/`: UI et layout réutilisables
- `features/`: formulaires et modules métier
- `services/`: API et websocket
- `stores/`: état global auth
- `types/`: typage TypeScript

## Configuration

Copiez `.env.example` en `.env.local` et adaptez les variables.
