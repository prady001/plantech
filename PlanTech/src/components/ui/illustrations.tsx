import { cn } from "@/lib/utils";

interface IllustrationProps {
  className?: string;
  variant?: "hero" | "medical" | "success" | "warning" | "error" | "premium";
}

export function HeroIllustration({ className, variant = "hero" }: IllustrationProps) {
  const variantClasses = {
    hero: "text-primary",
    medical: "text-primary-500",
    success: "text-success-500",
    warning: "text-warning-500",
    error: "text-error-500",
    premium: "text-primary-600",
  };

  return (
    <div className={cn("w-full h-full", className)}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(205, 100%, 97%)" />
            <stop offset="100%" stopColor="hsl(155, 100%, 95%)" />
          </linearGradient>
          <linearGradient id="medicalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(205, 85%, 45%)" />
            <stop offset="100%" stopColor="hsl(155, 70%, 50%)" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="300" fill="url(#bgGradient)" rx="20" />
        
        {/* Medical cross */}
        <g transform="translate(200, 150)">
          <rect x="-30" y="-5" width="60" height="10" fill="url(#medicalGradient)" rx="5" />
          <rect x="-5" y="-30" width="10" height="60" fill="url(#medicalGradient)" rx="5" />
        </g>
        
        {/* Floating elements */}
        <circle cx="80" cy="80" r="8" fill="hsl(205, 85%, 45%)" opacity="0.3" className="animate-float" />
        <circle cx="320" cy="100" r="6" fill="hsl(155, 70%, 50%)" opacity="0.4" className="animate-float-slow" />
        <circle cx="100" cy="220" r="10" fill="hsl(205, 85%, 45%)" opacity="0.2" className="animate-float" />
        <circle cx="300" cy="240" r="7" fill="hsl(155, 70%, 50%)" opacity="0.3" className="animate-float-slow" />
        
        {/* Stethoscope */}
        <g transform="translate(150, 120)">
          <path
            d="M20 20 Q30 10 40 20 Q50 30 60 20"
            stroke="url(#medicalGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="3" fill="url(#medicalGradient)" />
          <circle cx="60" cy="20" r="3" fill="url(#medicalGradient)" />
        </g>
        
        {/* Heart rate line */}
        <g transform="translate(50, 200)">
          <path
            d="M0 20 L20 20 L25 10 L30 30 L35 5 L40 25 L45 15 L50 20 L100 20"
            stroke="url(#medicalGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="animate-pulse"
          />
        </g>
      </svg>
    </div>
  );
}

export function MedicalIllustration({ className }: IllustrationProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <svg
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="medicalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(205, 100%, 97%)" />
            <stop offset="100%" stopColor="hsl(205, 85%, 45%)" />
          </linearGradient>
        </defs>
        
        {/* Hospital building */}
        <rect x="50" y="80" width="200" height="120" fill="url(#medicalGrad)" rx="10" />
        
        {/* Cross on building */}
        <rect x="140" y="100" width="20" height="80" fill="white" rx="2" />
        <rect x="120" y="130" width="60" height="20" fill="white" rx="2" />
        
        {/* Windows */}
        <rect x="70" y="100" width="20" height="20" fill="white" opacity="0.8" rx="2" />
        <rect x="100" y="100" width="20" height="20" fill="white" opacity="0.8" rx="2" />
        <rect x="180" y="100" width="20" height="20" fill="white" opacity="0.8" rx="2" />
        <rect x="210" y="100" width="20" height="20" fill="white" opacity="0.8" rx="2" />
        
        {/* Stethoscope */}
        <g transform="translate(100, 60)">
          <path
            d="M10 10 Q20 0 30 10 Q40 20 50 10"
            stroke="hsl(205, 85%, 45%)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="10" cy="10" r="2" fill="hsl(205, 85%, 45%)" />
          <circle cx="50" cy="10" r="2" fill="hsl(205, 85%, 45%)" />
        </g>
      </svg>
    </div>
  );
}

export function SuccessIllustration({ className }: IllustrationProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(155, 100%, 95%)" />
            <stop offset="100%" stopColor="hsl(155, 70%, 50%)" />
          </linearGradient>
        </defs>
        
        {/* Circle background */}
        <circle cx="100" cy="100" r="80" fill="url(#successGrad)" />
        
        {/* Checkmark */}
        <path
          d="M60 100 L85 125 L140 70"
          stroke="white"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce-in"
        />
      </svg>
    </div>
  );
}

export function PremiumIllustration({ className }: IllustrationProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <svg
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="premiumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(205, 85%, 45%)" />
            <stop offset="100%" stopColor="hsl(155, 70%, 50%)" />
          </linearGradient>
          <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(38, 92%, 50%)" />
            <stop offset="100%" stopColor="hsl(38, 92%, 70%)" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="300" height="200" fill="url(#premiumGrad)" rx="20" />
        
        {/* Crown */}
        <g transform="translate(150, 80)">
          <path
            d="M-40 0 L-20 -20 L0 0 L20 -20 L40 0 L30 20 L-30 20 Z"
            fill="url(#crownGrad)"
            className="animate-float"
          />
          {/* Crown jewels */}
          <circle cx="-20" cy="-10" r="3" fill="white" opacity="0.8" />
          <circle cx="0" cy="-15" r="4" fill="white" opacity="0.9" />
          <circle cx="20" cy="-10" r="3" fill="white" opacity="0.8" />
        </g>
        
        {/* Sparkles */}
        <g className="animate-pulse">
          <circle cx="80" cy="60" r="2" fill="white" opacity="0.8" />
          <circle cx="220" cy="70" r="3" fill="white" opacity="0.6" />
          <circle cx="100" cy="140" r="2" fill="white" opacity="0.7" />
          <circle cx="200" cy="130" r="2" fill="white" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

export function EmptyStateIllustration({ className }: IllustrationProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <svg
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="emptyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 20%, 96%)" />
            <stop offset="100%" stopColor="hsl(205, 100%, 97%)" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="300" height="200" fill="url(#emptyGrad)" rx="20" />
        
        {/* Document icon */}
        <g transform="translate(120, 60)">
          <rect x="0" y="0" width="60" height="80" fill="hsl(210, 20%, 90%)" rx="4" />
          <rect x="10" y="15" width="40" height="3" fill="hsl(210, 20%, 70%)" rx="1" />
          <rect x="10" y="25" width="35" height="3" fill="hsl(210, 20%, 70%)" rx="1" />
          <rect x="10" y="35" width="30" height="3" fill="hsl(210, 20%, 70%)" rx="1" />
          <rect x="10" y="45" width="25" height="3" fill="hsl(210, 20%, 70%)" rx="1" />
        </g>
        
        {/* Plus icon */}
        <g transform="translate(140, 100)">
          <circle cx="0" cy="0" r="20" fill="hsl(205, 85%, 45%)" opacity="0.1" />
          <path
            d="M-8 0 L8 0 M0 -8 L0 8"
            stroke="hsl(205, 85%, 45%)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        
        {/* Text */}
        <text
          x="150"
          y="160"
          textAnchor="middle"
          fill="hsl(210, 15%, 45%)"
          fontSize="14"
          fontFamily="system-ui, sans-serif"
        >
          Nenhum item encontrado
        </text>
      </svg>
    </div>
  );
}
