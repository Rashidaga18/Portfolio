import React from "react";
import profilePic from "../assets/profile.jpg"; 
export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-[#020617] text-white">
      
      {}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-purple-400">Rashi Daga</span>
        </h1>

        <p className="text-lg text-gray-300">
          A Full Stack Developer & Content Creator
        </p>

        {}
        <div className="flex gap-6 mt-6">
          <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all shadow-[0_0_25px_#b026ff]">
            View My Work
          </button>

          <button className="px-6 py-3 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-700/20 transition-all">
            Download Resume
          </button>
        </div>
      </div>

      {}
      <div className="mt-10 md:mt-0 flex-1 flex justify-center">
        <div className="relative">
          <img
            src={profilePic}
            alt="profile"
            className="
              w-64 h-64 md:w-80 md:h-80 
              object-cover rounded-full 
              brightness-1 contrast-124 saturate-125
              shadow-[0_0_60px_#b026ff80]
            "
          />
        </div>
      </div>

    </section>
  );
}
