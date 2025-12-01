import React from "react";
import { Laptop, BookOpen, Camera, Coffee } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-[#020617] flex items-center justify-center px-4 py-20 relative overflow-hidden scrollbar-hide">

      {}
      <div className="absolute left-20 top-1/3 flex flex-col items-center gap-3 animate-pulse">
        <div className="p-4 rounded-full bg-purple-600/20 backdrop-blur-xl shadow-[0_0_25px_#b026ff]">
          <Laptop className="text-purple-300" size={32} />
        </div>
        <p className="text-gray-400 text-sm">Development</p>
      </div>

      <div className="absolute left-28 bottom-20 flex flex-col items-center gap-3 animate-pulse">
        <div className="p-4 rounded-full bg-purple-600/20 backdrop-blur-xl shadow-[0_0_25px_#b026ff]">
          <BookOpen className="text-purple-300" size={32} />
        </div>
        <p className="text-gray-400 text-sm">Tech Education</p>
      </div>

      <div className="absolute right-24 top-1/3 flex flex-col items-center gap-3 animate-pulse">
        <div className="p-4 rounded-full bg-purple-600/20 backdrop-blur-xl shadow-[0_0_25px_#b026ff]">
          <Camera className="text-purple-300" size={32} />
        </div>
        <p className="text-gray-400 text-sm">Content Creation</p>
      </div>

      <div className="absolute right-32 bottom-20 flex flex-col items-center gap-3 animate-pulse">
        <div className="p-4 rounded-full bg-purple-600/20 backdrop-blur-xl shadow-[0_0_25px_#b026ff]">
          <Coffee className="text-purple-300" size={32} />
        </div>
        <p className="text-gray-400 text-sm">Creative Process</p>
      </div>

      {/* CENTER CARD */}
      <div className="w-full max-w-xl bg-[#0a0f1f]/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-[0_0_40px_#7c3aed] p-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I'm a final-year engineering student passionate about
          building full-stack web applications and creating
          meaningful tech content that helps others learn and grow.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all shadow-[0_0_20px_#b026ff] text-white font-medium">
          View My Projects
        </button>
      </div>
    </section>
  );
}
