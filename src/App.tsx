import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home/Home";
import Library from "@/pages/Library";
import BookDetailPage from "@/pages/BookDetailPage";
import { KidsCorner } from "@/pages/KidsCorner";
import { QuizGame } from "@/pages/games/QuizGame";
import { WordMatch } from "@/pages/games/WordMatch";
import { MemoryGame } from "@/pages/games/MemoryGame";
import { CountingCoins } from "@/pages/games/CountingCoins";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:bookId" element={<BookDetailPage />} />
        <Route path="/kids-corner" element={<KidsCorner />} />
        <Route path="/kids-corner/quiz" element={<QuizGame />} />
        <Route path="/kids-corner/word-match" element={<WordMatch />} />
        <Route path="/kids-corner/memory" element={<MemoryGame />} />
        <Route path="/kids-corner/counting-coins" element={<CountingCoins />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
