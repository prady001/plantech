import { useState } from "react";
import { User, Mail, Phone, MapPin, Award, Upload, CheckCircle2, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AICopilotPreview } from "@/components/premium/AICopilotPreview";
import { toast } from "@/hooks/useToast";

export const Profile = () => {
  const [showCopilot, setShowCopilot] = useState(false);

  const handleSave = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas alterações foram salvas com sucesso",
    });
  };

  const handleUpload = () => {
    toast({
      title: "Upload de documento",
      description: "Funcionalidade em desenvolvimento",
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Perfil Profissional</h1>
        <p className="text-muted-foreground">Gerencie suas informações e documentos</p>
      </div>

      <Card className="p-6 bg-gradient-success shadow-card border-border/50">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-success-foreground/20 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-success-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-success-foreground">Perfil Verificado</h3>
            <p className="text-sm text-success-foreground/80">
              Seus documentos foram verificados e seu perfil está ativo
            </p>
          </div>
          <Badge className="bg-success-foreground/20 text-success-foreground border-success-foreground/30">
            Verificado
          </Badge>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card shadow-card border-border/50">
        <h2 className="text-lg font-semibold mb-6">Informações Pessoais</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="Dr. João Silva"
                className="pl-10"
                defaultValue="Dr. João Silva"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="crm">CRM</Label>
            <div className="relative">
              <Award className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="crm"
                placeholder="123456 SP"
                className="pl-10"
                defaultValue="123456 SP"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="joao.silva@email.com"
                className="pl-10"
                defaultValue="joao.silva@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                placeholder="(11) 99999-9999"
                className="pl-10"
                defaultValue="(11) 99999-9999"
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Endereço</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="address"
                placeholder="Rua Exemplo, 123 - São Paulo, SP"
                className="pl-10"
                defaultValue="Rua Exemplo, 123 - São Paulo, SP"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card shadow-card border-border/50">
        <h2 className="text-lg font-semibold mb-6">Documentos</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="font-medium">CRM (Frente e Verso)</div>
                <div className="text-sm text-muted-foreground">crm_joao_silva.pdf</div>
              </div>
            </div>
            <Badge className="bg-success/10 text-success border-success/20">
              Verificado
            </Badge>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="font-medium">Comprovante de Residência</div>
                <div className="text-sm text-muted-foreground">comprovante.pdf</div>
              </div>
            </div>
            <Badge className="bg-success/10 text-success border-success/20">
              Verificado
            </Badge>
          </div>

          <Button 
            variant="outline" 
            className="w-full border-dashed"
            onClick={handleUpload}
          >
            <Upload className="mr-2 h-4 w-4" />
            Adicionar Novo Documento
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
            <Mic className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">AI Copilot</h3>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
              <Badge variant="outline" className="text-xs bg-warning/10 text-warning border-warning/30">
                Premium
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Transcrição inteligente de consultas que economiza horas de trabalho administrativo
            </p>
            <Dialog open={showCopilot} onOpenChange={setShowCopilot}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Ver Demonstração
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <AICopilotPreview />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancelar</Button>
        <Button 
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
          onClick={handleSave}
        >
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
};

