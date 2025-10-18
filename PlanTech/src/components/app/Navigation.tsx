import { Home, Calendar, DollarSign, User, Briefcase, Moon, Sun, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo, LogoIcon, LogoWithTagline } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export const Navigation = ({ activeTab, onTabChange, isDarkMode, onThemeToggle }: NavigationProps) => {
  const { signOut } = useAuth();

  const navItems = [
    { id: "dashboard", label: "Início", icon: Home },
    { id: "marketplace", label: "Plantões", icon: Briefcase },
    { id: "schedule", label: "Agenda", icon: Calendar },
    { id: "finance", label: "Finanças", icon: DollarSign },
    { id: "profile", label: "Perfil", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <LogoWithTagline size="sm" className="sm:hidden" />
        <LogoWithTagline size="md" className="hidden sm:block" />

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "gap-2 transition-all duration-300",
                  activeTab === item.id 
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105" 
                    : "hover:bg-primary/10 hover:text-primary"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
          >
            {isDarkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={signOut}
            className="hidden md:flex hover:bg-destructive/10 hover:text-destructive transition-all duration-300 hover:scale-110"
          >
            <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      <div className="md:hidden border-t border-border/50">
        <div className="container flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-2 sm:px-3 py-2 rounded-lg transition-all duration-300 group",
                  activeTab === item.id
                    ? "text-primary bg-primary/10 scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:scale-105"
                )}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

