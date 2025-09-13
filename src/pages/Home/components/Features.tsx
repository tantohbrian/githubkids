import { Brain, Palette, GamepadIcon } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-purple-800" />,
      title: "Fun Quiz",
      description: "Test your understanding with a short but fun quizzes!",
      bg: "#E8D5FF", // Light lavender
      textColor: "#4C1D95", // Dark purple
      decoration: "circles",
      tilt: "rotate-1",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-800" />,
      title: "Creative Activities",
      description:
        "Discover enjoyable activities such as coloring, crafting, and science.",
      bg: "#4C1D95", // Dark purple
      textColor: "#FFFFFF", // White
      decoration: "waves",
      tilt: "-rotate-1",
    },
    {
      icon: <GamepadIcon className="h-8 w-8 text-purple-800" />,
      title: "Learn with Games",
      description: "Learn something new while your kids playing games!",
      bg: "#ffd35e", // Bright yellow
      textColor: "#4C1D95", // Dark purple
      decoration: "dots",
      tilt: "rotate-1",
    },
  ];

  const DecorationElement = ({ type }: { type: string }) => {
    switch (type) {
      case "circles":
        return (
          <div className="absolute top-4 right-4 w-16 h-16">
            <div className="w-4 h-4 bg-purple-800 rounded-full absolute top-0 right-0"></div>
            <div className="w-6 h-6 bg-purple-800 rounded-full absolute top-2 right-2"></div>
            <div className="w-8 h-8 bg-purple-800 rounded-full absolute top-4 right-4"></div>
          </div>
        );
      case "waves":
        return (
          <div className="absolute top-4 right-4 w-16 h-16">
            <svg viewBox="0 0 60 40" className="w-full h-full">
              <path
                d="M5,20 Q15,5 25,20 T45,20 T60,20"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>
        );
      case "dots":
        return (
          <div className="absolute top-4 right-4 w-16 h-16 grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-800 rounded-full"></div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-custom">
      <div className="text-center mb-20">
        <h2 className="text-xl-system font-bold text-gray-900 mb-6">
          Our Interactive Features
        </h2>
        <p className="text-base-system text-gray-600 max-w-2xl mx-auto">
          Engaging activities designed to make learning Bitcoin fun and exciting
          for kids
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative transform ${feature.tilt} hover:scale-105 transition-all duration-300 cursor-pointer`}
            style={{ background: feature.bg }}
          >
            <div className="rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Decorative Elements */}
              <DecorationElement type={feature.decoration} />

              {/* Icon Badge */}
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: feature.bg === "#4C1D95" ? "white" : "white",
                  }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
                    {feature.icon}
                  </div>
                  {/* X marks */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-lg-system font-bold mb-4 leading-tight"
                  style={{ color: feature.textColor }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm-system leading-relaxed"
                  style={{ color: feature.textColor }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
