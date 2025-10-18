import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Square, Lock, Shield, FileText } from "lucide-react";

export const AICopilotPreview = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">AI Copilot</h2>
          <Badge variant="secondary">Beta</Badge>
          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
            Premium
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Transcrição inteligente de consultas com estruturação automática de prontuários
        </p>
      </div>

      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border-2 border-dashed border-primary/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <Lock className="absolute -top-1 -right-1 h-5 w-5 text-warning bg-background rounded-full p-0.5" />
              </div>
              <div>
                <p className="font-semibold">Gravação de Consulta</p>
                <p className="text-sm text-muted-foreground">Recurso disponível apenas para Premium</p>
              </div>
            </div>
            <Button variant="outline" disabled>
              <Lock className="h-4 w-4 mr-2" />
              Iniciar Gravação
            </Button>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Prévia de Transcrição (Exemplo)
            </h3>
            <div className="p-4 bg-background rounded-lg border border-border space-y-3 opacity-60">
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Queixa Principal</p>
                <p className="text-sm text-muted-foreground">
                  Paciente relata dor abdominal há 2 dias, localizada em região epigástrica...
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Histórico</p>
                <p className="text-sm text-muted-foreground">
                  Nega alergias medicamentosas. Hipertenso em uso de losartana 50mg...
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary mb-1">Exame Físico</p>
                <p className="text-sm text-muted-foreground">
                  BEG, corado, hidratado. PA: 130/80 mmHg. Abdome doloroso à palpação...
                </p>
              </div>
            </div>
          </div>

          <Card className="p-4 bg-muted/30 border-primary/20">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-sm font-semibold">Consentimento e Privacidade</p>
                <p className="text-xs text-muted-foreground">
                  O AI Copilot requer consentimento explícito do paciente antes de cada gravação. 
                  Todas as transcrições são criptografadas e processadas em conformidade com LGPD 
                  e normas do CFM. Os dados nunca são compartilhados sem autorização.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">100% LGPD</Badge>
                  <Badge variant="outline" className="text-xs">CFM Approved</Badge>
                  <Badge variant="outline" className="text-xs">Criptografia E2E</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-primary/5 border-primary/20">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Economize horas de trabalho administrativo</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Médicos Premium economizam em média 10 horas por mês em documentação, 
            permitindo mais tempo com pacientes e reduzindo significativamente o burnout.
          </p>
          <Button variant="hero" size="lg" className="mt-4">
            Ativar Premium e Liberar AI Copilot
          </Button>
        </div>
      </Card>
    </div>
  );
};

