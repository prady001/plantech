# Guia Visual - PlanTech MVP

## Fluxo de Navegação

```
┌─────────────────────────────────────────────────────────────┐
│                     LANDING PAGE (/)                         │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Header: Logo | Nav | "Entrar" | "Começar Agora"      │ │
│  │  Hero: Título + Gradiente + Stats (15K, R$50M, 98%)   │ │
│  │  Seção: 3 Pilares (Marketplace, Financeiro, Fintech)  │ │
│  │  Seção: Para Profissionais (4 cards de features)      │ │
│  │  Seção: Para Instituições (4 cards de features)       │ │
│  │  CTA: "Criar Conta Gratuita"                          │ │
│  │  Footer: Copyright                                     │ │
│  └────────────────────────────────────────────────────────┘ │
│            ↓ Clique "Começar Agora"                          │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      AUTH PAGE (/auth)                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Card Centralizado                                     │ │
│  │  Tabs: "Entrar" | "Cadastrar"                         │ │
│  │                                                        │ │
│  │  TAB ENTRAR:                                          │ │
│  │    - Email                                            │ │
│  │    - Senha                                            │ │
│  │    - Botão "Entrar"                                   │ │
│  │                                                        │ │
│  │  TAB CADASTRAR:                                       │ │
│  │    - Nome Completo                                    │ │
│  │    - Email                                            │ │
│  │    - CRM                                              │ │
│  │    - Especialidade                                    │ │
│  │    - Telefone                                         │ │
│  │    - Senha                                            │ │
│  │    - Botão "Criar Conta Gratuita"                    │ │
│  └────────────────────────────────────────────────────────┘ │
│            ↓ Login/Cadastro bem-sucedido                     │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   APP SHELL (/app)                           │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Navigation (Sticky Top)                               │ │
│  │  ┌──────────────────────────────────────────────────┐ │ │
│  │  │ Logo | Início | Plantões | Agenda | Finanças |  │ │ │
│  │  │ Perfil | 🌙 Dark | 🚪 Logout                     │ │ │
│  │  └──────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              CONTEÚDO DINÂMICO                         │ │
│  │         (Baseado no tab ativo)                         │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

## Telas Principais do App

### 1. Dashboard (Início)

```
┌──────────────────────────────────────────────────────────────┐
│  Olá, Dr. Silva                          [👑 Ver Premium]   │
│  Confira um resumo da sua rotina                            │
├──────────────────────────────────────────────────────────────┤
│  ┌─────────────┐ ┌──────────────┐ ┌──────────────────────┐ │
│  │ 🕐 Próximo  │ │ 📈 Ganhos    │ │ 📅 Plantões do Mês   │ │
│  │ Plantão     │ │ do Mês       │ │ 8 confirmados        │ │
│  │ Hoje, 18h   │ │ R$ 12.450    │ │ 3 pendentes          │ │
│  │ HSP São     │ │ +15% ↑       │ │                      │ │
│  │ Lucas       │ │              │ │                      │ │
│  └─────────────┘ └──────────────┘ └──────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│  Ações Rápidas                                              │
│  ┌──────────────────────┐ ┌──────────────────────────────┐ │
│  │ 📅 Buscar Plantões   │ │ 🕐 Ver Agenda                │ │
│  │ Encontre novas       │ │ Seus plantões confirmados    │ │
│  │ oportunidades        │ │                              │ │
│  └──────────────────────┘ └──────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│  👑 Desbloqueie recursos Premium                            │
│  Antecipação, emissão de NFs, AI Copilot e muito mais      │
│  [Conhecer Premium]                                         │
└──────────────────────────────────────────────────────────────┘
```

### 2. Marketplace

```
┌──────────────────────────────────────────────────────────────┐
│  Marketplace de Plantões                                     │
│  Encontre as melhores oportunidades                         │
├──────────────────────────────────────────────────────────────┤
│  🔍 Filtros                                                  │
│  [Localização...] [Especialidade▼] [Período▼] [Data▼]     │
├──────────────────────────────────────────────────────────────┤
│  👑 BUSCA INTELIGENTE COM ALERTAS [Premium]                 │
│  Receba notificações instantâneas de plantões...            │
│  • Buscas salvas • Alertas em tempo real • Acesso prioritário│
│  [Fazer Upgrade para Premium →]                             │
├──────────────────────────────────────────────────────────────┤
│  Plantões Disponíveis:                                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Hospital São Lucas                     [URGENTE]       │ │
│  │ [Clínico Geral]                                        │ │
│  │ 📍 Zona Sul, SP  🕐 15 Jan • 18h-6h  💰 R$ 1.800     │ │
│  │                                  [Candidatar-se]       │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Clínica Santa Maria                                    │ │
│  │ [Pediatria]                                            │ │
│  │ 📍 Centro, SP  🕐 16 Jan • 8h-18h  💰 R$ 1.500        │ │
│  │                                  [Candidatar-se]       │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### 3. Agenda

