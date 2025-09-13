import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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
        // New modern variants
        white: "bg-white text-black hover:bg-gray-100",
        primary: "bg-primary text-white hover:bg-primary/90",
        acrylic:
          "bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-black/30",
        // Legacy variants for Bitcoin Kids
        purpleOutline:
          "border-2 border-primary bg-white text-primary hover:bg-accent/20 cursor-pointer",
        purpleSolid: "bg-primary text-white hover:bg-primary/90",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4",
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
    // Special handling for getStarted variant
    if (variant === "getStarted") {
      return (
        <button
          className={cn(
            "group flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-amber-100 p-2 font-bold transition-colors duration-100 ease-in-out hover:bg-orange-600",
            className
          )}
          ref={ref}
          {...props}
        >
          <span className="text-orange-600 transition-colors duration-100 ease-in-out group-hover:text-amber-100">
            {children}
          </span>
          <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100 bg-orange-600 group-hover:bg-amber-100">
            <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
              <ArrowRight
                size={16}
                className="size-7 transform p-1 text-orange-600 opacity-0 group-hover:opacity-100"
              />
              <ArrowRight
                size={16}
                className="size-7 transform p-1 text-amber-100 opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0"
              />
            </div>
          </div>
        </button>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
