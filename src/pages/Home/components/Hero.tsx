import { Button } from "@/components/ui/button";
import PixelBlast from "@/components/PixelBlast";
import { FloatingNavbar } from "@/components/shared/FloatingNavbar";

export const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[#060010]">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 w-full h-full">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="rgb(245, 177, 61)"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="space-y-8 max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl-system font-bold text-white leading-tight">
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
