import { useState } from "react";
import { MapPin, Clock, DollarSign, Filter, Zap, AlertTriangle, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HorizontalCarousel, SlideContent } from "@/components/ui/horizontal-carousel";
import { toast } from "@/hooks/useToast";
import { UpgradeCard } from "@/components/premium/UpgradeCard";
import { mockShifts, mockFeaturedShifts } from "@/data/mockData";

export const Marketplace = () => {
  const [searchLocation, setSearchLocation] = useState("");

  const handleApply = (shiftId: number | string) => {
    toast({
      title: "Candidatura enviada",
      description: "Você será notificado quando a instituição responder",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Marketplace de <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Plantões</span>
        </h1>
        <p className="text-muted-foreground">Encontre as melhores oportunidades</p>
      </div>

      {/* Carrossel de Plantões de Destaque */}
      <div className="relative">
        <HorizontalCarousel
          title="Plantões de Destaque"
          subtitle="Oportunidades de última hora com valores premium"
          showArrows={true}
          showDots={true}
          autoPlay={true}
          autoPlayInterval={5000}
        >
          {mockFeaturedShifts.map((shift) => (
            <SlideContent key={shift.id}>
              <Card className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 border-red-200 dark:border-red-800 group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {/* Badge de Urgência */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-red-500 text-white animate-pulse shadow-lg">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    URGENTE
                  </Badge>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/10 to-red-500/10 rounded-full blur-xl" />

                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{shift.hospital}</h3>
                      </div>
                      <Badge variant="outline" className="text-sm border-red-300 text-red-700 dark:border-red-700 dark:text-red-300">
                        {shift.specialty}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 text-red-500" />
                      {shift.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 text-red-500" />
                      {shift.date} • {shift.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400">
                      <AlertTriangle className="h-4 w-4" />
                      {shift.timeLeft}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                        {shift.value}
                      </div>
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        {shift.bonus}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      {shift.description}
                    </p>

                    <Button 
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                      onClick={() => handleApply(shift.id)}
                    >
                      <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Candidatar-se Agora
                    </Button>
                  </div>
                </div>
              </Card>
            </SlideContent>
          ))}
        </HorizontalCarousel>
      </div>

      <Card className="p-4 sm:p-6 bg-gradient-card shadow-card border-border/50 group hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold">Filtros</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <Input
            placeholder="Localização..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="bg-background hover:bg-background/80 transition-colors"
          />
          <Select>
            <SelectTrigger className="bg-background hover:bg-background/80 transition-colors">
              <SelectValue placeholder="Especialidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="geral">Clínico Geral</SelectItem>
              <SelectItem value="pediatria">Pediatria</SelectItem>
              <SelectItem value="uti">UTI</SelectItem>
              <SelectItem value="emergencia">Emergência</SelectItem>
              <SelectItem value="cardiologia">Cardiologia</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-background hover:bg-background/80 transition-colors">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diurno">Diurno</SelectItem>
              <SelectItem value="noturno">Noturno</SelectItem>
              <SelectItem value="madrugada">Madrugada</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-background hover:bg-background/80 transition-colors">
              <SelectValue placeholder="Data" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hoje">Hoje</SelectItem>
              <SelectItem value="amanha">Amanhã</SelectItem>
              <SelectItem value="semana">Esta Semana</SelectItem>
              <SelectItem value="mes">Este Mês</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <UpgradeCard
        title="Busca Inteligente com Alertas"
        description="Receba notificações instantâneas de plantões que correspondem ao seu perfil e preferências"
        features={[
          "Salve suas buscas personalizadas",
          "Alertas em tempo real de novas vagas",
          "Acesso prioritário antes dos usuários gratuitos",
          "Filtros avançados ilimitados"
        ]}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Todos os Plantões</h2>
          <Badge variant="outline" className="text-sm">
            {mockShifts.length} vagas disponíveis
          </Badge>
        </div>
        
        {mockShifts.map((shift, index) => (
          <Card
            key={shift.id}
            className="p-4 sm:p-5 bg-gradient-card shadow-card border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-3 flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{shift.hospital}</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {shift.specialty}
                      </Badge>
                      {shift.urgent && (
                        <Badge className="text-xs bg-destructive text-destructive-foreground animate-pulse">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Urgente
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-2 sm:grid-cols-3 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {shift.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {shift.date} • {shift.period}
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-success">
                    <DollarSign className="h-4 w-4" />
                    {shift.value}
                  </div>
                </div>
              </div>

              <Button 
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 sm:w-auto group"
                onClick={() => handleApply(shift.id)}
              >
                <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Candidatar-se
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

