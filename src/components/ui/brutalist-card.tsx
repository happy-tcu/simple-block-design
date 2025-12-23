import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "inverted" | "outline";
  hover?: boolean;
}

export function BrutalistCard({
  children,
  className,
  variant = "default",
  hover = false,
}: BrutalistCardProps) {
  const variants = {
    default: "bg-card text-card-foreground border-2 border-foreground",
    inverted: "bg-foreground text-background border-2 border-foreground",
    outline: "bg-transparent text-foreground border-2 border-foreground",
  };

  return (
    <div
      className={cn(
        "p-6",
        variants[variant],
        hover && "transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_hsl(var(--foreground))]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BrutalistBlockProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function BrutalistBlock({
  children,
  className,
  size = "md",
}: BrutalistBlockProps) {
  const sizes = {
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  };

  return (
    <div
      className={cn(
        "bg-foreground text-background",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

interface BrutalistButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function BrutalistButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
}: BrutalistButtonProps) {
  const variants = {
    primary: "bg-foreground text-background hover:bg-background hover:text-foreground border-2 border-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background border-2 border-foreground",
    outline: "bg-transparent text-foreground hover:bg-foreground hover:text-background border-2 border-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-bold uppercase tracking-wider transition-all",
        "shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-none hover:translate-x-1 hover:translate-y-1",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))]",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}

interface BrutalistInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  required?: boolean;
}

export function BrutalistInput({
  placeholder,
  type = "text",
  value,
  onChange,
  className,
  name,
  required,
}: BrutalistInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      className={cn(
        "w-full px-4 py-3 bg-background text-foreground border-2 border-foreground",
        "placeholder:text-muted-foreground focus:outline-none focus:ring-0",
        "focus:shadow-[4px_4px_0px_0px_hsl(var(--foreground))]",
        className
      )}
    />
  );
}

interface BrutalistBadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "inverted";
}

export function BrutalistBadge({
  children,
  className,
  variant = "default",
}: BrutalistBadgeProps) {
  const variants = {
    default: "bg-foreground text-background",
    inverted: "bg-background text-foreground border-2 border-foreground",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

interface BrutalistStatProps {
  value: string | number;
  label: string;
  className?: string;
}

export function BrutalistStat({ value, label, className }: BrutalistStatProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl md:text-6xl font-bold">{value}</div>
      <div className="text-sm uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
}
