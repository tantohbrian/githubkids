import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { FloatingNavbar } from "@/components/shared/FloatingNavbar";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative h-[75vh] overflow-hidden bg-white">
      {/* DotPattern Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotPattern
          glow={true}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="space-y-8 max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl-system font-bold text-black leading-tight">
            Big Ideas for Small Minds: Learn Bitcoin the Fun Way
            <br />
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="white" size="default">
              Get Started
            </Button>
            <Button variant="acrylic" size="default">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
