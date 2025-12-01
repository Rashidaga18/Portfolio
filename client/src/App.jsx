import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import Footer from "./components/Footer";
import SkillsSection from "./sections/SkillsSection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME PAGE — Hero + Footer */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Footer />
            </>
          }
        />

        {/* ABOUT PAGE — footer NOT included */}
        <Route path="/about" element={<AboutSection />} />

        {/* SKILLS PAGE — footer NOT included (jaise tum chahti ho) */}
        <Route path="/skills" element={<SkillsSection />} />

      </Routes>
    </>
  );
}

export default App;
