import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, ArrowRight } from "lucide-react";

interface UpgradeCardProps {
  title: string;
  description: string;
  features: string[];
  onUpgrade?: () => void;
}

export const UpgradeCard = ({ title, description, features, onUpgrade }: UpgradeCardProps) => {
  return (
    <Card className="p-6 bg-gradient-hero/10 border-primary/30">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
          <Crown className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">{title}</h3>
              <Badge variant="secondary">Premium</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            variant="hero" 
            className="w-full mt-4 group"
            onClick={onUpgrade}
          >
            Fazer Upgrade para Premium
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

