import { useState } from "react";
import { Calendar, TrendingUp, Clock, MapPin, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PremiumModal } from "@/components/premium/PremiumModal";
import { PlanTechIcons } from "@/components/ui/icons";
import { HeroIllustration, MedicalIllustration } from "@/components/ui/illustrations";

export const Dashboard = () => {
  const [showPremium, setShowPremium] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Olá, <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Dr. Silva</span>
          </h1>
          <p className="text-muted-foreground">Confira um resumo da sua rotina</p>
        </div>
        <Button 
          variant="outline" 
          className="gap-2 border-primary/50 hover:bg-primary/10 group transition-all duration-300 hover:scale-105"
          onClick={() => setShowPremium(true)}
        >
          <Crown className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
          Ver Premium
        </Button>
      </div>

      <PremiumModal open={showPremium} onOpenChange={setShowPremium} />

      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <Card className="medical-card p-4 sm:p-6 animate-fade-in-up group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-muted-foreground">Próximo Plantão</p>
                <Badge variant="medical" className="text-xs animate-pulse">Urgente</Badge>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-medical">Hoje, 18h</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Hospital São Lucas
              </p>
            </div>
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-medical flex items-center justify-center shadow-medical group-hover:scale-110 transition-transform">
              <PlanTechIcons.Clock className="h-6 w-6 sm:h-7 sm:w-7 text-primary-600" />
            </div>
          </div>
        </Card>

        <Card className="success-card p-4 sm:p-6 animate-fade-in-up group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Ganhos do Mês</p>
              <p className="text-xl sm:text-2xl font-bold text-success">R$ 12.450</p>
              <p className="text-sm text-success-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +15% vs mês anterior
              </p>
            </div>
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-success-soft flex items-center justify-center shadow-success group-hover:scale-110 transition-transform">
              <PlanTechIcons.TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-success-700" />
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6 bg-gradient-card shadow-card border-border/50 animate-fade-in-up group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Plantões do Mês</p>
              <p className="text-xl sm:text-2xl font-bold">8 confirmados</p>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="success" className="text-xs">8 confirmados</Badge>
                <Badge variant="warning" className="text-xs">3 pendentes</Badge>
              </div>
            </div>
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-medical group-hover:scale-110 transition-transform">
              <PlanTechIcons.Calendar className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4 sm:p-6 bg-gradient-card shadow-card border-border/50 animate-fade-in-up group hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-lg font-semibold mb-4 sm:mb-6 text-gradient">Ações Rápidas</h2>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          <Button 
            variant="medical" 
            className="justify-start h-auto py-4 sm:py-6 group transition-all duration-300 hover:scale-105"
            onClick={() => {/* Navigate to marketplace */}}
          >
            <div className="flex items-center gap-3 sm:gap-4 w-full">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlanTechIcons.Search className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-base sm:text-lg">Buscar Plantões</div>
                <div className="text-xs sm:text-sm opacity-90">Encontre novas oportunidades</div>
              </div>
            </div>
          </Button>
          <Button 
            variant="outline" 
            className="justify-start h-auto py-4 sm:py-6 group border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            onClick={() => {/* Navigate to schedule */}}
          >
            <div className="flex items-center gap-3 sm:gap-4 w-full">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlanTechIcons.Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-base sm:text-lg">Ver Agenda</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Seus plantões confirmados</div>
              </div>
            </div>
          </Button>
        </div>
      </Card>

      <Card className="premium-card p-4 sm:p-6 animate-fade-in-up group hover:shadow-lg transition-all duration-300" style={{ animationDelay: "0.4s" }}>
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="h-14 w-14 sm:h-16 sm:w-16 bg-gradient-premium rounded-xl flex items-center justify-center flex-shrink-0 shadow-premium group-hover:scale-110 transition-transform">
            <PlanTechIcons.Crown className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gradient">Desbloqueie recursos Premium</h3>
              <Badge variant="premium" className="animate-pulse-glow w-fit">Novo</Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
              Antecipação de pagamentos, emissão de NFs, AI Copilot e muito mais para maximizar seus ganhos
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="premium" 
                size="lg"
                onClick={() => setShowPremium(true)}
                className="group transition-all duration-300 hover:scale-105"
              >
                <PlanTechIcons.Sparkles className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                Conhecer Premium
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                Ver Preços
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

