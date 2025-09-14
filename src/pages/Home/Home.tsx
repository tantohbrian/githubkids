import { Hero } from "@/pages/Home/components/Hero";
import { Features } from "@/pages/Home/components/Features";
import { LibraryPreview } from "@/pages/Home/components/LibraryPreview";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { NewsletterComponent } from "@/components/NewsletterComponent";

export const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-20">
        <Features />
      </section>
      <section className="py-20 bg-gray-50">
        <LibraryPreview />
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xl-system font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base-system text-gray-600">
              Everything you need to know about Bitcoin Kids
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterComponent />
    </div>
  );
};
