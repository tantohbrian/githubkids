import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./button-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "getStarted" ? (
          <>
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
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
