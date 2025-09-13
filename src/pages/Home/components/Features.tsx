import { Brain, Palette, GamepadIcon } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Fun Quiz",
      description: "Test your understanding with a plan! But fun online!",
      // bg:
    },
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Creative Activities",
      description:
        "Discover enjoyable activities such as coloring, crafting, and science.",
    },
    {
      icon: <GamepadIcon className="h-12 w-12 text-primary" />,
      title: "Learn with Games",
      description: "Learn something new while you feel playing games!",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Interactive Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engaging activities designed to make learning Bitcoin fun and
            exciting for kids
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
