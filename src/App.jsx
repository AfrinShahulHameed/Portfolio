// src/App.jsx
import React from "react";


import SectionHeading from "./SectionHeading";

import { motion } from "framer-motion";


/**
 * Premium dark portfolio (Afrin S — UI/UX Designer)
 * - Hero focused on recruiters
 * - Project & certificate cards now support real images
 * - Elegant glassmorphism + soft gradients
 * - Keeps ALL sections: Home, About, Work, Skills, Certificates, Contact
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
    
    {/* Left */}
    <motion.div
      className="md:col-span-7"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {/* Small badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-200 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Open to internships & full-time roles · UI/UX
      </div>

      {/* Headline (your original text) */}
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

      {/* Subtext */}
      <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
        I’m <strong>Afrin S</strong>, a UI/UX designer focused on creating clean, intuitive and trustworthy digital experiences.
I solve complex problems through clarity, usability and thoughtful visual design.
      </p>

      {/* CTA buttons — no CV button */}
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
    </motion.div>

    {/* Right — Premium Hero Image */}
    <motion.div
      className="md:col-span-5 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#0b0b0d]/80 backdrop-blur-sm shadow-[0_30px_90px_rgba(0,0,0,0.6)] p-6">
        
        {/* Replace hero.png with your image file name */}
        <img
          src="illustration.png"
          alt="UI/UX Illustration"
          className="w-full h-full object-contain pointer-events-none"
          draggable={false}
        />

        {/* Caption */}
        <div className="absolute left-4 bottom-4 rounded-full bg-black/40 px-3 py-1 text-xs text-gray-200 backdrop-blur">
         
        </div>
      </div>
    </motion.div>

  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-3">
          {/* Avatar */}
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
      src="avatar.png"
      alt="Afrin S portrait"
      className="h-full w-full object-cover"
    />
  </div>
