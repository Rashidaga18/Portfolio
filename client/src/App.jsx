import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection"; 

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

        {}
        <Route path="/contact" element={<ContactSection />} /> {/* ✅ ADD THIS */}

      </Routes>
    </>
  );
}

export default App;
