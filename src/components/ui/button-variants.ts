import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-gray-100 hover:text-gray-800",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-gray-100 hover:text-gray-800 text-gray-800",
        link: "text-gray-800 underline-offset-4 hover:underline",
        // New modern variants
        white: "bg-white text-black hover:bg-gray-100",
        primary:
          "bg-orange-500 !text-amber-100 hover:bg-orange-600 [&_svg]:!text-amber-100",
        acrylic:
          "bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-black/30",
        // Legacy variants for Bitcoin Kids
        purpleOutline:
          "border-2 border-primary bg-white text-primary hover:bg-accent/20 cursor-pointer",
        purpleSolid: "bg-primary text-white hover:bg-primary/90",
        // Special animated variant
        getStarted:
          "group flex w-fit items-center justify-center gap-3 rounded-lg bg-amber-100 p-2  transition-colors duration-100 ease-in-out hover:bg-orange-600",
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
