import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  path: string;
  bgColor: string;
  iconColor: string;
}

export const GameCard = ({
  title,
  description,
  icon: Icon,
  path,
  bgColor,
  iconColor,
}: GameCardProps) => {
  return (
    <Link to={path} className="group block">
      <div
        className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl h-full flex flex-col ${bgColor}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gray-200"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gray-200"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center shadow-lg">
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl-system font-bold text-gray-900 mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm-system text-gray-700 mb-6 leading-relaxed flex-grow">
            {description}
          </p>

          {/* Play Button */}
          <Button
            variant="primary"
            size="default"
            className="w-full text-sm-system group-hover:bg-orange-600 transition-colors mt-auto"
          >
            Play Game
          </Button>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};
