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
| **Animations** | Tailwind CSS animations, Custom CSS keyframes |

## Funcionalidades

### 🆓 Plano Gratuito (Implementado)

| Funcionalidade | Descrição | Status |
|----------------|-----------|--------|
| **Dashboard** | Resumo visual com stats de plantões e ganhos | ✅ Completo |
| **Marketplace** | Feed de vagas com filtros (local, especialidade, período) | ✅ Completo |
| **Plantões de Destaque** | Carrossel com plantões urgentes e valores premium | ✅ Completo |
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

### Animated Backgrounds
Sistema de fundos multicamadas com profundidade:
- **Gradientes compostos**: 3-4 camadas de gradientes sobrepostos
- **Elementos decorativos**: Círculos flutuantes com blur (animate-float, animate-float-slow)
- **Grid patterns**: Texturas sutis de fundo para adicionar detalhe
- **Z-index layers**: Organização em camadas para profundidade visual

### Glassmorphism
Efeitos modernos de vidro e transparência:
- **Backdrop blur**: `backdrop-blur-lg` em navegação e cards
- **Transparências**: `bg-background/80` para efeito de vidro
- **Bordas sutis**: `border-border/50` para delimitação suave
- **Sombras intensas**: `shadow-2xl` para elevação visual

### Horizontal Carousels
Sistema completo de carrosséis com:
- **Auto-play**: Transição automática a cada 4-5 segundos
- **Navegação**: Setas e dots para controle manual
- **Touch support**: Swipe otimizado para mobile
- **Pause on hover**: Pausa automática ao passar o mouse
- **Keyboard navigation**: Acessibilidade completa

### Micro-interactions
Animações e feedbacks visuais:
- **Scale effects**: `hover:scale-105`, `hover:scale-110` em botões e cards
- **Rotate animations**: `group-hover:rotate-12` em ícones
- **Glow effects**: `animate-pulse-glow` para elementos premium
- **Gradient shift**: `animate-gradient-shift` para textos destacados
- **Transições suaves**: `transition-all duration-300` em todos elementos interativos

### Gradientes Premium
Paleta expandida de gradientes:
- `bg-gradient-hero` - Multi-color para impacto (primary → blue → secondary)
- `bg-gradient-primary` - Azul médico confiável
- `bg-gradient-success` - Verde para finanças positivas
- `bg-gradient-premium` - Roxo/dourado para recursos premium
- `bg-gradient-urgency` - Vermelho/laranja para plantões urgentes

### Mobile Optimizations
Design responsivo mobile-first:
- **Hamburger menu**: Menu animado com ícones X/Menu
- **Navegação sempre visível**: Setas de carrossel visíveis em mobile
- **Typography responsiva**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- **Touch-friendly**: Botões com tamanho mínimo 44px
- **Spacing adaptativo**: `gap-3 sm:gap-4 md:gap-6` para melhor uso do espaço
- **Bottom navigation**: Navegação inferior em mobile com ícones grandes

### Responsividade
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Bottom navigation em mobile
- Cards adaptativos
- Logo responsivo (size="sm" mobile, size="md"/"lg" desktop)

## Visual Identity

### Custom Logo Integration
Sistema completo de identidade visual:
- **Logo Component**: Componente reutilizável com variações de tamanho
- **LogoWithTagline**: Versão com tagline "Sistema Operacional para Saúde"
- **LogoIcon**: Versão compacta para espaços reduzidos
- **Favicon**: SVG customizado para navegadores

### Theme Consistency
Consistência visual em todas as páginas:
- **Landing Page**: Gradientes multicamadas com elementos decorativos
- **Auth Page**: Mesmo sistema de design para continuidade
- **App Dashboard**: Backgrounds sutis para não distrair do conteúdo
- **Navigation**: Backdrop blur consistente em todas as páginas

### Dark Mode Support
Suporte completo ao modo escuro:
- **Theme Toggle**: Botão de alternância em todas as páginas
- **Color Adaptation**: Todas as cores ajustadas para dark mode
- **Contrast**: Garantia de legibilidade em ambos os modos
- **Animations**: Cores de animações adaptadas ao tema

## Métricas do MVP

- **Componentes React**: 25+
- **Linhas de código**: ~3.500+
- **Páginas**: 4 (Landing, Auth, App, 404)
- **Featured Shifts**: 5 plantões premium com valores R$ 2.800-5.000
- **Carousels**: 4 carrosséis (Landing: 3, Marketplace: 1)
- **Bundle size estimado**: < 600kb
- **Lighthouse score esperado**: 95+

## Roadmap

### ✅ MVP (Atual)
- Design system completo com animações avançadas
- 6 funcionalidades gratuitas (incluindo Featured Shifts)
- 4 carrosséis horizontais auto-play
- Sistema de gradientes multicamadas
- Mobile-first com hamburger menu
- Glassmorphism e micro-interações
- Identidade visual customizada (logo + favicon)
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