```
┌──────────────────────────────────────────────────────────────┐
│  Minha Agenda                          [+ Adicionar Plantão] │
│  Seus plantões confirmados e pendentes                      │
├──────────────────────────────────────────────────────────────┤
│  📅 Janeiro 2025              [← Anterior] [Próximo →]     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  15    Hospital São Lucas                R$ 1.800      │ │
│  │  Seg   [✓ Confirmado]                                  │ │
│  │        🕐 18h - 6h  📍 Zona Sul, SP                    │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │  18    Clínica Santa Maria              R$ 1.500       │ │
│  │  Qui   [✓ Confirmado]                                  │ │
│  │        🕐 8h - 18h  📍 Centro, SP                      │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │  20    Hospital Albert Einstein         R$ 2.200       │ │
│  │  Sáb   [⏱ Pendente]                                    │ │
│  │        🕐 18h - 6h  📍 Morumbi, SP                     │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### 4. Finanças

```
┌──────────────────────────────────────────────────────────────┐
│  Controle Financeiro    [🔒 Emitir NF] [🔒 Antecipar]      │
│  Acompanhe seus recebimentos                                │
├──────────────────────────────────────────────────────────────┤
│  ┌─────────────┐ ┌──────────────┐ ┌────────────────────┐  │
│  │ ✅ Recebido │ │ ⏱ A Receber │ │ 📊 Total do Mês    │  │
│  │ R$ 3.300    │ │ R$ 4.100     │ │ R$ 7.400           │  │
│  └─────────────┘ └──────────────┘ └────────────────────┘  │
├──────────────────────────────────────────────────────────────┤
│  Progresso de Recebimentos                      45% recebido│
│  [████████░░░░░░░░░]                                        │
├──────────────────────────────────────────────────────────────┤
│  👑 GESTÃO FINANCEIRA PREMIUM                               │
│  Emita NFs automaticamente e antecipe recebimentos          │
│  • Emissão de NFs • Antecipação 24h • Prevenção glosas     │
│  [Fazer Upgrade para Premium →]                             │
├──────────────────────────────────────────────────────────────┤
│  Histórico de Plantões                                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Hospital São Lucas ✓        R$ 1.800 [Recebido]       │ │
│  │ Plantão: 15 Jan • Pagamento: 20 Jan                   │ │
│  ├────────────────────────────────────────────────────────┤ │
│  │ Hospital Albert Einstein ⏱  R$ 2.200 [Pendente]       │ │
│  │ Plantão: 18 Jan • Pagamento: 25 Jan                   │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### 5. Perfil

