import { useState, useEffect } from "react";
import { ArrowLeft, RotateCcw, Clock, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { triggerConfetti } from "@/utils/confetti";

interface Card {
  id: string;
  symbol: string;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const cardSymbols = [
  { symbol: "₿", emoji: "₿", name: "Bitcoin Symbol" },
  { symbol: "🔗", emoji: "🔗", name: "Blockchain Link" },
  { symbol: "💎", emoji: "💎", name: "Diamond Hands" },
  { symbol: "⚡", emoji: "⚡", name: "Lightning Network" },
  { symbol: "🔐", emoji: "🔐", name: "Cryptographic Lock" },
  { symbol: "📊", emoji: "📊", name: "Market Chart" },
  { symbol: "🏦", emoji: "🏦", name: "Digital Bank" },
  { symbol: "🌐", emoji: "🌐", name: "Global Network" },
];

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  // Timer effect
  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
      setTimer(interval);
      return () => clearInterval(interval);
    } else if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  }, [gameStarted, gameCompleted]);

  const initializeGame = () => {
    // Create pairs of cards
    const cardPairs = [...cardSymbols, ...cardSymbols].map((symbol, index) => ({
      id: `${symbol.symbol}-${index}`,
      symbol: symbol.symbol,
      emoji: symbol.emoji,
      isFlipped: false,
      isMatched: false,
    }));

    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameCompleted(false);
    setGameStarted(false);
    setTimeElapsed(0);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const handleCardClick = (card: Card) => {
    if (
      !gameStarted ||
      card.isFlipped ||
      card.isMatched ||
      flippedCards.length >= 2
    ) {
      return;
    }

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);

      setTimeout(() => {
        checkForMatch(newFlippedCards);
      }, 1000);
    }
  };

  const checkForMatch = (flipped: Card[]) => {
    const [card1, card2] = flipped;

    if (card1.symbol === card2.symbol) {
      // Match found
      const newCards = cards.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, isMatched: true }
          : card
      );
      setCards(newCards);
      setMatchedPairs(matchedPairs + 1);

      // Check if game is completed
      if (matchedPairs + 1 === cardSymbols.length) {
        setTimeout(() => {
          setGameCompleted(true);
          triggerConfetti();
        }, 500);
      }
    } else {
      // No match, flip cards back
      const newCards = cards.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, isFlipped: false }
          : card
      );
      setCards(newCards);
    }

    setFlippedCards([]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getScoreMessage = () => {
    const totalTime = timeElapsed;
    const totalMoves = moves;

    if (totalMoves <= cardSymbols.length * 1.5 && totalTime <= 60) {
      return "🎉 Amazing! You're a memory master!";
    } else if (totalMoves <= cardSymbols.length * 2 && totalTime <= 90) {
      return "👍 Excellent! Great memory skills!";
    } else if (totalMoves <= cardSymbols.length * 3) {
      return "📚 Good job! You're getting better!";
    } else {
      return "💪 Keep practicing! Memory improves with time!";
    }
  };

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-2xl w-full text-center shadow-xl">
          <div className="mb-6">
            <div className="text-6xl mb-4">🏆</div>
            <h1 className="text-3xl-system font-bold text-gray-900 mb-4">
              Memory Game Complete!
            </h1>
            <p className="text-lg-system text-gray-600 mb-6">
              {getScoreMessage()}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4">
                <div className="text-2xl-system font-bold text-gray-900 mb-1">
                  {formatTime(timeElapsed)}
                </div>
                <div className="text-sm-system text-gray-600">Time Taken</div>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4">
                <div className="text-2xl-system font-bold text-gray-900 mb-1">
                  {moves}
                </div>
                <div className="text-sm-system text-gray-600">Total Moves</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={initializeGame}
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
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
                Memory Flip Game
              </h1>
              <p className="text-sm-system text-gray-600">
                Find matching Bitcoin symbols!
              </p>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center gap-2 text-sm-system text-gray-600">
                <Clock className="w-4 h-4" />
                {formatTime(timeElapsed)}
              </div>
              <div className="flex items-center gap-2 text-sm-system text-gray-600">
                <Trophy className="w-4 h-4" />
                {moves} moves
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {!gameStarted ? (
            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="mb-8">
                <div className="text-6xl mb-4">🧠</div>
                <h2 className="text-xl-system font-bold text-gray-900 mb-4">
                  Ready to Test Your Memory?
                </h2>
                <p className="text-sm-system text-gray-600 mb-6">
                  Flip cards to find matching Bitcoin symbols. Try to complete
                  the game with as few moves and as quickly as possible!
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-8">
                <h3 className="text-lg-system font-semibold text-gray-900 mb-4">
                  Game Rules:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔄</span>
                    <span className="text-sm-system text-gray-700">
                      Click cards to flip them
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-sm-system text-gray-700">
                      Find matching pairs
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-sm-system text-gray-700">
                      Beat the timer
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏅</span>
                    <span className="text-sm-system text-gray-700">
                      Minimize moves
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={startGame}
                variant="primary"
                size="lg"
                className="text-sm-system"
              >
                Start Game
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    className={`aspect-square rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center justify-center text-4xl font-bold ${
                      card.isMatched
                        ? "border-green-500 bg-green-100 text-green-800 opacity-60"
                        : card.isFlipped
                        ? "border-blue-500 bg-blue-100 text-blue-800"
                        : "border-gray-200 bg-gray-100 text-gray-600 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    {card.isFlipped || card.isMatched ? card.emoji : "?"}
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-8 text-center">
                <div className="bg-purple-50 border-l-4 border-purple-400 rounded-xl p-6">
                  <h3 className="text-lg-system font-semibold text-purple-900 mb-2">
                    Progress: {matchedPairs} / {cardSymbols.length} pairs
                    matched
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                      style={{
                        width: `${(matchedPairs / cardSymbols.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
