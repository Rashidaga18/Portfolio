import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import Footer from "./components/Footer";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Footer />
            </>
          }
        />

        {}
        <Route path="/about" element={<AboutSection />} />

        {}
        <Route path="/skills" element={<SkillsSection />} />

        {}
        <Route path="/experience" element={<ExperienceSection />} />

      </Routes>
    </>
  );
}

export default App;