```
┌──────────────────────────────────────────────────────────────┐
│  Perfil Profissional                                        │
│  Gerencie suas informações e documentos                     │
├──────────────────────────────────────────────────────────────┤
│  ✅ Perfil Verificado                         [Verificado]  │
│  Seus documentos foram verificados e seu perfil está ativo  │
├──────────────────────────────────────────────────────────────┤
│  Informações Pessoais                                       │
│  ┌─────────────────────┐ ┌──────────────────────────────┐ │
│  │ 👤 Nome Completo    │ │ 🏥 CRM                       │ │
│  │ Dr. João Silva      │ │ 123456 SP                    │ │
│  └─────────────────────┘ └──────────────────────────────┘ │
│  ┌─────────────────────┐ ┌──────────────────────────────┐ │
│  │ 📧 Email            │ │ 📱 Telefone                  │ │
│  │ joao@email.com      │ │ (11) 99999-9999              │ │
│  └─────────────────────┘ └──────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ 📍 Endereço                                           │ │
│  │ Rua Exemplo, 123 - São Paulo, SP                      │ │
│  └───────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│  Documentos                                                 │
│  ✅ CRM (Frente e Verso) - crm_joao_silva.pdf [Verificado] │
│  ✅ Comprovante Residência - comprovante.pdf  [Verificado] │
│  [📤 Adicionar Novo Documento]                              │
├──────────────────────────────────────────────────────────────┤
│  🎤 AI Copilot                            [Beta] [Premium]  │
│  Transcrição inteligente de consultas que economiza horas   │
│  [Ver Demonstração]                                         │
├──────────────────────────────────────────────────────────────┤
│                              [Cancelar] [Salvar Alterações] │
└──────────────────────────────────────────────────────────────┘
```

## Modais e Overlays

### Premium Modal (Recursos Tab)

```
┌─────────────────────────────────────────────────────────────┐
│  Desbloqueie Todo o Potencial da PlanTech            [✕]   │
│  Upgrade para Premium e tenha acesso a ferramentas...       │
├─────────────────────────────────────────────────────────────┤
│  [Recursos] [Comparação]                                    │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────────────┐ ┌────────────────────────────────┐ │
│  │ 📄 Gestão Contábil│ │ ⚡ Antecipação Recebíveis      │ │
│  │ • Emissão de NFs  │ │ • Aprovação instantânea         │ │
│  │ • Relatórios IR   │ │ • Taxas competitivas            │ │
│  │ • Integração      │ │ • Sem burocracia                │ │
│  └────────────────────┘ └────────────────────────────────┘ │
│  ┌────────────────────┐ ┌────────────────────────────────┐ │
│  │ 🔍 Busca Intelig. │ │ 🎤 AI Copilot         [Beta]   │ │
│  │ • Buscas salvas   │ │ • Transcrição real-time         │ │
│  │ • Alertas real    │ │ • Organização automática        │ │
│  │ • Acesso priorit  │ │ • 100% LGPD                     │ │
│  └────────────────────┘ └────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  🛡️ Segurança e Privacidade                                │
│  Todos os recursos com foco em LGPD e CFM                  │
│  [LGPD] [Criptografia] [CFM]                               │
├─────────────────────────────────────────────────────────────┤
│  [Assinar Premium - R$ 99,90/mês] [Continuar Gratuito]    │
└─────────────────────────────────────────────────────────────┘
```

### Premium Modal (Comparação Tab)

```
┌─────────────────────────────────────────────────────────────┐
│  Compare os Planos                                    [✕]   │
├─────────────────────────────────────────────────────────────┤
│  [Recursos] [Comparação]                                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐          ┌──────────────────────────────┐ │
│  │ Gratuito    │          │ Premium 👑                   │ │
│  │ R$ 0/mês    │          │ R$ 99,90/mês                 │ │
│  │ [Atual]     │          │ [Fazer Upgrade]              │ │
│  └─────────────┘          └──────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  Funcionalidade          | Gratuito  | Premium            │
│  ─────────────────────────────────────────────────────────  │
│  Dashboard               |    ✓      |    ✓               │
│  Marketplace             |    ✓      |    ✓               │
│  Filtros busca           |  Básicos  | Avançados          │
│  Buscas salvas           |    ✗      |    ✓               │
│  Alertas tempo real      |    ✗      |    ✓               │
│  Emissão NF              |    ✗      |    ✓               │
│  Antecipação             |    ✗      |   24h              │
│  AI Copilot              |    ✗      |   Beta             │
│  ─────────────────────────────────────────────────────────  │
├─────────────────────────────────────────────────────────────┤
│              [Assinar Premium - R$ 99,90/mês]               │
└─────────────────────────────────────────────────────────────┘
```

