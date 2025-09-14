import { Button } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import bgDotted from "@/assets/bg-dotted.svg";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-white">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgDotted}
          alt="Dotted background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="space-y-8 max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl-system font-bold text-black leading-tight">
            Big Ideas for Small Minds:
            <br />
            <TextType
              text={[
                "Learn Bitcoin the Fun Way",
                "Discover Digital Currency",
                "Explore Blockchain Technology",
                "Master Crypto Concepts",
                "Build Financial Literacy",
              ]}
              typingSpeed={75}
              pauseDuration={2000}
              deletingSpeed={30}
              showCursor={true}
              cursorCharacter="|"
              className="text-4xl-system font-bold text-black"
              textColors={["#000000"]}
              loop={true}
            />
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              variant="getStarted"
              size="default"
              className="text-sm-system"
            >
              Get Started
            </Button>
            <Button variant="acrylic" size="default" className="text-sm-system">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
