import {
  Brain,
  Puzzle,
  MemoryStick,
  Coins,
  Sparkles,
  Gamepad2,
} from "lucide-react";
import { GameCard } from "@/components/GameCard";

export const KidsCorner = () => {
  const games = [
    {
      title: "Bitcoin Basics Quiz",
      description:
        "Test your knowledge with fun multiple-choice questions about Bitcoin and blockchain!",
      icon: Brain,
      path: "/kids-corner/quiz",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Word Match Puzzle",
      description:
        "Match Bitcoin-related words with their meanings in this exciting puzzle game!",
      icon: Puzzle,
      path: "/kids-corner/word-match",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Memory Flip Game",
      description:
        "Flip cards to find matching Bitcoin symbols and improve your memory skills!",
      icon: MemoryStick,
      path: "/kids-corner/memory",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: "Counting Coins Game",
      description:
        "Count coins to reach target amounts and learn about Bitcoin values!",
      icon: Coins,
      path: "/kids-corner/counting-coins",
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gamepad2 className="w-12 h-12 text-orange-500" />
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <h1 className="text-4xl-system font-bold text-gray-900 mb-4">
              Kids Corner
            </h1>
            <p className="text-lg-system text-gray-600 max-w-2xl mx-auto">
              Welcome to the fun zone! Play exciting games and learn about
              Bitcoin in the most enjoyable way possible.
            </p>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <div
              key={game.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>

        {/* Fun Stats Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl-system font-bold text-gray-900 mb-6">
              🎯 Ready to Start Learning?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🧠</div>
                <h3 className="text-lg-system font-semibold text-gray-900 mb-2">
                  Learn & Play
                </h3>
                <p className="text-sm-system text-gray-600">
                  Interactive games make learning fun and memorable
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-lg-system font-semibold text-gray-900 mb-2">
                  Earn Rewards
                </h3>
                <p className="text-sm-system text-gray-600">
                  Complete games to unlock achievements and badges
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="text-lg-system font-semibold text-gray-900 mb-2">
                  Family Fun
                </h3>
                <p className="text-sm-system text-gray-600">
                  Perfect for kids and parents to play together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
