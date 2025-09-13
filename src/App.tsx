import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home/Home";
import Library from "@/pages/Library";
import LibraryDetail from "@/pages/LibraryDetail";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<LibraryDetail />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
