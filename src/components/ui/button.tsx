import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // New variants for Bitcoin Kids
        purpleOutline:
          "border-2 border-primary bg-white text-primary hover:bg-accent/20",
        purpleSolid: "bg-primary text-white hover:bg-primary/90",
        iconCircle:
          "bg-primary text-white rounded-full p-3 hover:bg-primary/90",
        // New contact button variant that matches the image
        contactButton:
          "bg-accent text-white hover:bg-accent/90 rounded-l-md rounded-r-none px-4 py-3 h-12",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    // Handle the contact button variant separately
    if (variant === "contactButton") {
      return (
        <div className="flex items-center">
          <button
            className={cn(
              "bg-accent text-white hover:bg-accent/90 rounded-l-md rounded-r-none px-4 py-3 h-12 font-medium",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </button>
          <button
            className={cn(
              "bg-primary text-white rounded-full p-1.5 -ml-1 hover:bg-primary/90",
              className
            )}
            {...props}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Add arrow icon to specific variants */}
        {variant === "purpleOutline" && (
          <>
            {children}
            <ArrowRight className="ml-2 h-7 w-7 bg-primary text-white rounded-full p-1 rotate-[-12deg]" />
          </>
        )}
        {variant === "purpleSolid" && (
          <>
            {children}
            <ArrowRight className="ml-2 h-6 w-6 rotate-12" />
          </>
        )}
        {variant === "iconCircle" && (
          <ArrowRight className="h-7 w-7 rotate-12" />
        )}
        {/* For other variants, just render children */}
        {![
          "purpleOutline",
          "purpleSolid",
          "iconCircle",
          "contactButton",
        ].includes(variant as string) && children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
