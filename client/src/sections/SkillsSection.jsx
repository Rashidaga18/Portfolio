import React from "react";

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://raw.githubusercontent.com/github/explore/main/topics/express/express.png" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "C++ DSA", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "AWS", img: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws.svg" },
  ];

  return (
    <section className="min-h-screen w-full bg-[#020617] text-white px-4 py-20">

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-purple-300">
        My Toolkit
      </h2>
      <p className="text-center text-gray-400 mt-3 mb-12">
        A collection of technologies and tools I use to bring ideas to life.
      </p>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#0a0f1f]/80 border border-purple-500/20 rounded-2xl p-6 flex flex-col items-center shadow-[0_0_20px_#7c3aed] hover:scale-105 transition-all"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4" />
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}
