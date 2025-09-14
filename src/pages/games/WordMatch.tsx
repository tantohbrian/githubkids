import { useState, useEffect } from "react";
import { ArrowLeft, RotateCcw, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { triggerConfetti } from "@/utils/confetti";

interface WordPair {
  word: string;
  definition: string;
  id: string;
}

const wordPairs: WordPair[] = [
  { word: "Bitcoin", definition: "Digital currency", id: "1" },
  { word: "Blockchain", definition: "Digital ledger", id: "2" },
  { word: "Wallet", definition: "Digital storage", id: "3" },
  { word: "Mining", definition: "Verifying transactions", id: "4" },
  { word: "Satoshi", definition: "Smallest Bitcoin unit", id: "5" },
  { word: "Hash", definition: "Digital fingerprint", id: "6" },
];

export const WordMatch = () => {
  const [words, setWords] = useState<WordPair[]>([]);
  const [definitions, setDefinitions] = useState<WordPair[]>([]);
  const [selectedWord, setSelectedWord] = useState<WordPair | null>(null);
  const [selectedDefinition, setSelectedDefinition] = useState<WordPair | null>(
    null
  );
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showFeedback, setShowFeedback] = useState<
    "correct" | "incorrect" | null
  >(null);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledWords = [...wordPairs].sort(() => Math.random() - 0.5);
    const shuffledDefinitions = [...wordPairs].sort(() => Math.random() - 0.5);
    setWords(shuffledWords);
    setDefinitions(shuffledDefinitions);
    setMatchedPairs([]);
    setGameCompleted(false);
    setMoves(0);
    setSelectedWord(null);
    setSelectedDefinition(null);
    setShowFeedback(null);
  };

  const handleWordClick = (word: WordPair) => {
    if (matchedPairs.includes(word.id) || selectedWord?.id === word.id) return;

    if (selectedWord && selectedDefinition) {
      // Reset selection
      setSelectedWord(null);
      setSelectedDefinition(null);
      setShowFeedback(null);
    }

    setSelectedWord(word);
    checkMatch(word, selectedDefinition);
  };

  const handleDefinitionClick = (definition: WordPair) => {
    if (
      matchedPairs.includes(definition.id) ||
      selectedDefinition?.id === definition.id
    )
      return;

    if (selectedWord && selectedDefinition) {
      // Reset selection
      setSelectedWord(null);
      setSelectedDefinition(null);
      setShowFeedback(null);
    }

    setSelectedDefinition(definition);
    checkMatch(selectedWord, definition);
  };

  const checkMatch = (word: WordPair | null, definition: WordPair | null) => {
    if (word && definition) {
      setMoves(moves + 1);

      if (word.id === definition.id) {
        // Correct match
        setMatchedPairs([...matchedPairs, word.id]);
        setShowFeedback("correct");
        setSelectedWord(null);
        setSelectedDefinition(null);

        // Check if game is completed
        if (matchedPairs.length + 1 === wordPairs.length) {
          setTimeout(() => {
            setGameCompleted(true);
            triggerConfetti();
          }, 1000);
        }

        setTimeout(() => setShowFeedback(null), 1000);
      } else {
        // Incorrect match
        setShowFeedback("incorrect");
        setTimeout(() => {
          setSelectedWord(null);
          setSelectedDefinition(null);
          setShowFeedback(null);
        }, 1000);
      }
    }
  };

  const getScoreMessage = () => {
    const perfectMoves = wordPairs.length * 2; // Minimum moves needed
    if (moves <= perfectMoves)
      return "🎉 Perfect! You're a word matching expert!";
    if (moves <= perfectMoves + 2) return "👍 Excellent! Great memory skills!";
    if (moves <= perfectMoves + 4) return "📚 Good job! You're learning well!";
    return "💪 Keep practicing! You'll get better!";
  };

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-2xl w-full text-center shadow-xl">
          <div className="mb-6">
            <div className="text-6xl mb-4">🏆</div>
            <h1 className="text-3xl-system font-bold text-gray-900 mb-4">
              Word Match Complete!
            </h1>
            <p className="text-lg-system text-gray-600 mb-6">
              {getScoreMessage()}
            </p>
            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6 mb-6">
              <div className="text-4xl-system font-bold text-gray-900 mb-2">
                {moves} Moves
              </div>
              <div className="text-lg-system text-gray-600">
                Total Moves Used
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
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
                Word Match Puzzle
              </h1>
              <p className="text-sm-system text-gray-600">
                Match Bitcoin words with their meanings!
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg-system font-bold text-gray-900">
                Moves: {moves}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          {/* Feedback */}
          {showFeedback && (
            <div className="text-center mb-8">
              <div
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg-system font-semibold ${
                  showFeedback === "correct"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {showFeedback === "correct" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Correct Match! 🎉
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5" />
                    Try Again! 💪
                  </>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Words Column */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
                Bitcoin Words
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {words.map((word) => (
                  <div
                    key={word.id}
                    onClick={() => handleWordClick(word)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center ${
                      matchedPairs.includes(word.id)
                        ? "border-green-500 bg-green-50 text-green-800 opacity-60"
                        : selectedWord?.id === word.id
                        ? "border-blue-500 bg-blue-50 text-blue-800"
                        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <span className="text-lg-system font-semibold">
                      {word.word}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Definitions Column */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
                Definitions
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {definitions.map((definition) => (
                  <div
                    key={definition.id}
                    onClick={() => handleDefinitionClick(definition)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center ${
                      matchedPairs.includes(definition.id)
                        ? "border-green-500 bg-green-50 text-green-800 opacity-60"
                        : selectedDefinition?.id === definition.id
                        ? "border-blue-500 bg-blue-50 text-blue-800"
                        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    <span className="text-lg-system font-semibold">
                      {definition.definition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg-system font-semibold text-blue-900 mb-2">
                💡 How to Play:
              </h3>
              <p className="text-sm-system text-blue-800">
                Click on a word from the left column, then click on its matching
                definition from the right column. Try to match all pairs with as
                few moves as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
