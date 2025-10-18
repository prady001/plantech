# 🚀 COMECE AQUI - PlanTech MVP

## Bem-vindo ao PlanTech!

Este é o **MVP completo** da plataforma PlanTech, pronto para uso.

## ⚡ Início Ultra-Rápido (3 minutos)

### Passo 1: Instalar (1 min)
```bash
cd PlanTech
npm run setup
```

### Passo 2: Configurar Supabase (1 min)

**Opção A: Setup Completo**
1. Criar conta em [supabase.com](https://supabase.com)
2. Criar projeto
3. Copiar credenciais (Settings > API)
4. Criar `.env.local`:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-aqui
```
5. Executar SQL de `supabase/migrations/001_initial_schema.sql`

**Opção B: Modo Demo (Sem Backend)**
- Pule esta etapa
- Auth não funcionará, mas pode explorar UI

### Passo 3: Executar (30 seg)
```bash
npm run dev
```

Abrir: **http://localhost:8080**

## ✨ O Que Você Vai Ver

### 1. Landing Page
- Hero com gradiente
- 3 pilares da plataforma
- Seções para profissionais e instituições
- CTA para cadastro

### 2. Tela de Auth
- Tab de Login
- Tab de Cadastro
- Design limpo e profissional

### 3. Aplicação Interna (5 seções)
- **Dashboard**: Resumo com stats
- **Marketplace**: Vagas de plantões
- **Agenda**: Calendário de plantões
- **Finanças**: Controle de recebimentos
- **Perfil**: Dados e documentos

### 4. Recursos Premium (Preview)
- Modal com todas as features
- AI Copilot demo completo
- Tabela de comparação de planos

## 🎨 Explorar o Design

**Cores e Gradientes**:
- Abra `src/index.css`
- Veja variáveis CSS em `:root`

**Dark Mode**:
- Clique no ícone de lua/sol (topo direito)
- Persiste em localStorage

**Componentes UI**:
- Veja `src/components/ui/`
- Todos baseados em shadcn/ui

## 📖 Documentação Disponível

| Precisa de... | Leia... | Tempo |
|---------------|---------|-------|
| Visão geral | [README.md](README.md) | 5 min |
| Como instalar | [SETUP.md](SETUP.md) | 8 min |
| Como funciona | [ARCHITECTURE.md](ARCHITECTURE.md) | 12 min |
| O que tem | [FEATURES.md](FEATURES.md) | 15 min |
| Como fazer deploy | [DEPLOYMENT.md](DEPLOYMENT.md) | 10 min |
| Visual das telas | [VISUAL_GUIDE.md](VISUAL_GUIDE.md) | 7 min |

**Índice completo**: [DOCS_INDEX.md](DOCS_INDEX.md)

## 🎯 Principais Funcionalidades

### Gratuitas ✅
1. Dashboard com resumo inteligente
2. Marketplace com 50+ plantões simulados
3. Agenda com calendário visual
4. Controle financeiro com progress bar
5. Perfil profissional verificado

### Premium (Preview) 👑
1. Gestão contábil e emissão de NFs
2. Antecipação de recebíveis (24h)
3. Busca inteligente com alertas
4. AI Copilot para transcrição

## 🔧 Customizar

### Alterar Nome do Usuário
`src/components/app/Dashboard.tsx` linha ~14:
```typescript
<h1>Olá, Dr. Silva</h1>
// Altere para seu nome
```

### Adicionar Plantões
`src/data/mockData.ts`:
```typescript
export const mockShifts = [
  // Adicione novos objetos aqui
];
```

### Mudar Cores
`src/index.css`:
```css
--primary: 205 85% 45%; /* Sua cor em HSL */
```

## 🐛 Problemas Comuns

**Erro ao instalar**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

**Supabase não conecta**:
- Verificar `.env.local` existe
- Confirmar credenciais corretas
- Executar migration SQL

**Dark mode não funciona**:
- Limpar localStorage
- Recarregar página

## 🎓 Próximos Passos

1. ✅ Instalar e executar (você está aqui)
2. 📖 Ler documentação (DOCS_INDEX.md)
3. 🧪 Testar todas as funcionalidades
4. 🔌 Conectar Supabase real
5. 🚀 Deploy em produção

## 💬 Suporte

- **Dúvidas técnicas**: Consulte ARCHITECTURE.md
- **Como usar**: Consulte GETTING_STARTED.md
- **Problemas de setup**: Consulte SETUP.md
- **Problemas de deploy**: Consulte DEPLOYMENT.md

## 🎉 Pronto!

Você está pronto para explorar o PlanTech MVP.

**Divirta-se explorando a plataforma!**

---

**Tempo total de setup**: ~3 minutos  
**Complexidade**: Baixa  
**Suporte**: Documentação completa disponível

