# Guia de Deploy - PlanTech MVP

## Opções de Deploy

### Opção 1: Vercel (Recomendado)

1. **Preparar Repositório**
```bash
git init
git add .
git commit -m "Initial commit: PlanTech MVP"
```

2. **Criar Repositório no GitHub**
```bash
# Criar repo no GitHub e conectar
git remote add origin https://github.com/seu-usuario/plantech-mvp.git
git push -u origin main
```

3. **Deploy na Vercel**
- Acesse [vercel.com](https://vercel.com)
- Conecte seu repositório GitHub
- Configure variáveis de ambiente:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
- Deploy automático em cada push

### Opção 2: Netlify

1. **Build Local**
```bash
npm run build
```

2. **Deploy via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

3. **Configurar Variáveis**
- No dashboard: Site settings > Environment variables
- Adicionar `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`

### Opção 3: Cloudflare Pages

1. **Conectar Repositório**
- Acesse Cloudflare Pages
- Conecte seu repositório GitHub

2. **Configurações de Build**
- Build command: `npm run build`
- Output directory: `dist`

3. **Variáveis de Ambiente**
- Adicionar no dashboard do Cloudflare

## Configuração Supabase para Produção

### 1. URLs Permitidas

No painel do Supabase:
- Settings > Authentication > URL Configuration
- Adicionar:
  - Site URL: `https://seu-dominio.com`
  - Redirect URLs: `https://seu-dominio.com/**`

### 2. Email Templates

Customizar templates de email:
- Authentication > Email Templates
- Traduzir para português
- Adicionar branding PlanTech

### 3. RLS Policies

Verificar se todas as policies estão ativas:
```sql
-- Verificar policies
SELECT tablename, policyname FROM pg_policies 
WHERE schemaname = 'public';
```

## Checklist Pré-Deploy

- [ ] Testar build local (`npm run build`)
- [ ] Verificar que não há erros de TypeScript
- [ ] Testar preview (`npm run preview`)
- [ ] Confirmar que dark mode funciona
- [ ] Testar responsividade mobile
- [ ] Verificar que todas as imagens carregam
- [ ] Confirmar navegação entre rotas
- [ ] Testar fluxo de autenticação completo
- [ ] Verificar migrations do Supabase
- [ ] Confirmar variáveis de ambiente

## Monitoramento Pós-Deploy

### Métricas Importantes

1. **Performance**
   - Lighthouse score > 90
   - First Contentful Paint < 1.5s
   - Time to Interactive < 3s

2. **Autenticação**
   - Taxa de sucesso de signup
   - Taxa de sucesso de login
   - Tempo de resposta do Supabase

3. **Engagement**
   - Páginas mais visitadas
   - Tempo médio na plataforma
   - Taxa de conversão (visitante → cadastro)

### Ferramentas

- Google Analytics ou Plausible
- Sentry para error tracking
- Supabase Dashboard para métricas de DB

## Troubleshooting Comum

### Erro: "Failed to fetch"
- Verificar CORS no Supabase
- Confirmar URLs permitidas

### Dark mode não persiste
- Verificar se localStorage está habilitado
- Confirmar inicialização em AppShell.tsx

### Rotas protegidas não funcionam
- Verificar se token do Supabase está válido
- Confirmar que auth state está sendo monitorado

## Rollback

Em caso de problemas:

1. **Vercel/Netlify**: Reverter para deploy anterior no dashboard
2. **Supabase**: Usar point-in-time recovery se necessário
3. **Código**: `git revert` ou `git reset --hard` para commit anterior

## Suporte

Para dúvidas sobre:
- **Frontend**: Verificar logs do browser console
- **Backend**: Verificar logs do Supabase
- **Deploy**: Verificar logs da plataforma (Vercel/Netlify)

