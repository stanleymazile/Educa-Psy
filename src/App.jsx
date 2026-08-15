import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Accueil from "./pages/Accueil.jsx";
import APropos from "./pages/APropos.jsx";
import Programmes from "./pages/Programmes.jsx";
import Projets from "./pages/Projets.jsx";
import Impliquer from "./pages/Impliquer.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper text-ink">
        <ScrollToTop />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/simpliquer" element={<Impliquer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
