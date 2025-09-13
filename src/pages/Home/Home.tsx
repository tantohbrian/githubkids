import { Hero } from "@/pages/Home/components/Hero";
import { Features } from "@/pages/Home/components/Features";
import { LibraryPreview } from "@/pages/Home/components/LibraryPreview";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">
            Library Preview
          </h2>
          <Link
            to="/library"
            className="text-primary font-semibold hover:underline"
          >
            View All
          </Link>
        </div>
        <LibraryPreview />
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#060010]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl-system font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-2xl-system text-white/80">
              Everything you need to know about Bitcoin Kids
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
};
