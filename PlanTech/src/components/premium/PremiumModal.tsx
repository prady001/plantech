import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, Zap, Search, Mic, Shield } from "lucide-react";
import { PlanComparison } from "./PlanComparison";

interface PremiumModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PremiumModal = ({ open, onOpenChange }: PremiumModalProps) => {
  const [activeTab, setActiveTab] = useState("features");

  const premiumFeatures = [
    {
      icon: FileText,
      title: "Gestão Contábil Avançada",
      description: "Emissão automática de notas fiscais e integração contábil completa",
      items: ["Emissão de NFs", "Relatórios para IR", "Integração contábil"],
    },
    {
      icon: Zap,
      title: "Antecipação de Recebíveis",
      description: "Receba seus pagamentos em até 24h com taxas transparentes",
      items: ["Aprovação instantânea", "Taxas competitivas", "Sem burocracia"],
    },
    {
      icon: Search,
      title: "Busca Inteligente",
      description: "Alertas prioritários e filtros avançados personalizados",
      items: ["Buscas salvas", "Alertas em tempo real", "Acesso prioritário"],
    },
    {
      icon: Mic,
      title: "AI Copilot (Beta)",
      description: "Transcrição inteligente de consultas e estruturação de prontuários",
      items: ["Transcrição em tempo real", "Organização automática", "100% LGPD"],
      badge: "Beta",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Desbloqueie Todo o Potencial da{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">PlanTech</span>
          </DialogTitle>
          <DialogDescription>
            Upgrade para Premium e tenha acesso a ferramentas que vão transformar sua rotina
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="features">Recursos</TabsTrigger>
            <TabsTrigger value="comparison">Comparação</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
          {premiumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{feature.title}</h3>
                      {feature.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.items.map((item, i) => (
                        <li key={i} className="text-xs flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-success" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-6 bg-gradient-hero/10 border-primary/20 mt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Segurança e Privacidade</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Todos os recursos Premium são desenvolvidos com foco total em segurança, 
                privacidade e conformidade com LGPD e normas do CFM.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">LGPD Compliant</Badge>
                <Badge variant="outline" className="text-xs">Dados Criptografados</Badge>
                <Badge variant="outline" className="text-xs">Auditoria CFM</Badge>
              </div>
            </div>
          </div>
        </Card>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button variant="hero" size="lg" className="flex-1">
                Assinar Premium - R$ 99,90/mês
              </Button>
              <Button variant="outline" size="lg" onClick={() => onOpenChange(false)}>
                Continuar no Plano Gratuito
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="mt-6">
            <PlanComparison />
            <div className="flex justify-center mt-6">
              <Button variant="hero" size="lg">
                Assinar Premium - R$ 99,90/mês
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

