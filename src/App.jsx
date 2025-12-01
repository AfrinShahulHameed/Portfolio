// src/App.jsx
import React from "react";

import SectionHeading from "./SectionHeading";

import { motion } from "framer-motion";

/**
 * Premium dark portfolio (Afrin S — UI/UX Designer)
 */

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050509] text-[#f5f5f5] antialiased selection:bg-[#c084fc]/30 selection:text-black relative overflow-x-hidden">

      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[#c084fc]/15 blur-3xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#22c55e]/10 blur-3xl" />
      </div>

      {/* HEADER */}
      <header className="fixed top-4 left-1/2 z-50 w-[92%] -translate-x-1/2 rounded-2xl bg-[rgba(255,255,255,0.03)] backdrop-blur-lg py-3 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#38bdf8] text-xs font-bold shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
              AS
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Afrin S</div>
              <div className="text-[11px] text-white/60">UI/UX Designer</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#certs">Certificates</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="px-6 pt-28 pb-20 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:items-center">

          {/* LEFT */}
          <motion.div
            className="md:col-span-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to internships & full-time roles · UI/UX
            </div>

            <h1
              className="mt-4 text-3xl font-semibold leading-snug md:text-5xl md:leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Designing calm,{" "}
              <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">
                user-centered
              </span>{" "}
              experiences that turn complex flows into simple decisions.
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
              I’m <strong>Afrin S</strong>, a UI/UX designer focused on creating clean, intuitive and trustworthy digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <AnimatedButton href="#work" variant="solid">
                View My Work
              </AnimatedButton>

              <AnimatedButton
                href="https://www.linkedin.com/in/afrin-s-873a09332/"
                variant="outline"
              >
                <span className="mr-2 text-lg">in</span>
                LinkedIn
              </AnimatedButton>
            </div>
          </motion<div>

          {/* RIGHT — HERO IMAGE */}
          <motion.div
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#0b0b0d]/80 backdrop-blur-sm shadow-[0_30px_90px_rgba(0,0,0,0.6)] p-6">

              <img
                src={process.env.PUBLIC_URL + "/illustration.png"}
                alt="UI/UX Illustration"
                className="w-full h-full object-contain pointer-events-none"
                draggable={false}
              />

            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#38bdf8] shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
              <div className="h-60 w-60 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f0f0f] to-[#151515] md:h-72 md:w-72">
                <img
                  src={process.env.PUBLIC_URL + "/avatar.png"}
                  alt="Afrin S portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          {/* ABOUT TEXT */}
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold md:text-3xl">
              The designer behind these pixels
            </h3>

            <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
              I’m <strong>Afrin S</strong>, a final-year B.Tech IT student and UI/UX designer focused on creating interfaces that feel calm, intuitive, and trustworthy.
            </p>

            <div className="mt-6 grid gap-4 text-sm text-gray-200 sm:grid-cols-2 max-w-xl">
              <InfoRow
                bulletColor="#c084fc"
                label="Education"
                value="B.Tech — Information Technology (Final year)"
              />
              <InfoRow
                bulletColor="#a78bfa"
                label="Focus areas"
                value="Interaction design, user journeys, accessibility"
              />
              <InfoRow
                bulletColor="#f97316"
                label="Tools"
                value="Figma · Canva · Balsamiq · Miro"
              />
              <InfoRow
                bulletColor="#22c55e"
                label="Location"
                value="India · Open to remote roles"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={process.env.PUBLIC_URL + "/Resume-UIUX.pdf"} download>
                <AnimatedButton variant="solid">Download CV</AnimatedButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Featured Work</SectionHeading>
          <br /><br />

          <p className="mt-2 max-w-xl text-sm text-gray-400">
            A few projects that represent how I think about onboarding, trust,
            and clarity for everyday users.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {/* FurBaby */}
            <motion.a
              href="https://www.behance.net/gallery/238946415/UIUX-Designer-Portfolio-Afrin-S"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.18 }}
              className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >
              <div className="aspect-video rounded-xl mb-4 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={process.env.PUBLIC_URL + "/furbaby.png"}
                  alt="FurBaby"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="inline-block mb-3 text-[11px] rounded-full bg-white/5 px-3 py-1 text-gray-300 border border-white/10">
                Mobile App · Pet Care
              </span>

              <h4 className="text-xl font-semibold">FurBaby — Pet Care App</h4>
              <p className="mt-2 text-gray-400 text-sm">
                A clean, trustworthy booking flow designed for pet owners.
              </p>

              <span className="mt-4 inline-block text-[#c084fc] text-sm">View case study →</span>
            </motion.a>

            {/* Hexify */}
            <motion.a
              href="https://www.behance.net/gallery/239403731/Hexify-Simplifying-Device-Security-for-Everyday-Users"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.18 }}
              className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur shadow-[0_0_40px_rgba(0,0,0,0.35)]"
            >
              <div className="aspect-video rounded-xl mb-4 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={process.env.PUBLIC_URL + "/hexify.png"}
                  alt="Hexify"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="inline-block mb-3 text-[11px] rounded-full bg-white/5 px-3 py-1 text-gray-300 border border-white/10">
                Dashboard · Cybersecurity
              </span>

              <h4 className="text-xl font-semibold">Hexify — Cybersecurity Dashboard</h4>
              <p className="mt-2 text-gray-400 text-sm">
                A calm, guided dashboard built for non-technical users.
              </p>

              <span className="mt-4 inline-block text-[#c084fc] text-sm">View case study →</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <motion.h3
            className="text-3xl font-bold text-white relative inline-block"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Skills
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[3px] mt-1 bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8] rounded-full"
            />
          </motion.h3>

          {/* SKILLS GRID */}
          <div className="mt-12 flex flex-col gap-10">
            {[
              {
                title: "UX Skills",
                desc: "Core UX foundations & methods.",
                items: [
                  "User Research",
                  "User Journey Mapping",
                  "Information Architecture",
                  "Wireframing",
                  "Interaction Design",
                  "High-Fidelity Prototyping",
                  "Usability Testing",
                ],
              },

              {
                title: "UI Skills",
                desc: "Interface design & visual systems.",
                items: [
                  "Visual Design",
                  "Design Systems",
                  "UI Components",
                  "Responsive Layouts",
                  "Accessibility (WCAG)",
                ],
              },

              {
                title: "Soft Skills",
                desc: "How I collaborate & think.",
                items: [
                  "Communication",
                  "Working with Developers",
                  "Attention to Detail",
                  "Asking Right Questions",
                  "Feedback-Driven Iteration",
                ],
              },

              {
                title: "Technical Skills",
                desc: "Technical awareness supporting my design workflow.",
                items: [
                  "HTML",
                  "CSS",
                  "JavaScript (Basics)",
                  "Python (Basics)",
                  "Prompt Engineering",
                ],
              },
            ].map((block, bIndex) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: bIndex * 0.1 }}
                viewport={{ once: true }}
                className="
                  w-full rounded-3xl 
                  p-8 bg-[rgba(15,15,25,0.7)]
                  backdrop-blur-xl border border-white/5 
                  shadow-[0_0_35px_rgba(123,45,200,0.12)]
                  hover:shadow-[0_0_55px_rgba(140,60,255,0.25)]
                  transition-all duration-500
                "
              >
                <h4 className="text-xl font-semibold text-white">{block.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{block.desc}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {block.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="
                        px-4 py-2 text-xs font-medium text-gray-200
                        rounded-full border border-white/10
                        bg-[rgba(20,20,30,0.6)]
                        backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.3)]
                        hover:shadow-[0_0_16px_rgba(180,80,255,0.4)]
                        hover:border-purple-400/40
                        hover:-translate-y-1
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">

          <SectionHeading>Tools</SectionHeading><br />

          <div className="mt-10 space-y-6">
            {[
              { name: "Figma", img: "/figma.png", level: "90%" },
              { name: "FigJam", img: "/figjam.png", level: "90%" },
              { name: "Canva", img: "/canva.png", level: "90%" },
              { name: "Miro", img: "/miro.png", level: "75%" },
              { name: "Balsamiq", img: "/balsamiq.png", level: "75%" },
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0px 0px 25px rgba(160,110,255,0.25)",
                  borderColor: "rgba(192,132,252,0.35)",
                }}
                className="
                  relative p-5 rounded-2xl 
                  bg-[#0f0f16] border border-white/5
                  transition-all duration-300 overflow-hidden group
                "
              >
                <div className="flex items-center justify-between relative z-10">

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={process.env.PUBLIC_URL + tool.img}
                        alt={tool.name}
                        className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-[1.08]"
                      />

                      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#38bdf8]"></div>
                    </div>

                    <span className="text-sm font-medium text-gray-200">
                      {tool.name}
                    </span>
                  </div>

                  <span className="text-xs text-gray-400 relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gradient-to-r from-[#c084fc] to-[#38bdf8] after:transition-all after:duration-500 group-hover:after:w-full">
                    Proficient
                  </span>
                </div>

                {/* progress bar */}
                <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tool.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="
                      h-1.5 rounded-full
                      bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8]
                      shadow-[0_0_10px_rgba(140,82,255,0.7)]
                    "
                  />

                  <motion.div
                    initial={{ x: "-20%" }}
                    whileInView={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 h-1.5 w-5 rounded-full bg-white/40 blur-md"
                  />
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CERTIFICATES */}
      <section id="certs" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Certificates</SectionHeading>
          <br /><br />

          <p className="mt-2 max-w-xl text-sm text-gray-400">
            Formal learning that supports my practical projects and UX foundations.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Simplilearn — Basics of UI/UX Design",
                tag: "Foundation in UX thinking",
                desc: "Completed core UI/UX foundations including research, wireframing and visual design.",
                img: "/cert-simplilearn.png",
              },
              {
                title: "In-Plant Training — UI/UX Fundamentals",
                tag: "Real project exposure",
                desc: "Hands-on experience designing real user journeys and high-fidelity prototypes.",
                img: "/cert-Inplanttraining.png",
              },
              {
                title: "Prompt Engineering Certification",
                tag: "AI-assisted workflows",
                desc: "Learned structured prompting, context control and optimizing LLM responses.",
                img: "/prompt.png",
              },
              {
                title: "Google AI Essentials",
                tag: "Certified by Google",
                desc: "Built skills in responsible AI use and practical AI-powered workflows.",
                img: "/googleai.png",
              },
              {
                title: "Machine Learning & Data Science",
                tag: "Technical foundation",
                desc: "Fundamentals of ML, DS, supervised/unsupervised learning, and model evaluation.",
                img: "/mlds.png",
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.35)",
                  borderColor: "rgba(192, 132, 252, 0.4)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur border border-white/5 hover:border-[#c084fc]/40 transition-all"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
                  <img
                    src={process.env.PUBLIC_URL + cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="inline-block mb-3 text-[11px] rounded-full bg-white/5 px-3 py-1 text-gray-300 border border-white/10">
                  {cert.tag}
                </span>

                <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                <p className="mt-2 text-gray-400 text-sm line-clamp-4">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL PROJECTS */}
      <section id="tech-projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Technical Projects</SectionHeading>
          <br /><br />

          <p className="text-gray-400 mb-12 max-w-2xl">
            Engineering projects that strengthened my technical reasoning and problem-solving.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Secure Notes App",
                desc: "A privacy-focused notes app with encryption workflows for secure storage.",
                img: "/secure-notes.png",
              },
              {
                title: "Blockchain Medical Record System",
                desc: "A tamper-proof blockchain architecture for secure patient-hospital data exchange.",
                img: "/medrec.png",
              },
              {
                title: "RAG-based Chatbot",
                desc: "Retrieval-Augmented chatbot for accurate, context-aware Q&A responses.",
                img: "/rag.png",
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.35)",
                  borderColor: "rgba(192, 132, 252, 0.4)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur border border-white/5 hover:border-[#c084fc]/40 transition-all"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
                  <img
                    src={process.env.PUBLIC_URL + proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-semibold text-white">{proj.title}</h4>
                <p className="text-gray-400 text-sm mt-2 line-clamp-4">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS / WORKSHOPS */}
      <section id="events" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Workshops & Events</SectionHeading>
          <br /><br />

          <p className="mt-2 max-w-xl text-sm text-gray-400">
            Activities that enriched my learning beyond academics.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Blockchain Workshop",
                tag: "Technical Workshop",
                desc: "Hands-on exposure to hashing, decentralization and smart contract flows.",
              },
              {
                title: "Power BI Workshop",
                tag: "Analytics Workshop",
                desc: "Learned BI dashboards, modelling, visuals and business storytelling.",
              },
              {
                title: "Blockathon Hackathon",
                tag: "Hackathon",
                desc: "24-hour blockchain event building decentralized workflow ideas.",
              },
              {
                title: "Paper Presentation — Sairam Engineering College",
                tag: "Research",
                desc: "Presented research on secure workflow systems at a technical symposium.",
              },
              {
                title: "Paper Presentation — Easwari Engineering College",
                tag: "Research",
                desc: "Presented the same research with expanded methodology and insights.",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 0 35px rgba(168, 85, 247, 0.35)",
                  borderColor: "rgba(192, 132, 252, 0.4)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur border border-white/5 hover:border-[#c084fc]/40 transition-all"
              >
                <span className="inline-block text-[11px] mb-3 rounded-full bg-white/5 px-3 py-1 text-gray-300 border border-white/10">
                  {event.tag}
                </span>

                <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                <p className="mt-2 text-gray-400 text-sm line-clamp-4">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-lg">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative rounded-3xl bg-[#0c0c11]/50 border border-white/5 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(120,65,200,0.25)]"
          >
            <div className="pointer-events-none absolute -top-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#c084fc]/30 blur-3xl" />

            <h3 className="text-center text-3xl font-semibold tracking-tight">
              Let’s Build Something Beautiful
            </h3>

            <p className="mt-2 text-center text-sm text-gray-400 max-w-xs mx-auto">
              Whether it's UI/UX, product thinking or complete flows — I’d love to help.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-[#0b0b12] px-4 py-3 text-sm border border-white/10 text-gray-200 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc]"
              />

              <input
                type="email"
                placeholder="Your Email"
                defaultValue="afrinaishu2004@gmail.com"
                className="w-full rounded-xl bg-[#0b0b12] px-4 py-3 text-sm border border-white/10 text-gray-200 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc]"
              />

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-[#0b0b12] px-4 py-3 text-sm border border-white/10 text-gray-200 focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc]"
              ></textarea>

              <a href="mailto:afrinaishu2004@gmail.com" className="block">
                <AnimatedButton variant="solid" className="w-full py-4 text-base">
                  Send Message
                </AnimatedButton>
              </a>
            </form>

            <p className="mt-5 text-center text-xs text-gray-500">
              Prefer email?{" "}
              <a
                href="mailto:afrinaishu2004@gmail.com"
                className="text-[#c084fc] underline-offset-4 hover:underline"
              >
                afrinaishu2004@gmail.com
              </a>
            </p>
          </motion.div>

          <footer className="mt-10 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Afrin S · UI/UX Designer
          </footer>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------
   REUSABLE COMPONENTS
-------------------------------------*/

function AnimatedButton({ href, as = "a", children, variant = "solid", className = "", ...props }) {
  const Tag = href ? motion.a : motion.button;

  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-transform";

  const variants = {
    solid: "px-6 py-3 bg-gradient-to-r from-[#c084fc] to-[#a78bfa] text-black shadow-lg",
    outline: "px-6 py-3 border border-white/10 text-gray-200 hover:bg-white/5",
    ghost: "px-4 py-2 text-gray-300",
  };

  return (
    <Tag
      {...(href
        ? href.startsWith("#")
          ? { href }
          : { href, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}

function InfoRow({ bulletColor, label, value }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: bulletColor }} />
      <div>
        <div className="text-xs font-medium text-gray-200">{label}</div>
        <div className="text-xs text-gray-400">{value}</div>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight">
      {children}
      <div className="h-[3px] w-20 mt-2 bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8] rounded-full"></div>
    </h2>
  );
}
