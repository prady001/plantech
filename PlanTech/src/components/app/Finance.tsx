import { DollarSign, TrendingUp, Clock, CheckCircle2, Lock, FileText, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { UpgradeCard } from "@/components/premium/UpgradeCard";
import { mockFinancials, calculateFinancialSummary } from "@/data/mockData";

export const Finance = () => {
  const { totalReceived, totalPending, totalMonth, receivedPercentage } = 
    calculateFinancialSummary(mockFinancials);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Controle Financeiro</h1>
          <p className="text-muted-foreground">Acompanhe seus recebimentos</p>
        </div>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="gap-2" disabled>
                <Lock className="h-4 w-4" />
                <FileText className="h-4 w-4" />
                Emitir NF
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold mb-1">Premium: Emissão de Notas Fiscais</p>
              <p className="text-xs">Gere NFs automaticamente para seus plantões</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="gap-2" disabled>
                <Lock className="h-4 w-4" />
                <Zap className="h-4 w-4" />
                Antecipar
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold mb-1">Premium: Antecipação de Recebíveis</p>
              <p className="text-xs">Receba seus pagamentos em até 24h</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6 bg-gradient-success shadow-card border-border/50">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-success-foreground/80">Recebido</p>
              <p className="text-3xl font-bold text-success-foreground">
                R$ {totalReceived.toLocaleString('pt-BR')}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-success-foreground/20 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-success-foreground" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card shadow-card border-border/50">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">A Receber</p>
              <p className="text-3xl font-bold">
                R$ {totalPending.toLocaleString('pt-BR')}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-warning" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card shadow-card border-border/50">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Total do Mês</p>
              <p className="text-3xl font-bold">
                R$ {totalMonth.toLocaleString('pt-BR')}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-card shadow-card border-border/50">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Progresso de Recebimentos</h3>
            <span className="text-sm text-muted-foreground">
              {receivedPercentage.toFixed(0)}% recebido
            </span>
          </div>
          <Progress value={receivedPercentage} className="h-3" />
        </div>
      </Card>

      <UpgradeCard
        title="Gestão Financeira Premium"
        description="Emita notas fiscais automaticamente e antecipe seus recebimentos com taxas transparentes"
        features={[
          "Emissão automática de notas fiscais",
          "Antecipação de recebíveis em até 24h",
          "Prevenção de glosas com checklist inteligente",
          "Relatórios completos para IR"
        ]}
      />

      <Card className="p-6 bg-gradient-card shadow-card border-border/50">
        <h2 className="text-lg font-semibold mb-4">Histórico de Plantões</h2>
        <div className="space-y-3">
          {mockFinancials.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-background hover:bg-muted/30 transition-colors"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{item.hospital}</h3>
                  {item.status === "recebido" ? (
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  ) : (
                    <Clock className="h-4 w-4 text-warning" />
                  )}
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Plantão: {item.date}</span>
                  <span>•</span>
                  <span>Pagamento: {item.paymentDate}</span>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${
                  item.status === "recebido" ? "text-success" : "text-foreground"
                }`}>
                  R$ {item.value.toLocaleString('pt-BR')}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.status === "recebido" ? "Recebido" : "Pendente"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

