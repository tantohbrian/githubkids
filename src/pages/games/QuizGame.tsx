import { useState } from "react";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is Bitcoin?",
    options: [
      "A type of physical coin",
      "A digital currency",
      "A video game",
      "A type of computer",
    ],
    correctAnswer: 1,
    explanation:
      "Bitcoin is a digital currency that exists only on computers and the internet!",
  },
  {
    id: 2,
    question: "Who created Bitcoin?",
    options: ["Elon Musk", "Satoshi Nakamoto", "Bill Gates", "Steve Jobs"],
    correctAnswer: 1,
    explanation:
      "Satoshi Nakamoto created Bitcoin in 2008, but we don't know who they really are!",
  },
  {
    id: 3,
    question: "What is a blockchain?",
    options: [
      "A chain made of blocks",
      "A digital ledger that records transactions",
      "A type of building",
      "A computer game",
    ],
    correctAnswer: 1,
    explanation:
      "A blockchain is like a digital notebook that keeps track of all Bitcoin transactions!",
  },
  {
    id: 4,
    question: "What is mining in Bitcoin?",
    options: [
      "Digging for gold",
      "Using computers to verify transactions",
      "Playing video games",
      "Building computers",
    ],
    correctAnswer: 1,
    explanation:
      "Mining is when computers solve puzzles to help keep Bitcoin secure and working!",
  },
  {
    id: 5,
    question: "Can Bitcoin be copied?",
    options: [
      "Yes, easily",
      "No, each Bitcoin is unique",
      "Only sometimes",
      "Only by experts",
    ],
    correctAnswer: 1,
    explanation:
      "No! Each Bitcoin is unique and can't be copied, which makes it special!",
  },
];

export const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "🎉 Excellent! You're a Bitcoin expert!";
    if (percentage >= 60) return "👍 Good job! You're learning well!";
    if (percentage >= 40) return "📚 Keep studying! You're getting there!";
    return "💪 Don't give up! Try again!";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-2xl w-full text-center shadow-xl">
          <div className="mb-6">
            <div className="text-6xl mb-4">🏆</div>
            <h1 className="text-3xl-system font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h1>
            <p className="text-lg-system text-gray-600 mb-6">
              {getScoreMessage()}
            </p>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 mb-6">
              <div className="text-4xl-system font-bold text-gray-900 mb-2">
                {score} / {quizQuestions.length}
              </div>
              <div className="text-lg-system text-gray-600">
                Correct Answers
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRestartQuiz}
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

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
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
                Bitcoin Basics Quiz
              </h1>
              <p className="text-sm-system text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-lg-system font-bold text-gray-900">
                Score: {score}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl-system font-bold text-gray-900 mb-6 text-center">
                {question.question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option, index) => {
                  let optionClasses =
                    "p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-left ";

                  if (showResult) {
                    if (index === question.correctAnswer) {
                      optionClasses +=
                        "border-green-500 bg-green-50 text-green-800";
                    } else if (
                      index === selectedAnswer &&
                      index !== question.correctAnswer
                    ) {
                      optionClasses += "border-red-500 bg-red-50 text-red-800";
                    } else {
                      optionClasses +=
                        "border-gray-200 bg-gray-50 text-gray-600";
                    }
                  } else {
                    if (selectedAnswer === index) {
                      optionClasses +=
                        "border-orange-500 bg-orange-50 text-orange-800";
                    } else {
                      optionClasses +=
                        "border-gray-200 hover:border-orange-300 hover:bg-orange-50";
                    }
                  }

                  return (
                    <div
                      key={index}
                      className={optionClasses}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm-system font-medium">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                        {showResult && (
                          <div className="ml-4">
                            {index === question.correctAnswer ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : index === selectedAnswer ? (
                              <XCircle className="w-5 h-5 text-red-500" />
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {showResult && (
              <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-xl">
                <h3 className="text-lg-system font-semibold text-blue-900 mb-2">
                  💡 Explanation:
                </h3>
                <p className="text-sm-system text-blue-800">
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Action Button */}
            <div className="text-center">
              {!showResult ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  variant="primary"
                  size="lg"
                  className="text-sm-system"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  variant="primary"
                  size="lg"
                  className="text-sm-system"
                >
                  {currentQuestion < quizQuestions.length - 1
                    ? "Next Question"
                    : "Finish Quiz"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
