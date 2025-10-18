# Arquitetura PlanTech MVP

## Visão Geral

MVP da plataforma PlanTech que combina:
- **Design**: Identidade visual do plant-care-connect (gradientes, animações, estética profissional)
- **Funcionalidades**: Recursos do plantao-shine (Dashboard, Marketplace, Agenda, Finanças, Perfil)
- **Autenticação**: Integração Supabase

## Estrutura de Diretórios

```
PlanTech/
├── public/                 # Assets estáticos
├── src/
│   ├── components/
│   │   ├── app/           # Componentes da aplicação interna
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Marketplace.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Finance.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Navigation.tsx
│   │   ├── premium/       # Previews de recursos Premium
│   │   │   ├── PremiumModal.tsx
│   │   │   ├── AICopilotPreview.tsx
│   │   │   └── UpgradeCard.tsx
│   │   └── ui/            # Componentes UI reutilizáveis
│   ├── hooks/             # Custom hooks
│   │   ├── useAuth.tsx
│   │   └── useToast.ts
│   ├── integrations/
│   │   └── supabase/      # Cliente e tipos Supabase
│   ├── lib/               # Utilitários
│   ├── pages/             # Páginas principais
│   │   ├── Landing.tsx    # Landing page pública
│   │   ├── Auth.tsx       # Login/Cadastro
│   │   ├── AppShell.tsx   # Shell da aplicação interna
│   │   └── NotFound.tsx
│   ├── App.tsx            # Router e providers
│   ├── main.tsx           # Entry point
│   └── index.css          # Design system
└── supabase/
    └── migrations/        # Schema do banco
```

## Fluxo de Autenticação

1. **Landing** (`/`) - Página pública de marketing
2. **Auth** (`/auth`) - Login/Cadastro com Supabase
3. **App** (`/app/*`) - Rotas protegidas que requerem autenticação

## Funcionalidades

### Plano Gratuito (Implementado)
- **Dashboard**: Resumo com stats de plantões e ganhos
- **Marketplace**: Lista de vagas com filtros básicos
- **Agenda**: Calendário unificado de plantões
- **Finanças**: Controle manual de recebimentos
- **Perfil**: Informações profissionais e documentos

### Plano Premium (Preview/Mockup)
- **Gestão Contábil**: Emissão de NFs, integração contábil
- **Antecipação**: Recebíveis antecipados em 24h
- **Busca Inteligente**: Alertas personalizados, acesso prioritário
- **AI Copilot**: Transcrição de consultas (mockup apenas)

## Design System

### Cores (HSL)
- **Primary**: Medical Blue `205 85% 45%`
- **Secondary**: Success Green `155 70% 50%`
- **Success**: Green `155 70% 50%`
- **Warning**: Orange `38 92% 50%`
- **Destructive**: Red `0 84.2% 60.2%`

### Gradientes
- `gradient-primary`: Azul médico
- `gradient-secondary`: Verde sucesso
- `gradient-hero`: Combinação azul+verde
- `gradient-card`: Sutil para cards

### Dark Mode
Otimizado para plantões noturnos com ajuste de todas as cores.

## Convenções de Código

### Nomenclatura
- **Variáveis/Funções**: Inglês (camelCase)
  - Exemplo: `userShifts`, `calculateMonthlyEarnings`
- **Texto UI**: Português brasileiro
  - Exemplo: "Próximo Plantão", "Criar Conta Gratuita"
- **Comentários**: Português quando necessário

### Clean Code
- Nomes descritivos e específicos
- Componentes com responsabilidade única
- Lógica complexa extraída para funções nomeadas
- Sem comentários redundantes
- Sem console.log em produção

## Tecnologias

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui, Radix UI
- **Roteamento**: React Router v6
- **State**: React Query, Context
- **Backend**: Supabase (Auth + Database)
- **Animações**: Tailwind Animate, CSS Keyframes

## Próximos Passos

1. Conectar com Supabase real (substituir mock data)
2. Implementar CRUD de plantões
3. Sistema de candidaturas no marketplace
4. Upload real de documentos
5. Implementar pagamento Premium
6. Desenvolver AI Copilot (quando Premium estiver ativo)

