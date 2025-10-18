import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-2xl text-foreground">Página não encontrada</p>
        <p className="text-muted-foreground">
          A página que você está procurando não existe.
        </p>
        <Button onClick={() => navigate('/')} variant="hero">
          Voltar para o Início
        </Button>
      </div>
    </div>
  );
}

