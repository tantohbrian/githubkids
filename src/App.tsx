import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home/Home";
import Library from "@/pages/Library";
import BookDetailPage from "@/pages/BookDetailPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:bookId" element={<BookDetailPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
