import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmDetail from "./pages/FilmDetail";
import Music from "./pages/Music";
import Books from "./pages/Books";
import NextPage from "./pages/NextPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/film/:id" element={<FilmDetail />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/books" element={<Books />} />
            <Route path="/next-page" element={<NextPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
