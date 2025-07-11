import "./App.css";
import Navbar from "./components/navbar";
import CategoriesPage from "./pages/categories";
import HomePage from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionHtml from "./pages/questionhtml";
import SectionCss from "./pages/sectioncss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/questionhtml" element={<QuestionHtml />} />
        <Route path="/sectionCss" element={<SectionCss />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
