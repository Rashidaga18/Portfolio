import React from "react";
import { Linkedin, Github, Instagram, Youtube } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4"
    >
      <div className="w-full max-w-md bg-[#0b1229] rounded-2xl p-8
        shadow-[0_0_40px_rgba(168,85,247,0.35)]
        border border-purple-500/20"
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Let’s Connect
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3
              focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3
              focus:outline-none focus:border-purple-500"
          />

          <textarea
            rows="4"
            placeholder="What's on your mind?"
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3
              focus:outline-none focus:border-purple-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition
              rounded-full py-3 font-semibold mt-2"
          >
            Send Message
          </button>
        </form>

       {}
<div className="flex justify-center gap-5 mt-8 text-gray-400">
  <a
    href="https://www.linkedin.com/in/rashi-daga-185r"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    <Linkedin size={22} />
  </a>

  <a
    href="https://github.com/Rashidaga18"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    <Github size={22} />
  </a>

  <a
    href="https://www.youtube.com/@__learnwithrashi"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    <Youtube size={22} />
  </a>
</div>

      </div>
    </section>
  );
}
