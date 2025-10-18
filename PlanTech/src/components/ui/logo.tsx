import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white" | "monochrome";
  showText?: boolean;
}

export function Logo({ 
  className, 
  size = "md", 
  variant = "default", 
  showText = true 
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  const getColors = () => {
    switch (variant) {
      case "white":
        return {
          heart: "#ffffff",
          circuit: "#e5e7eb",
          text: "#ffffff"
        };
      case "monochrome":
        return {
          heart: "#6b7280",
          circuit: "#9ca3af", 
          text: "#374151"
        };
      default:
        return {
          heart: "#10b981", // green-500
          circuit: "#059669", // green-600
          text: "#1e40af" // blue-800
        };
    }
  };

  const colors = getColors();

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon */}
      <div className={cn("flex-shrink-0", sizeClasses[size])}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Heart Shape */}
          <path
            d="M50 85C50 85 20 60 20 40C20 30 30 20 40 20C45 20 50 25 50 30C50 25 55 20 60 20C70 20 80 30 80 40C80 60 50 85 50 85Z"
            fill={colors.heart}
          />
          
          {/* Circuit Board Pattern - Left Half */}
          <g opacity="0.8">
            {/* Horizontal lines */}
            <line x1="25" y1="35" x2="45" y2="35" stroke={colors.circuit} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="25" y1="40" x2="40" y2="40" stroke={colors.circuit} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="25" y1="45" x2="42" y2="45" stroke={colors.circuit} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="25" y1="50" x2="38" y2="50" stroke={colors.circuit} strokeWidth="1.5" strokeLinecap="round"/>
            
            {/* Vertical lines */}
            <line x1="30" y1="32" x2="30" y2="52" stroke={colors.circuit} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="35" y1="30" x2="35" y2="55" stroke={colors.circuit} strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="40" y1="33" x2="40" y2="50" stroke={colors.circuit} strokeWidth="1.5" strokeLinecap="round"/>
            
            {/* Circuit nodes */}
            <circle cx="30" cy="35" r="1.5" fill={colors.circuit}/>
            <circle cx="35" cy="40" r="1.5" fill={colors.circuit}/>
            <circle cx="40" cy="45" r="1.5" fill={colors.circuit}/>
            <circle cx="30" cy="50" r="1.5" fill={colors.circuit}/>
            <circle cx="35" cy="45" r="1.5" fill={colors.circuit}/>
          </g>
          
          {/* Letter P - Right Half */}
          <path
            d="M55 25 L55 55 L65 55 L65 50 L60 50 L60 30 L65 30 L65 25 Z"
            fill={colors.heart}
          />
          <path
            d="M60 30 L60 50 L55 50 L55 30 Z"
            fill={colors.heart}
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className={cn("font-bold tracking-tight", textSizeClasses[size])}>
          <span style={{ color: colors.text }}>Plan</span>
          <span style={{ color: colors.text, opacity: 0.8 }}>Tech</span>
        </div>
      )}
    </div>
  );
}

// Logo variants for different contexts
export function LogoWithTagline({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Logo size="lg" />
      <p className="text-sm text-muted-foreground font-medium">
        Plataforma de Plantões Médicos
      </p>
    </div>
  );
}

export function LogoIcon({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  return <Logo className={className} size={size} showText={false} />;
}

export function LogoWhite({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  return <Logo className={className} size={size} variant="white" />;
}
