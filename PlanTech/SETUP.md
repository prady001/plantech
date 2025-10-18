# Guia de Setup - PlanTech MVP

## Requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase (gratuita)

## Instalação

### 1. Instalar Dependências

```bash
cd PlanTech
npm install
```

### 2. Configurar Supabase

1. Acesse [supabase.com](https://supabase.com) e crie um projeto
2. Vá em Settings > API
3. Copie `Project URL` e `anon public key`
4. Crie arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publica-aqui
```

### 3. Executar Migrations

No painel do Supabase:
1. Vá em SQL Editor
2. Copie o conteúdo de `supabase/migrations/001_initial_schema.sql`
3. Execute o SQL

### 4. Iniciar Aplicação

```bash
npm run dev
```

Acesse: http://localhost:8080

## Estrutura de Usuário

### Criar Conta
1. Acesse `/auth`
2. Vá na aba "Cadastrar"
3. Preencha os dados
4. Faça login

### Testar Funcionalidades

**Plano Gratuito** (totalmente funcional):
- Dashboard com resumo
- Marketplace de plantões
- Agenda de plantões
- Controle financeiro básico
- Perfil profissional

**Plano Premium** (preview/mockup):
- Clique em "Ver Premium" no Dashboard
- Veja a demo do AI Copilot no Perfil
- Observe os cards de upgrade em Marketplace e Finanças

## Customização

### Alterar Cores

Edite `src/index.css` na seção `:root`:
```css
--primary: 205 85% 45%;    /* Azul médico */
--secondary: 155 70% 50%;  /* Verde sucesso */
```

### Adicionar Novos Plantões

Edite os arrays `mockShifts` ou `mockSchedule` nos componentes correspondentes até conectar com Supabase.

## Build para Produção

```bash
npm run build
npm run preview
```

## Troubleshooting

### Erro de autenticação
- Verifique se as credenciais do Supabase estão corretas no `.env.local`
- Confirme que as migrations foram executadas

### Componentes não aparecem
- Execute `npm install` novamente
- Limpe o cache: `rm -rf node_modules && npm install`

### Dark mode não funciona
- Verifique localStorage no DevTools
- Chave: `theme`, valor: `"dark"` ou `"light"`

