# ⚡ Início Ultra-Rápido - PlanTech

## Opção 1: Modo Demo (Sem Supabase) - 30 Segundos

```bash
cd PlanTech
npm install
npm run dev
```

✅ Acesse: http://localhost:8080

**O que funciona**:
- ✅ Landing page completa
- ✅ Navegação para `/app` direto na URL
- ✅ Todas as 5 seções com mock data
- ✅ Dark mode
- ✅ Modais Premium
- ❌ Login/Cadastro (precisa de Supabase)

---

## Opção 2: Com Supabase (Auth Real) - 5 Minutos

### 1. Criar Projeto Supabase (2 min)
1. Acesse [supabase.com](https://supabase.com)
2. Criar nova conta (se não tiver)
3. Criar novo projeto
4. Aguardar provisionamento

### 2. Copiar Credenciais (1 min)
1. No painel Supabase: Settings > API
2. Copiar:
   - Project URL
   - anon public key

### 3. Configurar Variáveis (30 seg)
Edite `PlanTech/.env.local`:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGc...sua-chave-aqui
```

### 4. Executar Migration (1 min)
1. No painel Supabase: SQL Editor
2. Copiar conteúdo de `supabase/migrations/001_initial_schema.sql`
3. Colar e executar (Run)

### 5. Iniciar App (30 seg)
```bash
npm run dev
```

✅ Agora login/cadastro funcionam!

---

## 🎮 Explorando o App

### Modo Demo (Sem Login)
1. Acesse http://localhost:8080
2. Navegue pela landing page
3. Vá direto para: http://localhost:8080/app
4. Explore todas as seções:
   - Dashboard (stats e ações)
   - Marketplace (filtros e vagas)
   - Agenda (calendário)
   - Finanças (controle)
   - Perfil (dados)
5. Teste dark mode (ícone lua/sol)
6. Abra modal Premium (botão "Ver Premium")
7. Veja demo AI Copilot (no Perfil)

### Com Supabase (Login Real)
1. Acesse `/auth`
2. Cadastre-se na tab "Cadastrar"
3. Faça login
4. Será redirecionado para `/app`
5. Explore com auth real

---

## ⚠️ Problema: Banner de Modo Demo Aparece

**Motivo**: Supabase não está configurado

**Solução**:
1. Configure `.env.local` com suas credenciais
2. Reinicie o servidor (`Ctrl+C` e `npm run dev`)
3. Banner desaparecerá

---

## 🎨 Testar Dark Mode

1. Clique no ícone de lua (top right)
2. Página escurece imediatamente
3. Navegue entre seções
4. Tudo está otimizado para dark
5. Clique no sol para voltar

---

## 👑 Ver Recursos Premium

### No Dashboard
- Clique em "Ver Premium"
- Veja modal com 2 tabs
- Tab "Recursos": 4 features Premium
- Tab "Comparação": Tabela Free vs Premium

### No Marketplace
- Scroll down
- Veja card "Busca Inteligente com Alertas"
- Lista de features Premium

### No Perfil
- Scroll até o final
- Card "AI Copilot" com badge Beta
- Clique em "Ver Demonstração"
- Veja mockup completo da transcrição

### Nas Finanças
- Veja card "Gestão Financeira Premium"
- Passe mouse nos botões "Emitir NF" e "Antecipar"
- Tooltips explicam features Premium

---

## 🐛 Troubleshooting

### Erro: "supabaseUrl is required"
✅ **RESOLVIDO** - App agora funciona em modo demo

### Erro ao instalar
```bash
rm -rf node_modules package-lock.json
npm install
```

### Página em branco
- Abra DevTools (F12)
- Veja erros no Console
- Verifique se `npm run dev` está rodando

### Dark mode não persiste
- Limpe localStorage
- Tente novamente

---

## 📝 Próximos Passos

1. ✅ Explorar o app em modo demo
2. 📖 Ler [FEATURES.md](FEATURES.md) para entender tudo
3. 🔧 Configurar Supabase quando quiser auth real
4. 🚀 Deploy (veja [DEPLOYMENT.md](DEPLOYMENT.md))

---

**Dica**: Você pode usar o app completamente em modo demo para apresentações e testes de UI!

