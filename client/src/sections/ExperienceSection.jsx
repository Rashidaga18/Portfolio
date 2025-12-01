import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Code, Video, Star, Globe2 } from "lucide-react";

export default function ExperienceSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journey = [
    {
      year: "Feb 2024 – Present",
      title: "Tech Tutor",
      org: "Unique Series",
      icon: Star,
      desc: "Teaching coding & technology.",
    },
    {
      year: "Jan 2024 – Present",
      title: "YouTuber",
      org: "LearnWithRashi",
      icon: Video,
      desc: "Creating tech content & tutorials.",
    },
    {
      year: "Sep 2025 – Nov 2025",
      title: "GSSoC Contributor (Second Time)",
      org: "GirlScript Summer of Code",
      icon: Code,
      desc: "Worked on advanced frontend + backend issues.",
    },
    {
      year: "Jul 2025 - Aug 2025",
      title: "Full Stack Developer Intern",
      org: "Tinker Tutor",
      icon: Code,
      desc: "Developed full-stack dashboards & features.",
    },
    {
      year: "Oct 2024 – Nov 2024",
      title: "Open Source Contributor",
      org: "GirlScript Summer of Code (GSSoC)",
      icon: Globe2,
      desc: "Contributed to multiple open-source web development projects.",
    },
    {
      year: "Jul 2024 – Nov 2024",
      title: "Educator Intern",
      org: "YaySkool",
      icon: Briefcase,
      desc: "Worked as an online educator.",
    },
    {
      year: "2022 – 2026",
      title: "B.Tech CSE Student",
      org: "Gautam Buddha University",
      icon: GraduationCap,
      desc: "Pursuing Computer Science engineering.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#020617] text-white py-24 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-purple-300">
        The Experience So Far
      </h2>
      <p className="text-center text-gray-400 mt-3 mb-20">
        A timeline of my experience, growth, and achievements.
      </p>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">

        {}
        <div className="absolute left-1/2 top-0 w-1 bg-purple-900/40 h-full -translate-x-1/2" />

        {}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 w-1 bg-purple-500 -translate-x-1/2 shadow-[0_0_15px_#a855f7]"
        />

        {}
        <div className="pt-10">
          {journey.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`relative w-full mb-24 flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#0f162f] border border-purple-500/20 p-6 rounded-2xl w-[85%] md:w-[45%] shadow-[0_0_20px_rgba(124,58,237,0.2)]"
                >
                  <p className="text-sm text-purple-300">{item.year}</p>
                  <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-gray-300 font-medium">{item.org}</p>
                  <p className="text-gray-400 mt-2">{item.desc}</p>
                </motion.div>

                {}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 top-4 bg-purple-600 text-white p-3 rounded-full shadow-[0_0_20px_#a855f7]"
                >
                  <Icon size={22} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
