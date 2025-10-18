# Funcionalidades PlanTech MVP

## Plano Gratuito (Implementado)

### 1. Dashboard Principal
**Objetivo**: Entregar valor imediato e tornar o app o primeiro a ser aberto no dia

**Funcionalidades**:
- Resumo visual do próximo plantão com localização
- Total de ganhos do mês (registrados manualmente)
- Contador de plantões confirmados vs pendentes
- Ações rápidas: Buscar plantões e Ver agenda
- Card de upgrade para Premium

**Tecnologias**: React, Tailwind, Cards com gradientes

### 2. Marketplace de Plantões
**Objetivo**: Substituir grupos de WhatsApp e se tornar a principal fonte de oportunidades

**Funcionalidades**:
- Feed centralizado de vagas disponíveis
- Filtros: Localização, Especialidade, Período, Data
- Badge de urgência para plantões prioritários
- Sistema de candidatura (toast de confirmação)
- Preview de recursos Premium (alertas inteligentes)

**Dados**: Mock data em `src/data/mockData.ts`

### 3. Agenda Unificada
**Objetivo**: Ser a "fonte da verdade" para organização do médico

**Funcionalidades**:
- Calendário visual com todos os plantões
- Status visual (confirmado/pendente)
- Detalhes: hospital, horário, localização, valor
- Navegação entre meses
- Botão para adicionar plantão manual (em desenvolvimento)

**Design**: Cards com gradientes, badges de status coloridos

### 4. Controle Financeiro Básico
**Objetivo**: Atender necessidade básica de controle de renda

**Funcionalidades**:
- Cards de resumo: Recebido, A Receber, Total do Mês
- Barra de progresso visual de recebimentos
- Histórico de plantões com status de pagamento
- Cálculo automático de totais
- Tooltips mostrando recursos Premium (NF, Antecipação)

**Cálculos**: Função `calculateFinancialSummary` em mockData.ts

### 5. Perfil Profissional
**Objetivo**: Construir confiança e servir como "passaporte profissional"

**Funcionalidades**:
- Badge de "Perfil Verificado"
- Formulário de dados pessoais (nome, CRM, email, telefone, endereço)
- Seção de documentos com status de verificação
- Upload de documentos (mockup)
- Preview do AI Copilot com demo visual
- Botão de salvar alterações

**Validação**: Campos com ícones e placeholders em português

## Plano Premium (Preview/Mockup)

### 1. Gestão Contábil Avançada
**Recursos**:
- Emissão automática de notas fiscais
- Integração com sistemas contábeis
- Relatórios completos para declaração de IR
- Controle de glosas

**Status**: UI de preview com tooltips e modais explicativos

### 2. Antecipação de Recebíveis
**Recursos**:
- Aprovação instantânea
- Recebimento em até 24h
- Taxas transparentes
- Sem burocracia

**Status**: Botões desabilitados com tooltips informativos

### 3. Busca Inteligente
**Recursos**:
- Salvar buscas personalizadas
- Alertas em tempo real de novas vagas
- Acesso prioritário antes dos usuários gratuitos
- Filtros avançados ilimitados

**Status**: UpgradeCard em Marketplace explicando benefícios

### 4. AI Copilot (Beta)
**Recursos**:
- Transcrição em tempo real de consultas
- Estruturação automática de prontuário
- Organização por seções (Queixa, Histórico, Exame, Diagnóstico)
- Workflow de consentimento LGPD
- Criptografia end-to-end

**Status**: Mockup completo mostrando interface, com exemplo de transcrição

**Compliance**:
- Badge de conformidade LGPD
- Notas sobre privacidade e CFM
- Exemplo de fluxo de consentimento

## Componentes Premium

### PremiumModal
Modal com 2 tabs:
1. **Recursos**: Grid de cards mostrando cada feature Premium
2. **Comparação**: Tabela Free vs Premium feature-by-feature

Acionado por:
- Botão "Ver Premium" no Dashboard
- Cards de upgrade em Marketplace e Finanças

### AICopilotPreview
Demonstração visual completa do AI Copilot:
- Interface de gravação (desabilitada)
- Exemplo de transcrição estruturada
- Badges de compliance (LGPD, CFM)
- CTA para upgrade

### UpgradeCard
Componente reutilizável para promover Premium:
- Título e descrição customizáveis
- Lista de features
- CTA de upgrade
- Visual consistente com gradientes

## Design System

### Cores
Baseado em plant-care-connect com extensões:
- Primary: Azul médico (confiança)
- Secondary/Success: Verde (financeiro positivo)
- Warning: Laranja (pendências)
- Destructive: Vermelho (urgências)

### Gradientes
- `gradient-hero`: Multi-color para CTAs principais
- `gradient-primary`: Azul para botões
- `gradient-secondary`: Verde para sucesso
- `gradient-success`: Verde para cards financeiros
- `gradient-card`: Sutil para backgrounds

### Dark Mode
Otimizado para plantões noturnos:
- Contraste adequado
- Cores menos saturadas
- Gradientes ajustados
- Persistência em localStorage

## Próximos Passos (Roadmap)

### Fase 1: MVP Funcional (Atual)
- ✅ Design system completo
- ✅ Autenticação Supabase
- ✅ 5 seções do plano gratuito
- ✅ Previews de recursos Premium
- ✅ Dark mode

### Fase 2: Backend Integration
- Conectar Supabase para CRUD de plantões
- Sistema real de candidaturas
- Upload real de documentos
- Perfil dinâmico baseado em auth.user

### Fase 3: Premium Features
- Gateway de pagamento (Stripe/Pagar.me)
- Implementação de NF-e
- Parceria com fintech para antecipação
- Notificações push

### Fase 4: AI Copilot
- Integração com API de speech-to-text
- NLP para estruturação de prontuário
- Workflow de consentimento
- Armazenamento seguro e criptografado

### Fase 5: Match por Qualidade
- Sistema de scoring baseado em dados
- Anonimização robusta
- Features para instituições (B2B)
- Marketplace bidirecional

