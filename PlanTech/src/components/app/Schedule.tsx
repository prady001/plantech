import { Calendar, Clock, MapPin, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/useToast";
import { mockSchedule } from "@/data/mockData";

export const Schedule = () => {
  const handleAddShift = () => {
    toast({
      title: "Adicionar plantão",
      description: "Funcionalidade em desenvolvimento",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Minha Agenda</h1>
          <p className="text-muted-foreground">Seus plantões confirmados e pendentes</p>
        </div>
        <Button 
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
          onClick={handleAddShift}
        >
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Plantão
        </Button>
      </div>

      <Card className="p-6 bg-gradient-card shadow-card border-border/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Janeiro 2025</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Anterior</Button>
            <Button variant="outline" size="sm">Próximo</Button>
          </div>
        </div>

        <div className="space-y-3">
          {mockSchedule.map((shift) => (
            <div
              key={shift.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-background hover:bg-muted/30 transition-colors"
            >
              <div className="text-center min-w-[60px]">
                <div className="text-2xl font-bold">{shift.date.split(' ')[0]}</div>
                <div className="text-sm text-muted-foreground">{shift.day}</div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{shift.hospital}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant={shift.status === "confirmado" ? "success" : "secondary"}
                      >
                        {shift.status === "confirmado" ? "Confirmado" : "Pendente"}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-success">{shift.value}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {shift.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {shift.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

