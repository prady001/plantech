import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, Crown } from "lucide-react";

interface Feature {
  name: string;
  free: boolean | string;
  premium: boolean | string;
}

const features: Feature[] = [
  { name: "Dashboard com resumo", free: true, premium: true },
  { name: "Marketplace de plantões", free: true, premium: true },
  { name: "Agenda unificada", free: true, premium: true },
  { name: "Controle financeiro básico", free: true, premium: true },
  { name: "Perfil profissional verificado", free: true, premium: true },
  { name: "Filtros de busca", free: "Básicos", premium: "Avançados" },
  { name: "Buscas salvas", free: false, premium: true },
  { name: "Alertas em tempo real", free: false, premium: true },
  { name: "Acesso prioritário a vagas", free: false, premium: true },
  { name: "Emissão de notas fiscais", free: false, premium: true },
  { name: "Antecipação de recebíveis", free: false, premium: "24h" },
  { name: "Prevenção de glosas", free: false, premium: true },
  { name: "Relatórios para IR", free: false, premium: true },
  { name: "AI Copilot (transcrição)", free: false, premium: "Beta" },
  { name: "Match por qualidade", free: false, premium: "Em breve" },
];

export const PlanComparison = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Compare os Planos</h2>
        <p className="text-muted-foreground">
          Escolha o plano ideal para sua carreira
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">Gratuito</h3>
              <p className="text-muted-foreground mt-1">Para começar</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">R$ 0</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" disabled>
              Plano Atual
            </Button>
          </div>
        </Card>

        <Card className="p-6 border-2 border-primary bg-gradient-hero/5">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold">Premium</h3>
                <Crown className="h-5 w-5 text-primary" />
              </div>
              <p className="text-muted-foreground">Para profissionais avançados</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">R$ 99,90</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>
            <Button variant="hero" className="w-full">
              Fazer Upgrade
            </Button>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Funcionalidade</th>
                <th className="text-center py-3 px-4">Gratuito</th>
                <th className="text-center py-3 px-4 bg-primary/5">
                  <div className="flex items-center justify-center gap-2">
                    Premium
                    <Crown className="h-4 w-4 text-primary" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 px-4">{feature.name}</td>
                  <td className="text-center py-3 px-4">
                    {feature.free === true ? (
                      <CheckCircle2 className="h-5 w-5 text-success mx-auto" />
                    ) : feature.free === false ? (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    ) : (
                      <span className="text-sm text-muted-foreground">{feature.free}</span>
                    )}
                  </td>
                  <td className="text-center py-3 px-4 bg-primary/5">
                    {feature.premium === true ? (
                      <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                    ) : feature.premium === false ? (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        {feature.premium}
                      </Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

