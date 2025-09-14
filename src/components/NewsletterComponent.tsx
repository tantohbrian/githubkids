import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterComponent = () => {
  return (
    <section className="py-2 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Container */}
        <div className="rounded-2xl p-8">
          <div className="text-center space-y-8">
            {/* Title */}
            <h2 className="text-3xl font-bold text-white">Keep Updated</h2>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed max-w-md mx-auto">
              Keep pace with Bitcoin Kids advancements! Join our mailing list
              for selective, noteworthy updates.
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-0 rounded-lg"
                />
              </div>
              <Button
                variant="white"
                size="default"
                className="h-12 px-8 bg-gray-200 text-gray-900 hover:bg-gray-100 rounded-lg font-medium"
              >
                Notify me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