### AI Copilot Demo

```
┌─────────────────────────────────────────────────────────────┐
│  🎤 AI Copilot                        [Beta] [Premium] [✕] │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐│
│  │  🎤 Gravação de Consulta           [🔒 Premium Only]   ││
│  │  Recurso disponível apenas para Premium                ││
│  │  [🔒 Iniciar Gravação] (disabled)                      ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  📄 Prévia de Transcrição (Exemplo) - Opacidade 60%        │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Queixa Principal:                                       ││
│  │ Paciente relata dor abdominal há 2 dias...              ││
│  │                                                         ││
│  │ Histórico:                                              ││
│  │ Nega alergias. Hipertenso em uso de losartana...       ││
│  │                                                         ││
│  │ Exame Físico:                                           ││
│  │ BEG, corado, hidratado. PA: 130/80 mmHg...              ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  🛡️ Consentimento e Privacidade                            │
│  Requer consentimento do paciente. Dados criptografados.   │
│  Conformidade com LGPD e CFM.                              │
│  [100% LGPD] [CFM Approved] [Criptografia E2E]            │
├─────────────────────────────────────────────────────────────┤
│  Economize horas de trabalho administrativo                │
│  Médicos Premium economizam 10h/mês em documentação        │
│  [Ativar Premium e Liberar AI Copilot]                     │
└─────────────────────────────────────────────────────────────┘
```

## Paleta de Cores Visual

### Light Mode
```
Background:     ████ Branco puro
Primary:        ████ Azul médico (205 85% 45%)
Secondary:      ████ Verde sucesso (155 70% 50%)
Muted:          ████ Cinza claro
Border:         ▓▓▓▓ Cinza muito claro
```

### Dark Mode
```
Background:     ████ Azul escuro (210 30% 8%)
Primary:        ████ Azul brilhante (205 85% 55%)
Secondary:      ████ Verde (155 70% 50%)
Muted:          ████ Cinza escuro
Border:         ▓▓▓▓ Cinza médio escuro
```

## Iconografia

| Conceito | Ícone | Cor |
|----------|-------|-----|
| Plantões | 📅 Calendar | Primary |
| Finanças | 💰 DollarSign | Success/Green |
| Urgente | ⚠️ Badge | Destructive/Red |
| Verificado | ✅ CheckCircle | Success/Green |
| Premium | 👑 Crown | Primary/Gold |
| AI Copilot | 🎤 Mic | Primary |
| Pendente | ⏱ Clock | Warning/Orange |

## Animações e Transições

### Entrada de Página
- `animate-fade-in` (0.6s ease-out)
- Opacidade: 0 → 1
- Transform: translateY(20px) → 0

### Hover em Cards
- Scale: 1 → 1.02
- Shadow: md → lg
- Duration: 300ms

### Botões Hero
- Hover: opacity-90 + scale-105
- Shadow: lg → xl
- Gradiente animado

### Dark Mode Toggle
- Transition: all 0.3s cubic-bezier
- Ícone rotaciona
- Cores mudam suavemente

## Responsividade

### Desktop (1024px+)
- Grid 3 colunas em stats
- Grid 2 colunas em features
- Top navigation horizontal
- Sidebar possível

### Tablet (768px - 1023px)
- Grid 2 colunas
- Top navigation compacta
- Cards lado a lado

### Mobile (< 768px)
- Grid 1 coluna (stack vertical)
- Bottom navigation
- Cards full-width
- Touch-optimized (44px+ targets)

