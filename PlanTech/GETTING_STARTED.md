# Guia Completo - PlanTech MVP

## Introdução

PlanTech é uma plataforma completa para gestão de plantões médicos que combina:
- Marketplace de oportunidades
- Controle financeiro inteligente
- Agenda unificada
- Recursos Premium com IA

Este MVP demonstra o conceito core com dados mockados, pronto para integração real.

## Instalação Rápida

### 1. Clonar e Instalar

```bash
cd PlanTech
npm install
```

### 2. Configurar Supabase

**Opção A: Usar Supabase Cloud (Recomendado)**

1. Criar conta em [supabase.com](https://supabase.com)
2. Criar novo projeto
3. Copiar credenciais (Settings > API)
4. Criar `.env.local`:

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJxxx...
```

5. Executar migration:
   - Abrir SQL Editor no Supabase
   - Copiar conteúdo de `supabase/migrations/001_initial_schema.sql`
   - Executar

**Opção B: Modo Demo (Sem Supabase)**

Para testar rapidamente sem backend:
1. Deixar `.env.local` vazio
2. Auth não funcionará mas pode navegar manualmente para `/app`

### 3. Iniciar

```bash
npm run dev
```

Abrir: http://localhost:8080

## Navegação da Aplicação

### Jornada do Usuário

```
Landing (/) 
  → Botão "Começar Agora"
    → Auth (/auth)
      → Cadastro com dados
        → Redirect para App (/app)
          → Dashboard (início)
            → Navegar entre seções
```

### Seções do App

1. **Início** - Dashboard com resumo
2. **Plantões** - Marketplace de vagas
3. **Agenda** - Calendário de plantões
4. **Finanças** - Controle de recebimentos
5. **Perfil** - Dados profissionais

## Testando Funcionalidades

### Plano Gratuito

**Dashboard**:
- Visualize cards de resumo
- Clique em "Buscar Plantões" ou "Ver Agenda"
- Clique em "Ver Premium" para modal

**Marketplace**:
- Use os filtros (Localização, Especialidade, etc)
- Veja os plantões disponíveis
- Clique em "Candidatar-se" (mostra toast)
- Observe card de upgrade "Busca Inteligente"

**Agenda**:
- Veja plantões confirmados e pendentes
- Use navegação de meses
- Clique em "Adicionar Plantão" (em dev)

**Finanças**:
- Veja totais: Recebido, A Receber, Total
- Observe barra de progresso
- Veja histórico de plantões
- Passe mouse nos botões bloqueados (tooltips Premium)

**Perfil**:
- Edite informações pessoais
- Veja documentos verificados
- Clique em "Ver Demonstração" do AI Copilot

### Recursos Premium (Preview)

**Modal Premium** (via Dashboard):
- Tab "Recursos": Grid de features Premium
- Tab "Comparação": Tabela Free vs Premium

**AI Copilot Demo** (via Perfil):
- Veja mockup da interface de gravação
- Exemplo de transcrição estruturada
- Badges de compliance LGPD/CFM
- CTA de upgrade

**Cards de Upgrade**:
- Marketplace: "Busca Inteligente"
- Finanças: "Gestão Financeira Premium"

## Dark Mode

**Ativar**:
- Clique no ícone de lua/sol no topo direito
- Modo persiste em localStorage
- Otimizado para plantões noturnos

## Customização

### Alterar Dados Mock

Edite `src/data/mockData.ts`:
```typescript
export const mockShifts = [
  {
    id: 1,
    hospital: "Seu Hospital",
    specialty: "Sua Especialidade",
    // ...
  }
];
```

### Alterar Cores

Edite `src/index.css`:
```css
:root {
  --primary: 205 85% 45%; /* Azul */
  --secondary: 155 70% 50%; /* Verde */
}
```

### Adicionar Nova Funcionalidade

1. Criar componente em `src/components/app/`
2. Adicionar rota em `Navigation.tsx`
3. Adicionar case em `AppShell.tsx`
4. Atualizar tipos em `src/types/index.ts`

## Integração com Supabase Real

### Substituir Mock Data

**Exemplo: Buscar plantões do usuário**

```typescript
// Em Schedule.tsx
import { supabase } from "@/integrations/supabase/client";

const loadUserShifts = async () => {
  const { data, error } = await supabase
    .from('shifts')
    .select('*')
    .eq('user_id', user.id)
    .order('date', { ascending: true });
    
  if (error) {
    toast({ 
      title: "Erro", 
      description: error.message,
      variant: "destructive" 
    });
    return;
  }
  
  setShifts(data);
};
```

## Solução de Problemas

### Build Falha

```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Componente não Renderiza

1. Verificar imports
2. Checar console do browser
3. Confirmar que componente está exportado
4. Verificar se props estão corretas

### Supabase Não Conecta

1. Verificar `.env.local` existe e tem valores corretos
2. Confirmar que URL termina com `.supabase.co`
3. Verificar se chave é a `anon public` (não a service_role)
4. Testar credenciais direto no browser console

## Performance

### Otimizações Implementadas

- Code splitting automático (Vite)
- Lazy loading de rotas
- Tailwind CSS purge automático
- Imagens otimizadas
- Fonts system-ui (sem download)

### Métricas Esperadas

- Lighthouse Performance: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle size: < 500kb

## Segurança

### Implementado

- Row Level Security (RLS) no Supabase
- Autenticação via JWT
- HTTPS obrigatório em produção
- Sanitização de inputs
- Protected routes

### Próximos Passos

- Rate limiting
- CAPTCHA no signup
- 2FA opcional
- Auditoria de acessos
- Backup automático

## Suporte

### Recursos Úteis

- [Documentação React Router](https://reactrouter.com)
- [Documentação Supabase](https://supabase.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Contato

Para dúvidas sobre este MVP, consulte:
- ARCHITECTURE.md - estrutura técnica
- FEATURES.md - funcionalidades detalhadas
- SETUP.md - instalação passo a passo

