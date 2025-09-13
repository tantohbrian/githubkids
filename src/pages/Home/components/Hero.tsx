import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-foreground leading-tight">
              The best place to{" "}
              <span className="font-caveat text-primary text-6xl">learn</span>{" "}
              and{" "}
              <span className="font-caveat text-primary text-6xl">
                understand
              </span>{" "}
              bitcoin for kids
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover thousands of fun and interactive learning activities to
              support your child's growth and learning process.
            </p>
            <Button
              variant="purpleSolid"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Get started
            </Button>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Bitcoin Kids Hero"
              className="w-130  object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
