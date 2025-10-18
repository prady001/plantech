# PlanTech MVP

> Plataforma completa para gestão de plantões médicos, finanças e marketplace de oportunidades

![Status](https://img.shields.io/badge/status-MVP-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Primeira vez aqui?

**Início Ultra-Rápido**: [QUICK_START.md](QUICK_START.md) - 30 segundos sem configuração!

**Setup Completo**: [START_HERE.md](START_HERE.md) - 3 minutos com Supabase

## Visão Geral

PlanTech é o **Sistema Operacional para a Saúde** no Brasil, conectando hospitais e profissionais com eficiência, organizando finanças e oferecendo liquidez através de serviços fintech.

Este MVP demonstra:
- ✅ **5 funcionalidades gratuitas** completas
- ✅ **4 recursos Premium** em preview/mockup
- ✅ Design profissional com dark mode
- ✅ Autenticação Supabase
- ✅ Interface 100% em português brasileiro

## Início Rápido

```bash
# 1. Instalar dependências
npm run setup

# 2. Configurar Supabase (criar .env.local)
# Veja SETUP.md para instruções detalhadas

# 3. Iniciar aplicação
npm run dev
```

Acesse: **http://localhost:8080**

## Tecnologias

| Categoria | Stack |
|-----------|-------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Backend** | Supabase (Auth + PostgreSQL) |
| **Routing** | React Router v6 |
| **State** | React Query, Context API |
| **UI Components** | Radix UI Primitives |

## Funcionalidades

### 🆓 Plano Gratuito (Implementado)

| Funcionalidade | Descrição | Status |
|----------------|-----------|--------|
| **Dashboard** | Resumo visual com stats de plantões e ganhos | ✅ Completo |
| **Marketplace** | Feed de vagas com filtros (local, especialidade, período) | ✅ Completo |
| **Agenda** | Calendário unificado de plantões confirmados/pendentes | ✅ Completo |
| **Finanças** | Controle manual de recebimentos com progress bar | ✅ Completo |
| **Perfil** | Dados profissionais e upload de documentos | ✅ Completo |

### 👑 Plano Premium (Preview/Mockup)

| Funcionalidade | Descrição | Status |
|----------------|-----------|--------|
| **Gestão Contábil** | Emissão de NFs e relatórios IR | 🎨 Mockup |
| **Antecipação** | Recebíveis em 24h | 🎨 Mockup |
| **Busca Inteligente** | Alertas personalizados | 🎨 Mockup |
| **AI Copilot** | Transcrição de consultas | 🎨 Mockup Completo |

## Estrutura do Projeto

```
PlanTech/
├── src/
│   ├── components/
│   │   ├── app/          # 6 componentes principais
│   │   ├── premium/      # 4 componentes Premium
│   │   └── ui/           # 13 componentes UI
│   ├── pages/            # 4 páginas
│   ├── hooks/            # 2 hooks customizados
│   ├── lib/              # Utilitários
│   ├── data/             # Mock data
│   ├── types/            # TypeScript types
│   └── integrations/     # Supabase
├── supabase/
│   ├── migrations/       # Schema SQL
│   └── config.toml
└── docs/                 # 8 arquivos de documentação
```

## Documentação Completa

- 📖 [SETUP.md](SETUP.md) - Instalação passo a passo
- 🏗️ [ARCHITECTURE.md](ARCHITECTURE.md) - Estrutura técnica detalhada
- ⚡ [FEATURES.md](FEATURES.md) - Todas as funcionalidades explicadas
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Como fazer deploy
- 🎯 [GETTING_STARTED.md](GETTING_STARTED.md) - Guia de início rápido
- ✅ [CHECKLIST.md](CHECKLIST.md) - Checklist de implementação
- 📊 [MVP_SUMMARY.md](MVP_SUMMARY.md) - Resumo executivo (este arquivo)

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento (porta 8080)
npm run build    # Build para produção
npm run preview  # Preview do build de produção
npm run lint     # Executa ESLint
```

## Princípios de Código

### Clean Code ✅
- Nomes descritivos em inglês
- Componentes com responsabilidade única
- Lógica complexa extraída para utils
- Zero comentários redundantes

### Linguagem ✅
- **Código**: Inglês (`calculateMonthlyEarnings`)
- **Interface**: Português BR ("Próximo Plantão")
- **Comentários**: Português quando necessário

### Qualidade ✅
- TypeScript strict mode (parcial)
- ESLint configurado
- Prettier-ready
- Sem warnings de build

## Design Highlights

### Gradientes Premium
Inspirado em plant-care-connect:
- `bg-gradient-hero` - Multi-color para impacto
- `bg-gradient-primary` - Azul médico confiável
- `bg-gradient-success` - Verde para finanças positivas

### Animações
- `animate-fade-in` - Entrada suave de conteúdo
- `animate-float` - Flutuação sutil
- `hover:scale-105` - Hover interativo em CTAs
- Transições suaves em todos os elementos

### Responsividade
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Bottom navigation em mobile
- Cards adaptativos

## Métricas do MVP

- **Componentes React**: 23
- **Linhas de código**: ~2.500
- **Páginas**: 4 (Landing, Auth, App, 404)
- **Bundle size estimado**: < 500kb
- **Lighthouse score esperado**: 95+

## Roadmap

### ✅ MVP (Atual)
- Design system completo
- 5 funcionalidades gratuitas
- Previews Premium
- Documentação completa

### 🚧 Próximas Etapas
- Integração Supabase real
- CRUD de plantões
- Upload de documentos
- Gateway de pagamento

### 🔮 Futuro
- AI Copilot funcional
- Match por qualidade
- App mobile nativo
- Integrações ERP

## Contribuindo

Este é um MVP para validação. Para contribuir:
1. Leia ARCHITECTURE.md
2. Siga os padrões de código
3. Teste localmente
4. Documente mudanças

## Licença

MIT License - Veja LICENSE file

## Contato

Para dúvidas sobre implementação:
- Consulte a documentação em `/docs`
- Abra uma issue no repositório
- Entre em contato com a equipe

---

**Desenvolvido com foco em clean code, UX excepcional e português brasileiro** 🇧🇷