</div>

          </motion.div>

          {/* Text */}
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
              I’m <strong>Afrin S</strong>, a B.Tech IT Graduate and UI/UX designer focused on creating interfaces that feel calm, intuitive, and trustworthy. I’m especially drawn to problem spaces where users feel uncertain — such as security, payments, and other high-stakes flows — and I enjoy turning those moments into predictable, confidence-building experiences.
            </p>

            <p className="mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
            <b> My approach is straightforward:</b> understand real user behavior, map the journey with clarity, remove friction, and refine every detail until the product feels effortless. I value clean structure, thoughtful interaction patterns, and visual polish that helps users feel in control rather than overwhelmed.
            </p>

            <div className="mt-6 grid gap-4 text-sm text-gray-200 sm:grid-cols-2 max-w-xl">
              <InfoRow
                bulletColor="#c084fc"
                label="Education"
                value="B.Tech — Information Technology"
              />
              <InfoRow
                bulletColor="#a78bfa"
                label="Focus areas"
                value="Interaction design, user journeys, accessibility, clarity-driven UI"
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

         <div className="mt-8 flex">
  <a
    href={`${process.env.PUBLIC_URL}/Resume-UIUX.pdf`}
    download="Resume-UIUX.pdf"
  >
    <AnimatedButton variant="solid">
      Download CV
    </AnimatedButton>
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
      A collection of projects that demonstrate how I turn unclear problems into structured, predictable and user-friendly experiences.
    </p>

    <div className="mt-10 grid gap-10 md:grid-cols-2">

      {/* FurBaby */}
      <motion.a
        href="https://www.behance.net/gallery/238946415/UIUX-Designer-Portfolio-Afrin-S"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          y: -6,
          scale: 1.02,
          boxShadow: "0 0 40px rgba(168, 85, 247, 0.35)",
          borderColor: "rgba(192, 132, 252, 0.4)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          p-6 rounded-2xl bg-[#111]/80 backdrop-blur
          border border-white/5 
          hover:border-[#c084fc]/40
          transition-all duration-300
        "
      >
        <div className="aspect-video rounded-xl mb-4 overflow-hidden bg-[#1a1a1a]">
          <img src="furbaby.png" alt="FurBaby" className="w-full h-full object-cover" />
        </div>

        <span className="inline-block mb-3 text-[11px] rounded-full bg-white/5 px-3 py-1 text-gray-300 border border-white/10">
          Mobile App · Pet Care
        </span>

        <h4 className="text-xl font-semibold">FurBaby — Pet Care App</h4>
        <p className="mt-2 text-gray-400 text-sm">
          A clean, trustworthy booking flow designed for pet owners and sitters.
        </p>

        <span className="mt-4 inline-block text-[#c084fc] text-sm">View case study →</span>
      </motion.a>

      {/* Hexify */}
      <motion.a
        href="https://www.behance.net/gallery/239403731/Hexify-Simplifying-Device-Security-for-Everyday-Users"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          y: -6,
          scale: 1.02,
          boxShadow: "0 0 40px rgba(168, 85, 247, 0.35)",
          borderColor: "rgba(192, 132, 252, 0.4)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          p-6 rounded-2xl bg-[#111]/80 backdrop-blur
          border border-white/5 
          hover:border-[#c084fc]/40
          transition-all duration-300
        "
      >
        <div className="aspect-video rounded-xl mb-4 overflow-hidden bg-[#1a1a1a]">
          <img src="hexify.png" alt="Hexify" className="w-full h-full object-cover" />
        </div>

        <span className="inline-block mb-3 text-[11px] rounded-full bg-white/5 px-3 py-1 text-gray-300 border border-white/10">
          Dashboard · Cybersecurity
        </span>

        <h4 className="text-xl font-semibold">Hexify — Cybersecurity Dashboard</h4>
        <p className="mt-2 text-gray-400 text-sm">
          A calm, guided dashboard that helps non-technical users feel safe and confident.
        </p>

        <span className="mt-4 inline-block text-[#c084fc] text-sm">View case study →</span>
      </motion.a>

    </div>
  </div>
</section>





{/* SKILLS SECTION */}
<section id="skills" className="px-6 py-16">

  <div className="mx-auto max-w-6xl">

    {/* SECTION TITLE */}
     <motion.h3
      className="text-3xl font-bold text-white relative inline-block"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      Skills
      {/* Animated underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[3px] mt-1 bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8] rounded-full"
      />
    </motion.h3>


    {/* MAIN WRAPPER */}
    <div className="mt-12 flex flex-col gap-10">

      {/* CATEGORY BLOCK REUSABLE FUNCTION */}
      {[
        {
          title: "UX Skills",
          desc: "Core UX foundations & methods.",
          items: [
            "User Research",
            "User Journey Mapping",
            "Information Architecture",
            "Wireframing (Low/Mid Fidelity)",
            "Interaction Design",
            "High-Fidelity Prototyping",
            "Usability Testing",
            "Design Documentation",
          ],
        },
        {
          title: "UI Skills",
          desc: "Interface design & visual systems.",
          items: [
            "Visual Design",
            "Design Systems",
            "UI Components",
            "Responsive Design",
            "Accessibility (WCAG)",
          ],
        },
        {
          title: "Soft & Collaboration Skills",
          desc: "How I communicate and collaborate.",
          items: [
            "Communication",
            "Working with Developers",
            "Explaining Decisions",
            "Attention to Detail",
            "Asking the Right Questions",
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
            "System Thinking",
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
            p-8 
            bg-[rgba(15,15,25,0.7)]
            backdrop-blur-xl
            border border-white/5 
            shadow-[0_0_35px_rgba(123,45,200,0.12)]
            hover:shadow-[0_0_55px_rgba(140,60,255,0.25)]
            transition-all duration-500
          "
        >
          {/* TITLE */}
          <h4 className="text-xl font-semibold text-white">{block.title}</h4>
          <p className="text-sm text-gray-400 mt-1">{block.desc}</p>

          {/* SKILL TAGS */}
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
                  backdrop-blur-md
                  shadow-[0_0_12px_rgba(0,0,0,0.3)]
                  hover:shadow-[0_0_16px_rgba(180,80,255,0.4)]
                  hover:border-purple-400/40
                  hover:-translate-y-1
                  transition-all duration-300
                  cursor-default
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


{/* ⭐ ULTRA PREMIUM TOOLS SECTION */}
<section id="tools" className="px-6 py-16">
  
  <div className="mx-auto max-w-5xl">

    <SectionHeading>Tools</SectionHeading>
    <br/>

    <div className="mt-10 space-y-6">
      {[
        { name: "Figma", img: "figma.png", level: "90%" },
        { name: "FigJam", img: "figjam.png", level: "90%" },
        { name: "Canva", img: "canva.png", level: "90%" },
        { name: "Miro", img: "miro.png", level: "75%" },
        { name: "Balsamiq", img: "balsamiq.png", level: "75%" },
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
            relative
            p-5 rounded-2xl 
            bg-[#0f0f16]
            border border-white/5
            transition-all
            duration-300
            overflow-hidden
            group
          "
        >

          {/* Subtle Glow Edge */}
          <div className="
            absolute inset-0 opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 
            bg-gradient-to-r from-[#c084fc20] via-[#a855f720] to-[#38bdf820]
            pointer-events-none
          "></div>

          <div className="flex items-center justify-between relative z-10">

            {/* Icon + Name */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-[1.08]"
                />

                {/* Glow behind icon */}
                <div className="
                  absolute inset-0 blur-xl opacity-0 
                  group-hover:opacity-40 
                  transition-all duration-500
                  bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#38bdf8]
                "></div>
              </div>

              <span className="text-sm font-medium text-gray-200">
                {tool.name}
              </span>
            </div>

            {/* “Proficient” Badge */}
            <span className="
              text-xs text-gray-400 relative 
              after:content-[''] after:block after:h-[2px] after:w-0
              after:bg-gradient-to-r from-[#c084fc] to-[#38bdf8]
              after:transition-all after:duration-500
              group-hover:after:w-full
            ">
              Proficient
            </span>
          </div>

          {/* Animated Gradient Progress Bar */}
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

            {/* Soft animated glow on bar */}
            <motion.div
              initial={{ x: "-20%" }}
              whileInView={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut"
              }}
              className="
                absolute top-0 h-1.5 w-5 rounded-full 
                bg-white/40 blur-md
              "
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

    <SectionHeading>Certificates</SectionHeading><br></br><br></br>

    <p className="mt-2 max-w-xl text-sm text-gray-400">
      Formal learning that supports my practical projects and UX foundations.
    </p>

    {/* Cards Grid — 3 in a row */}
    <div className="mt-12 grid md:grid-cols-3 gap-10">

      {[
        {
          title: "Coursera — Google UX Design",
          tag: "Professional Certification",
          desc: "Completed professional training in user-centered design, UX research methods, interaction design, and usability evaluation.",
          img: "googleuiux.png",
        },
        {
          title: "Simplilearn — Basics of UI/UX Design",
          tag: "Foundation in UX thinking",
          desc: "Completed core UI/UX foundations including research, wireframing and visual design.",
          img: "cert-simplilearn.png",
        },
        {
          title: "In-Plant Training — UI/UX Fundamentals",
          tag: "Real project exposure",
          desc: "Hands-on experience designing real user journeys and high-fidelity prototypes.",
          img: "cert-Inplanttraining.png",
        },
        {
          title: "Prompt Engineering Certification",
          tag: "AI-assisted workflows",
          desc: "Learned structured prompting, context control and optimizing LLM responses.",
          img: "prompt.png",
        },
        {
          title: "Coursera — Google AI Essentials",
          tag: "Certified by Google",
          desc: "Built skills in responsible AI use and practical AI-powered workflows.",
          img: "googleai.png",
        },
        {
          title: "Machine Learning & Data Science",
          tag: "Technical foundation",
          desc: "Completed foundational training in supervised/unsupervised learning, stats, data handling and model interpretation.",
          img: "mlds.png",
        }
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
          className="
            p-6 rounded-2xl bg-[#111]/80 backdrop-blur
            border border-white/5 
            hover:border-[#c084fc]/40 
            transition-all duration-300
          "
        >
          {/* Image */}
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tag */}
          <span className="inline-block mb-3 text-[11px] rounded-full bg-white/5 px-3 py-1 text-gray-300 border border-white/10">
            {cert.tag}
          </span>

          {/* Title */}
          <h4 className="text-lg font-semibold text-white">
            {cert.title}
          </h4>

          {/* Description with clamp */}
          <p className="mt-2 text-gray-400 text-sm line-clamp-4">
            {cert.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>


{/* TECHNICAL PROJECTS */}
<section id="tech-projects" className="py-16 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}
     <SectionHeading>Technical Projects</SectionHeading><br></br><br></br>

    <p className="text-gray-400 mb-12 max-w-2xl">
      A set of engineering projects that enrich my system thinking and 
      technical problem-solving approach, complementing my UX practices.
    </p>

    {/* 3 Cards in One Row */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD COMPONENT */}
      {[
        {
          title: "Secure Notes App",
          desc: "A privacy-focused notes app with encryption workflows to ensure secure and tamper-proof data storage, built with modern security principles and a clean minimal architecture.",
          img: "secure-notes.png",
        },
        {
          title: "Blockchain Medical Record System",
          desc: "A blockchain-integrated model to store and manage medical records securely. It ensures tamper-proof access control, improves patient–hospital trust, and enhances interoperability across healthcare providers.",
          img: "medrec.png",
        },
        {
          title: "RAG-based Chatbot",
          desc: "A Retrieval-Augmented chatbot designed to deliver accurate, context-aware responses using embeddings and a custom dataset, improving domain-specific conversational precision.",
          img: "rag.png",
        }
      ].map((proj, i) => (
        <motion.div
          key={i}
          whileHover={{
            y: -6,
            scale: 1.02,
            boxShadow: "0 0 40px rgba(168, 85, 247, 0.35)",
            borderColor: "rgba(192, 132, 252, 0.4)"
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            p-6 rounded-2xl bg-[#111]/80 backdrop-blur 
            border border-white/5 
            hover:border-[#c084fc]/40 
            transition-all duration-300
          "
        >
          {/* Image */}
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h4 className="text-lg font-semibold text-white">
            {proj.title}
          </h4>

          {/* Description with clamp */}
          <p className="text-gray-400 text-sm mt-2 line-clamp-4">
            {proj.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>




{/* WORKSHOPS & EVENTS */}
<section id="events" className="px-6 py-16">

  <div className="max-w-6xl mx-auto">

    <SectionHeading>Workshops & Events</SectionHeading><br></br><br></br>

    <p className="mt-2 max-w-xl text-sm text-gray-400">
      Workshops, hackathons and research activities that strengthened my 
      technical thinking and broadened my design perspective.
    </p>

    {/* GRID — 2 per row (md) / 3 per row (lg) */}
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "Blockchain Workshop",
          tag: "Technical Workshop",
          desc: "Hands-on workshop covering decentralization, hashing, smart contracts and secure data flow across on-chain systems.",
        },
        {
          title: "Power BI Workshop",
          tag: "Analytics Workshop",
          desc: "Learned dashboard design, data modelling, business visualisation and analytical storytelling using real datasets.",
        },
        {
          title: "Blockathon Hackathon",
          tag: "Hackathon",
          desc: "Built a functional CGPA Calculator within a 24-hour sprint, focusing on clean logic, accuracy and a user-friendly interface.",
        },
        {
          title: "Research Presentation — Multi-Purpose Robotic Vehicle",
          tag: "Research & Innovation",
          desc: "Presented a robotics research project on a multi-purpose robotic car featuring voice control, Bluetooth control, and obstacle avoidance using embedded systems and real-time logic.",
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
          className="
            p-6 rounded-2xl bg-[#111]/80 backdrop-blur
            border border-white/5 
            hover:border-[#c084fc]/40 
            transition-all duration-300
          "
        >
          {/* TAG */}
          <span className="
            inline-block text-[11px] mb-3 
            rounded-full bg-white/5 px-3 py-1
            text-gray-300 border border-white/10
          ">
            {event.tag}
          </span>

          {/* TITLE */}
          <h4 className="text-lg font-semibold text-white">
            {event.title}
          </h4>

          {/* DESCRIPTION */}
          <p className="mt-2 text-gray-400 text-sm line-clamp-4">
            {event.desc}
          </p>
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
      className="relative rounded-3xl bg-[#0c0c11]/50 border border-white/5 
                 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(120,65,200,0.25)]"
    >

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-8 left-1/2 h-24 w-24 
                      -translate-x-1/2 rounded-full bg-[#c084fc]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 
                      rounded-full bg-[#38bdf8]/20 blur-2xl" />

      {/* Heading */}
      <h3 className="text-center text-3xl font-semibold tracking-tight">
        Let’s Build Something Beautiful
      </h3>

      <p className="mt-2 text-center text-sm text-gray-400 max-w-xs mx-auto">
        Whether it’s UI/UX, onboarding flows or a full product experience — I’d love to help.
      </p>

      {/* FORM USING FORMSPREE */}
      <form 
        action="https://formspree.io/f/mvgerorj"
        method="POST"
        className="mt-8 space-y-5"
      >

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full rounded-xl bg-[#0b0b12] px-4 py-3 text-sm border border-white/10 
                     outline-none text-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.4)]
                     focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc]"
        />

        {/* EMAIL — EMPTY FOR USERS */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full rounded-xl bg-[#0b0b12] px-4 py-3 text-sm border border-white/10 
                     outline-none text-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.4)]
                     focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc]"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="5"
          placeholder="How would you like us to collaborate?"
          required
          className="w-full rounded-xl bg-[#0b0b12] px-4 py-3 text-sm border border-white/10 
                     outline-none text-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.4)]
                     focus:border-[#c084fc] focus:ring-1 focus:ring-[#c084fc]"
        ></textarea>

        {/* SEND BUTTON */}
        <button type="submit" className="w-full">
          <AnimatedButton variant="solid" className="w-full py-4 text-base">
            Send Message
          </AnimatedButton>
        </button>

      </form>
      {/* Email footer */} 
      <p className="mt-5 text-center text-xs text-gray-500">
         Prefer email?{" "} 
         <a href="mailto:afrinaishu2004@gmail.com" className="text-[#c084fc] underline underline-offset-4 hover:text-[#e0b4ff]" > 
          afrinaishu2004@gmail.com </a>
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
    ghost: "px-4 py-2 text-gray-300"
  };

  return (
    <Tag
      {...(href
        ? href.startsWith("#")
          ? { href }                // internal link — don't open new tab
          : { href, target: "_blank", rel: "noopener noreferrer" } // external links only
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

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative inline-block px-1 py-1 text-gray-300 transition hover:text-[#c084fc]"
    >
      <span className="relative text-xs">
        {children}
        <span className="absolute -bottom-1 left-0 block h-[2px] w-0 bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8] transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
}

function FeatureCard({ title, subtitle }) {
  return (
    <motion.div
      className="rounded-2xl border border-white/8 bg-[#090915]/90 p-4 text-xs text-gray-200 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div className="text-[11px] uppercase tracking-wide text-gray-400">
        {title}
      </div>
      <div className="mt-2 text-[13px] leading-relaxed text-gray-200">
        {subtitle}
      </div>
    </motion.div>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-gray-100 backdrop-blur">
      <div className="text-sm font-semibold md:text-base">{value}</div>
      <div className="mt-1 text-[11px] text-gray-400">{label}</div>
    </div>
  );
}

function InfoRow({ bulletColor, label, value }) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-1 h-2 w-2 rounded-full"
        style={{ backgroundColor: bulletColor }}
      />
      <div>
        <div className="text-xs font-medium text-gray-200">{label}</div>
        <div className="text-xs text-gray-400">{value}</div>
      </div>
    </div>
  );
}

/* ProjectCard — uses object-cover to fully fill the thumbnail area.
   Optional `focal` prop controls object-position (e.g. "center top" or "center center").
*/
function ProjectCard({ title, desc, href, img, tag, focal = "center center" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-3xl border border-white/8 bg-[#070711]/90 shadow-[0_20px_70px_rgba(0,0,0,0.85)] backdrop-blur"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {/* Thumbnail area: image absolutely fills this container (no side spaces) */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "13.5rem" }} // adjust to taste (taller for certs)
      >
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: focal }}
          draggable={false}
        />

        {/* subtle dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* tag badge */}
        {tag && (
          <span className="absolute left-4 bottom-4 rounded-full bg-black/65 px-3 py-1 text-[11px] text-gray-100 backdrop-blur">
            {tag}
          </span>
        )}
      </div>

      {/* content */}
      <div className="px-5 pb-5 pt-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-gray-400">{desc}</p>
        <span className="mt-4 inline-flex items-center text-xs font-medium text-[#c084fc]">
          View full case study
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </motion.a>
  );
}

/* CertificateCard — same approach but slightly taller thumbnail by default.
   Use `focal` to shift object-position if the certificate title is at top/bottom.
*/
function CertificateCard({ img, title, desc, highlight, focal = "center center" }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#070711]/90 shadow-[0_20px_70px_rgba(0,0,0,0.85)] backdrop-blur"
    >
      <div className="relative w-full overflow-hidden" style={{ height: "14.5rem" }}>
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: focal }}
          draggable={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {highlight && (
          <span className="absolute left-4 bottom-3 rounded-full bg-black/65 px-3 py-1 text-[11px] text-emerald-300 backdrop-blur">
            {highlight}
          </span>
        )}
      </div>

      <div className="px-5 pb-5 pt-4">
        <h4 className="text-sm font-semibold md:text-base">{title}</h4>
        <p className="mt-2 text-xs text-gray-400 md:text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}
