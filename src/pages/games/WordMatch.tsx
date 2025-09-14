import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WordMatch = () => {
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
            <div></div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">🧩</div>
              <h2 className="text-xl-system font-bold text-gray-900 mb-4">
                Coming Soon!
              </h2>
              <p className="text-sm-system text-gray-600 mb-6">
                This exciting word matching game is being developed. You'll be
                able to drag and drop Bitcoin-related words to match them with
                their correct meanings!
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6 mb-8">
              <h3 className="text-lg-system font-semibold text-gray-900 mb-4">
                What to Expect:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-sm-system text-gray-700">
                    Drag & Drop Interface
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <span className="text-sm-system text-gray-700">
                    Learn Bitcoin Vocabulary
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-sm-system text-gray-700">
                    Earn Points & Stars
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm-system text-gray-700">
                    Unlock Achievements
                  </span>
                </div>
              </div>
            </div>

            <Link to="/kids-corner">
              <Button variant="primary" size="lg" className="text-sm-system">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Games
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
