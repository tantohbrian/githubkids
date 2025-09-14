import { useState, useEffect } from "react";
import { ArrowLeft, RotateCcw, Target, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { triggerConfetti } from "@/utils/confetti";

interface Coin {
  id: string;
  value: number;
  emoji: string;
  name: string;
}

interface Level {
  id: number;
  targetAmount: number;
  description: string;
  coins: Coin[];
}

const coinTypes: Coin[] = [
  { id: "satoshi", value: 1, emoji: "🪙", name: "Satoshi (1)" },
  { id: "bit", value: 10, emoji: "🪙", name: "Bit (10)" },
  { id: "microbitcoin", value: 100, emoji: "🪙", name: "Micro Bitcoin (100)" },
  {
    id: "millibitcoin",
    value: 1000,
    emoji: "🪙",
    name: "Milli Bitcoin (1,000)",
  },
  {
    id: "bitcoin",
    value: 100000000,
    emoji: "₿",
    name: "Bitcoin (100,000,000)",
  },
];

const levels: Level[] = [
  {
    id: 1,
    targetAmount: 15,
    description: "Count to 15 using any coins",
    coins: coinTypes.slice(0, 3), // Satoshi, Bit, Micro Bitcoin
  },
  {
    id: 2,
    targetAmount: 50,
    description: "Count to 50 using any coins",
    coins: coinTypes.slice(0, 4), // All except Bitcoin
  },
  {
    id: 3,
    targetAmount: 100,
    description: "Count to 100 using any coins",
    coins: coinTypes.slice(0, 4), // All except Bitcoin
  },
  {
    id: 4,
    targetAmount: 500,
    description: "Count to 500 using any coins",
    coins: coinTypes.slice(0, 4), // All except Bitcoin
  },
  {
    id: 5,
    targetAmount: 1000,
    description: "Count to 1000 using any coins",
    coins: coinTypes.slice(0, 4), // All except Bitcoin
  },
];

export const CountingCoins = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedCoins, setSelectedCoins] = useState<{ [key: string]: number }>(
    {}
  );
  const [totalValue, setTotalValue] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState<
    "correct" | "incorrect" | null
  >(null);
  const [attempts, setAttempts] = useState(0);
  const [perfectScore, setPerfectScore] = useState(false);

  const level = levels[currentLevel];

  useEffect(() => {
    calculateTotal();
  }, [selectedCoins]);

  const calculateTotal = () => {
    const total = Object.entries(selectedCoins).reduce(
      (sum, [coinId, count]) => {
        const coin = coinTypes.find((c) => c.id === coinId);
        return sum + (coin ? coin.value * count : 0);
      },
      0
    );
    setTotalValue(total);
  };

  const addCoin = (coinId: string) => {
    setSelectedCoins((prev) => ({
      ...prev,
      [coinId]: (prev[coinId] || 0) + 1,
    }));
  };

  const removeCoin = (coinId: string) => {
    setSelectedCoins((prev) => {
      const newCount = Math.max(0, (prev[coinId] || 0) - 1);
      if (newCount === 0) {
        const { [coinId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [coinId]: newCount };
    });
  };

  const checkAnswer = () => {
    setAttempts(attempts + 1);

    if (totalValue === level.targetAmount) {
      setShowFeedback("correct");
      setPerfectScore(attempts === 0);

      setTimeout(() => {
        if (currentLevel < levels.length - 1) {
          nextLevel();
        } else {
          setGameCompleted(true);
          triggerConfetti();
        }
      }, 1500);
    } else {
      setShowFeedback("incorrect");
      setTimeout(() => setShowFeedback(null), 1500);
    }
  };

  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
    setSelectedCoins({});
    setTotalValue(0);
    setShowFeedback(null);
    setAttempts(0);
    setPerfectScore(false);
  };

  const resetLevel = () => {
    setSelectedCoins({});
    setTotalValue(0);
    setShowFeedback(null);
    setAttempts(0);
    setPerfectScore(false);
  };

  const getScoreMessage = () => {
    const perfectLevels = levels.filter(
      (_, index) => index <= currentLevel
    ).length;
    if (perfectLevels === levels.length) {
      return "🎉 Perfect! You're a Bitcoin counting expert!";
    } else if (perfectLevels >= levels.length * 0.8) {
      return "👍 Excellent! Great counting skills!";
    } else if (perfectLevels >= levels.length * 0.6) {
      return "📚 Good job! You're learning well!";
    } else {
      return "💪 Keep practicing! You'll get better!";
    }
  };

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-2xl w-full text-center shadow-xl">
          <div className="mb-6">
            <div className="text-6xl mb-4">🏆</div>
            <h1 className="text-3xl-system font-bold text-gray-900 mb-4">
              Counting Coins Complete!
            </h1>
            <p className="text-lg-system text-gray-600 mb-6">
              {getScoreMessage()}
            </p>
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 mb-6">
              <div className="text-4xl-system font-bold text-gray-900 mb-2">
                Level {levels.length} / {levels.length}
              </div>
              <div className="text-lg-system text-gray-600">
                All Levels Completed
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                setCurrentLevel(0);
                setGameCompleted(false);
                resetLevel();
              }}
              variant="primary"
              size="lg"
              className="text-sm-system"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Play Again
            </Button>
            <Link to="/kids-corner">
              <Button variant="outline" size="lg" className="text-sm-system">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Games
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <Link to="/kids-corner">
              <Button variant="ghost" size="default" className="text-sm-system">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Games
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl-system font-bold text-gray-900">
                Counting Coins Game
              </h1>
              <p className="text-sm-system text-gray-600">
                Level {level.id} of {levels.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg-system font-bold text-gray-900">
                Target: {level.targetAmount}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Level Info */}
          <div className="bg-white rounded-3xl p-6 shadow-xl mb-8">
            <div className="text-center mb-6">
              <h2 className="text-xl-system font-bold text-gray-900 mb-2">
                {level.description}
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-lg-system text-gray-600">
                  <Target className="w-5 h-5" />
                  Target: {level.targetAmount}
                </div>
                <div className="flex items-center gap-2 text-lg-system text-gray-600">
                  <Coins className="w-5 h-5" />
                  Current: {totalValue}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <div
                className="bg-gradient-to-r from-amber-500 to-yellow-500 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(
                    (totalValue / level.targetAmount) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg-system font-semibold ${
                    showFeedback === "correct"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {showFeedback === "correct" ? (
                    <>
                      ✅ Correct! {perfectScore ? "Perfect!" : "Well done!"} 🎉
                    </>
                  ) : (
                    <>❌ Try again! Current total: {totalValue} 💪</>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coin Selection */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
                Available Coins
              </h3>
              <div className="space-y-4">
                {level.coins.map((coin) => (
                  <div
                    key={coin.id}
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{coin.emoji}</span>
                      <div>
                        <div className="text-lg-system font-semibold text-gray-900">
                          {coin.name}
                        </div>
                        <div className="text-sm-system text-gray-600">
                          Value: {coin.value.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => removeCoin(coin.id)}
                        variant="outline"
                        size="sm"
                        disabled={!selectedCoins[coin.id]}
                        className="text-sm-system"
                      >
                        -
                      </Button>
                      <span className="text-lg-system font-bold text-gray-900 min-w-[2rem] text-center">
                        {selectedCoins[coin.id] || 0}
                      </span>
                      <Button
                        onClick={() => addCoin(coin.id)}
                        variant="outline"
                        size="sm"
                        className="text-sm-system"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Coins Display */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
                Your Selection
              </h3>

              {Object.keys(selectedCoins).length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🪙</div>
                  <p className="text-sm-system text-gray-600">
                    Select coins to reach the target amount!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(selectedCoins).map(([coinId, count]) => {
                    const coin = coinTypes.find((c) => c.id === coinId);
                    if (!coin) return null;

                    return (
                      <div
                        key={coinId}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{coin.emoji}</span>
                          <span className="text-sm-system font-semibold text-gray-900">
                            {coin.name}
                          </span>
                        </div>
                        <div className="text-sm-system text-gray-600">
                          {count} × {coin.value.toLocaleString()} ={" "}
                          {(count * coin.value).toLocaleString()}
                        </div>
                      </div>
                    );
                  })}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg-system font-bold text-gray-900">
                        Total:
                      </span>
                      <span className="text-xl-system font-bold text-gray-900">
                        {totalValue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Check Answer Button */}
              <div className="mt-6 text-center">
                <Button
                  onClick={checkAnswer}
                  disabled={totalValue === 0}
                  variant="primary"
                  size="lg"
                  className="text-sm-system w-full"
                >
                  Check Answer
                </Button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg-system font-semibold text-amber-900 mb-2">
                💡 How to Play:
              </h3>
              <p className="text-sm-system text-amber-800">
                Use the + and - buttons to select coins. Try to reach the target
                amount using as few coins as possible. Each coin has a different
                value - choose wisely!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
