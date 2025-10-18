import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export const DemoModeBanner = () => {
  return (
    <Card className="mb-6 bg-warning/10 border-warning/30">
      <div className="p-4 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm mb-1">Modo Demo Ativo</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Supabase não está configurado. Você pode explorar a interface, mas login/cadastro não funcionarão.
          </p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open('SETUP.md', '_blank')}
          >
            Ver Guia de Configuração
          </Button>
        </div>
      </div>
    </Card>
  );
};

