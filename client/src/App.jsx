import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import Footer from "./components/Footer";

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
              <Footer /> {}
            </>
          }
        />

        {}
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </>
  );
}

export default App;
