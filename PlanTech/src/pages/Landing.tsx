import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HorizontalCarousel, SlideContent } from "@/components/ui/horizontal-carousel";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, Calendar, DollarSign, Zap, Briefcase, PiggyBank, 
  TrendingUp, CheckCircle2, User, Search, FileText, Mic, 
  BarChart3, Brain, Users, MessageSquare, Shield, Clock,
  Target, Award, Sparkles, Heart, Menu, X
} from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <Logo size="md" className="sm:hidden" />
            <Logo size="lg" className="hidden sm:block" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#solucao" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                Solução
              </a>
              <a href="#profissionais" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                Profissionais
              </a>
              <a href="#instituicoes" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                Instituições
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
                Entrar
              </Button>
              <Button variant="hero" size="sm" onClick={() => navigate('/auth')}>
                Começar Agora
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-9 w-9"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Navigation Links */}
                <nav className="space-y-3">
                  <a 
                    href="#solucao" 
                    className="block text-base text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solução
                  </a>
                  <a 
                    href="#profissionais" 
                    className="block text-base text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profissionais
                  </a>
                  <a 
                    href="#instituicoes" 
                    className="block text-base text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Instituições
                  </a>
                </nav>

                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={() => {
                      navigate('/auth');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Entrar
                  </Button>
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => {
                      navigate('/auth');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Começar Agora
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section - Mantido como carrossel simples */}
        <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
          {/* Background com gradiente animado */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 dark:from-primary/20 dark:via-transparent dark:to-secondary/20" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent" />
            
            {/* Elementos decorativos animados - ajustados para mobile */}
            <div className="absolute top-10 sm:top-20 -left-10 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow dark:bg-primary/30" />
            <div className="absolute bottom-10 sm:bottom-20 -right-10 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float dark:bg-secondary/30" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-glow dark:from-primary/20 dark:to-secondary/20" />
            
            {/* Grid pattern sutil */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg dark:from-primary/20 dark:to-secondary/20 dark:border-primary/30">
                <div className="relative">
                  <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-primary animate-pulse" />
                  <div className="absolute inset-0 w-3 sm:w-4 h-3 sm:h-4 bg-primary/30 rounded-full animate-ping" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-primary dark:text-primary-foreground">
                  Sistema Operacional para Saúde
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-4 sm:px-0">
                O Futuro da Gestão de{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                    Plantões Médicos
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-secondary/20 blur-xl -z-10 animate-pulse-glow" />
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                Conectamos hospitais e profissionais de saúde com eficiência, organizamos sua vida
                financeira e oferecemos a liquidez que você precisa para prosperar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4 sm:px-0">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => navigate('/auth')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Começar Gratuitamente</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Agendar Demo</span>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-border/50 max-w-2xl mx-auto px-4 sm:px-0">
                <div className="group text-center">
                  <div className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-primary mb-2 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                    <span className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">15K+</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Plantões/Mês</p>
                </div>
                <div className="group text-center">
                  <div className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-secondary mb-2 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 dark:from-secondary/20 dark:to-secondary/10 group-hover:scale-110 transition-all duration-300">
                    <DollarSign className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                    <span className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent whitespace-nowrap">50M+</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-green-600/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Movimentados</p>
                </div>
                <div className="group text-center">
                  <div className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-primary mb-2 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                    <span className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">98%</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solução Section - Carrossel Horizontal */}
        <section id="solucao" className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
          {/* Background com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10" />
          
          {/* Elementos decorativos - ajustados para mobile */}
          <div className="absolute top-5 sm:top-10 -right-10 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow dark:bg-primary/20" />
          <div className="absolute bottom-5 sm:bottom-10 -left-10 sm:left-20 w-48 sm:w-80 h-48 sm:h-80 bg-secondary/10 rounded-full blur-3xl animate-float dark:bg-secondary/20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <HorizontalCarousel
              title="Um Ecossistema Integrado"
              subtitle="Três camadas de serviços que se complementam e fortalecem o ecossistema"
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4000}
            >
              {/* Slide 1: Marketplace */}
              <SlideContent>
                <div className="max-w-4xl mx-auto">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-12 h-12 text-primary-foreground" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">Marketplace</span>
                      </h3>
                      <p className="text-xl text-primary font-medium">Liquidez e Eficiência</p>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Conectamos a demanda de hospitais à oferta de profissionais de forma rápida e inteligente.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                          <Search className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">Busca Inteligente</h4>
                        <p className="text-sm text-muted-foreground">IA encontra os melhores matches</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">Preenchimento Rápido</h4>
                        <p className="text-sm text-muted-foreground">Plantões preenchidos em minutos</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">Qualidade Garantida</h4>
                        <p className="text-sm text-muted-foreground">Profissionais verificados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideContent>

              {/* Slide 2: Plataforma Financeira */}
              <SlideContent>
                <div className="max-w-4xl mx-auto">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                      <PiggyBank className="w-12 h-12 text-secondary-foreground" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold">
                        <span className="bg-gradient-secondary bg-clip-text text-transparent">Plataforma Financeira</span>
                      </h3>
                      <p className="text-xl text-secondary font-medium">Controle e Organização</p>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Ferramentas gratuitas para gerenciar toda a vida financeira em um só lugar.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                          <BarChart3 className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold">Dashboard Completo</h4>
                        <p className="text-sm text-muted-foreground">Visão geral das finanças</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                          <FileText className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold">Relatórios para IR</h4>
                        <p className="text-sm text-muted-foreground">Geração automática de documentos</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                          <TrendingUp className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold">Análise de Tendências</h4>
                        <p className="text-sm text-muted-foreground">Insights sobre ganhos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideContent>

              {/* Slide 3: Fintech */}
              <SlideContent>
                <div className="max-w-4xl mx-auto">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-12 h-12 text-primary-foreground" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-bold">
                        <span className="bg-gradient-hero bg-clip-text text-transparent">Fintech</span>
                      </h3>
                      <p className="text-xl text-primary font-medium">Liberdade e Flexibilidade</p>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Serviços financeiros de alto valor, começando pela antecipação de pagamentos.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-8">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                          <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">Antecipação Rápida</h4>
                        <p className="text-sm text-muted-foreground">Receba em até 24h</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">Segurança Total</h4>
                        <p className="text-sm text-muted-foreground">Transações protegidas</p>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold">Taxas Competitivas</h4>
                        <p className="text-sm text-muted-foreground">Melhores do mercado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideContent>
            </HorizontalCarousel>
          </div>
        </section>

        {/* Profissionais Section - Carrossel Horizontal */}
        <section id="profissionais" className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
          {/* Background com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/20 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-pink-900/10" />
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10" />
          
          {/* Elementos decorativos - ajustados para mobile */}
          <div className="absolute top-10 sm:top-20 -left-10 sm:left-10 w-44 sm:w-72 h-44 sm:h-72 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-float dark:from-primary/20 dark:to-purple-500/20" />
          <div className="absolute bottom-10 sm:bottom-20 -right-10 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-gradient-to-r from-secondary/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow dark:from-secondary/20 dark:to-pink-500/20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <HorizontalCarousel
              title="O Centro de Controle da Sua Carreira Médica"
              subtitle="Gerencie plantões, finanças e documentos em uma única plataforma inteligente"
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4000}
            >
              {/* Slide 1: Marketplace de Oportunidades */}
              <SlideContent>
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-primary/10 text-primary border-primary/30">
                          Marketplace de Oportunidades
                        </Badge>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                          Encontre Plantões que{" "}
                          <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Combinam com Você
                          </span>
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          IA analisa seu perfil e encontra as melhores oportunidades em segundos.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Busca Inteligente</p>
                            <p className="text-sm text-muted-foreground">
                              Algoritmo considera especialidade, localização e disponibilidade
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Notificações Personalizadas</p>
                            <p className="text-sm text-muted-foreground">
                              Receba alertas apenas de plantões relevantes
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Candidatura em 1 Clique</p>
                            <p className="text-sm text-muted-foreground">
                              Aplique para plantões sem preencher formulários
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="hero" 
                        size="lg"
                        onClick={() => navigate('/auth')}
                        className="group"
                      >
                        Começar a Buscar
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Search className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Filtros Avançados</h4>
                        <p className="text-sm text-muted-foreground">
                          Especialidade, localização, horário e valor
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Match Score</h4>
                        <p className="text-sm text-muted-foreground">
                          Pontuação de compatibilidade com cada plantão
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Disponibilidade</h4>
                        <p className="text-sm text-muted-foreground">
                          Sincronize com sua agenda pessoal
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Favoritos</h4>
                        <p className="text-sm text-muted-foreground">
                          Salve hospitais e plantões preferidos
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </SlideContent>

              {/* Slide 2: Controle Financeiro */}
              <SlideContent>
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-secondary/10 text-secondary border-secondary/30">
                          Controle Financeiro
                        </Badge>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                          Organize sua{" "}
                          <span className="bg-gradient-secondary bg-clip-text text-transparent">
                            Vida Financeira
                          </span>
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          Dashboard completo para acompanhar ganhos, despesas e planejamento.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Dashboard Inteligente</p>
                            <p className="text-sm text-muted-foreground">
                              Visão completa de receitas, despesas e metas
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Relatórios para IR</p>
                            <p className="text-sm text-muted-foreground">
                              Geração automática de documentos fiscais
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Antecipação de Recebíveis</p>
                            <p className="text-sm text-muted-foreground">
                              Receba seus pagamentos em até 24h
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="secondary" 
                        size="lg"
                        onClick={() => navigate('/auth')}
                        className="group"
                      >
                        Gerenciar Finanças
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <BarChart3 className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Análise de Tendências</h4>
                        <p className="text-sm text-muted-foreground">
                          Gráficos e insights sobre seus ganhos
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Documentos Automáticos</h4>
                        <p className="text-sm text-muted-foreground">
                          NFs e relatórios gerados automaticamente
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Metas e Projeções</h4>
                        <p className="text-sm text-muted-foreground">
                          Defina objetivos e acompanhe o progresso
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Zap className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Antecipação Rápida</h4>
                        <p className="text-sm text-muted-foreground">
                          Receba pagamentos antecipados
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </SlideContent>

              {/* Slide 3: AI Copilot */}
              <SlideContent>
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                          AI Copilot (Premium)
                        </Badge>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                          Sua{" "}
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Assistente Médica
                          </span>
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          IA avançada para transcrição, estruturação de prontuários e insights clínicos.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Transcrição Automática</p>
                            <p className="text-sm text-muted-foreground">
                              Converta consultas em prontuários estruturados
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Análise de Padrões</p>
                            <p className="text-sm text-muted-foreground">
                              Identifique tendências em seus atendimentos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Sugestões Inteligentes</p>
                            <p className="text-sm text-muted-foreground">
                              Recomendações baseadas em evidências
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="premium" 
                        size="lg"
                        onClick={() => navigate('/auth')}
                        className="group"
                      >
                        Conhecer Premium
                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Gravação Inteligente</h4>
                        <p className="text-sm text-muted-foreground">
                          Capture consultas com qualidade profissional
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Processamento IA</h4>
                        <p className="text-sm text-muted-foreground">
                          Análise avançada de conteúdo médico
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Prontuários Estruturados</h4>
                        <p className="text-sm text-muted-foreground">
                          Documentação automática e organizada
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">LGPD Compliant</h4>
                        <p className="text-sm text-muted-foreground">
                          Totalmente seguro e privado
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </SlideContent>
            </HorizontalCarousel>
          </div>
        </section>

        {/* Instituições Section - Carrossel Horizontal */}
        <section id="instituicoes" className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
          {/* Background com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/20 dark:from-emerald-900/20 dark:via-teal-900/10 dark:to-cyan-900/10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 dark:from-secondary/10 dark:via-transparent dark:to-primary/10" />
          
          {/* Elementos decorativos - ajustados para mobile */}
          <div className="absolute top-5 sm:top-10 -left-10 sm:left-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-r from-secondary/10 to-emerald-500/10 rounded-full blur-3xl animate-float dark:from-secondary/20 dark:to-emerald-500/20" />
          <div className="absolute bottom-5 sm:bottom-10 -right-10 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow dark:from-primary/20 dark:to-cyan-500/20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <HorizontalCarousel
              title="Gestão Definitiva da Força de Trabalho"
              subtitle="Substitua planilhas e WhatsApp por uma plataforma única e inteligente"
              showArrows={true}
              showDots={true}
              autoPlay={true}
              autoPlayInterval={4000}
            >
              {/* Slide 1: Gestão de Escalas */}
              <SlideContent>
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-secondary/10 text-secondary border-secondary/30">
                          Gestão de Escalas
                        </Badge>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                          Preencha Plantões em{" "}
                          <span className="bg-gradient-secondary bg-clip-text text-transparent">
                            Minutos, Não Horas
                          </span>
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          Dashboard central com visualização clara de todos os plantões e matching inteligente.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Reduza 80% do tempo de preenchimento</p>
                            <p className="text-sm text-muted-foreground">
                              Matching inteligente encontra os melhores profissionais automaticamente
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Visibilidade Total de Custos</p>
                            <p className="text-sm text-muted-foreground">
                              Controle financeiro completo por centro de custo e especialidade
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-secondary-foreground" />
                          </div>
                          <div>
                            <p className="font-semibold">Alertas de Conflito</p>
                            <p className="text-sm text-muted-foreground">
                              Sistema previne sobreposições e garante cobertura completa
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="secondary" 
                        size="lg"
                        className="group"
                      >
                        Agendar Apresentação
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Calendar className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Calendário Inteligente</h4>
                        <p className="text-sm text-muted-foreground">
                          Visualização clara de todos os plantões
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Clock className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Preenchimento Rápido</h4>
                        <p className="text-sm text-muted-foreground">
                          Plantões preenchidos em minutos
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Target className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Matching Inteligente</h4>
                        <p className="text-sm text-muted-foreground">
                          IA encontra os melhores candidatos
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary group">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Shield className="w-6 h-6 text-secondary" />
                        </div>
                        <h4 className="font-semibold mb-2">Qualidade Garantida</h4>
                        <p className="text-sm text-muted-foreground">
                          Profissionais verificados e avaliados
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </SlideContent>

              {/* Slide 2: Analytics e Relatórios */}
              <SlideContent>
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                          Analytics Preditivo
                        </Badge>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                          Insights que{" "}
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Transformam Decisões
                          </span>
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          Relatórios de performance e previsão de demandas com IA para otimizar sua gestão.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Previsão de Demandas</p>
                            <p className="text-sm text-muted-foreground">
                              IA prevê necessidades futuras baseada em histórico
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Análise de Performance</p>
                            <p className="text-sm text-muted-foreground">
                              Métricas detalhadas de produtividade e qualidade
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Otimização de Custos</p>
                            <p className="text-sm text-muted-foreground">
                              Identifique oportunidades de redução de gastos
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        size="lg"
                        className="group border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        Ver Demonstração
                        <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Dashboard Executivo</h4>
                        <p className="text-sm text-muted-foreground">
                          Visão geral de KPIs e métricas
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Tendências de Mercado</h4>
                        <p className="text-sm text-muted-foreground">
                          Análise de padrões e sazonalidade
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">IA Preditiva</h4>
                        <p className="text-sm text-muted-foreground">
                          Previsões baseadas em machine learning
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Relatórios Automáticos</h4>
                        <p className="text-sm text-muted-foreground">
                          Geração automática de relatórios
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </SlideContent>

              {/* Slide 3: Gestão de Candidatos */}
              <SlideContent>
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
                          Gestão de Candidatos
                        </Badge>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                          Encontre os{" "}
                          <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                            Melhores Profissionais
                          </span>
                        </h3>
                        <p className="text-xl text-muted-foreground">
                          Visualização centralizada com perfis completos, avaliações e ranking automático.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Ranking Automático</p>
                            <p className="text-sm text-muted-foreground">
                              IA classifica candidatos por histórico e compatibilidade
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Perfis Completos</p>
                            <p className="text-sm text-muted-foreground">
                              CRM, especialidades, avaliações e histórico verificado
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Sistema de Avaliações</p>
                            <p className="text-sm text-muted-foreground">
                              Feedback de hospitais e colegas para garantir qualidade
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="success" 
                        size="lg"
                        className="group"
                      >
                        Começar Gestão
                        <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-green-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Base de Candidatos</h4>
                        <p className="text-sm text-muted-foreground">
                          Milhares de profissionais verificados
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-green-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Sistema de Pontuação</h4>
                        <p className="text-sm text-muted-foreground">
                          Ranking baseado em performance e compatibilidade
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-green-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Search className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Busca Avançada</h4>
                        <p className="text-sm text-muted-foreground">
                          Filtros por especialidade, localização e disponibilidade
                        </p>
                      </Card>

                      <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-green-500 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">Comunicação Direta</h4>
                        <p className="text-sm text-muted-foreground">
                          Chat integrado para comunicação rápida
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </SlideContent>
            </HorizontalCarousel>
          </div>
        </section>

        {/* CTA Final Section - Layout original com scroll */}
        <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
          {/* Background com gradiente complexo */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-secondary" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-blue-600/90 to-secondary/90" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent" />
          
          {/* Elementos decorativos - ajustados para mobile */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 sm:top-20 -left-10 sm:left-10 w-56 sm:w-96 h-56 sm:h-96 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 sm:bottom-20 -right-10 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-white/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl animate-pulse-glow" />
          </div>
          
          {/* Grid pattern sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-4 sm:px-0">
                Pronto para Revolucionar sua{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                    Gestão de Saúde?
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-blue-100/20 to-white/20 blur-xl -z-10 animate-pulse-glow" />
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0">
                Junte-se a milhares de profissionais que já transformaram sua rotina com
                a PlanTech. Começar é gratuito e leva menos de 2 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4 sm:px-0">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => navigate('/auth')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 font-semibold">Criar Conta Gratuita</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 text-xs sm:text-sm text-white/80 px-4 sm:px-0">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 inline mr-1 text-green-300" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center sm:ml-4">
                  <CheckCircle2 className="w-4 h-4 inline mr-1 text-green-300" />
                  <span>Setup em 2 minutos</span>
                </div>
                <div className="flex items-center sm:ml-4">
                  <CheckCircle2 className="w-4 h-4 inline mr-1 text-green-300" />
                  <span>Suporte dedicado</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 PlanTech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}