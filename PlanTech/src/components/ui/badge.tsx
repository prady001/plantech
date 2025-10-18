import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-105",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 hover:scale-105",
        outline: "text-foreground hover:bg-accent hover:scale-105",
        success: "border-transparent bg-gradient-success-soft text-success-700 hover:shadow-success hover:scale-105",
        warning: "border-transparent bg-gradient-warning-soft text-warning-700 hover:shadow-warning hover:scale-105",
        error: "border-transparent bg-gradient-error-soft text-error-700 hover:shadow-error hover:scale-105",
        medical: "border-transparent bg-gradient-medical text-primary-600 hover:shadow-medical hover:scale-105",
        premium: "border-transparent bg-gradient-premium text-white hover:shadow-premium hover:scale-105 animate-pulse-glow",
        glass: "border-white/20 bg-gradient-glass text-foreground hover:bg-white/10 hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

