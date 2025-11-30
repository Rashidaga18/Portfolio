import React from "react";
import { Youtube, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#020617] text-gray-300 text-center">

      {}
      <div className="flex justify-center gap-6 text-2xl mb-6">

        {}
        <a 
          href="https://www.youtube.com/@__learnwithrashi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <Youtube size={26} />
        </a>

        {}
        <a 
          href="https://github.com/Rashidaga18" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <Github size={26} />
        </a>

        {}
        <a 
          href="https://www.linkedin.com/in/rashi-daga-185r" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <Linkedin size={26} />
        </a>

      </div>

      {}
      <p className="text-xs text-gray-500">
        © 2024 Rashi Daga. All Rights Reserved.
      </p>
    </footer>
  );
}
