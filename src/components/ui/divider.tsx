import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "default" | "gradient" | "dotted";
}

export function Divider({ className, variant = "default" }: DividerProps) {
  const baseClasses = "w-full h-px";
  
  const variantClasses = {
    default: "bg-border",
    gradient: "bg-gradient-to-r from-transparent via-border to-transparent",
    dotted: "bg-dotted-pattern opacity-30"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)} />
  );
} 