// SkillsSection.jsx
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SkillsSection() {
  const ux = [
    "User Research",
    "Journey Mapping",
    "Information Architecture",
    "Wireframing (Low/Mid Fidelity)",
    "Interaction Design",
    "High-Fidelity Prototyping",
    "Usability Testing",
    "Design Documentation",
  ];

  const soft = [
    "Clear communication",
    "Explaining design decisions",
    "Working with developers",
    "Attention to detail",
    "Asking the right questions",
    "Iterating based on feedback",
  ];

  const tech = [
    "HTML",
    "CSS",
    "JavaScript (Basics)",
    "Python (Basics)",
    "Prompt Engineering",
    "System Thinking",
  ];

  const tools = [
    { name: "Figma", img: "/figma.png" },
    { name: "FigJam", img: "/figjam.png" },
    { name: "Miro", img: "/miro.png" },
    { name: "Balsamiq", img: "/balsamiq.png" },
    { name: "Canva", img: "/canva.png" },
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold text-white"
        >
          Skills & Tools
        </motion.h3>

        <div className="mt-12 grid gap-12 md:grid-cols-2">

          {/* LEFT SIDE — SKILLS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              p-10 rounded-3xl 
              bg-[rgba(15,15,25,0.55)] 
              backdrop-blur-2xl 
              shadow-[0_0_60px_rgba(130,80,255,0.12)] 
              border border-transparent
              bg-gradient-to-br from-[#0c0c14] to-[#0a0a11]
              relative overflow-hidden
            "
          >

            {/* Soft radial glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(140,82,255,0.25),transparent_40%)]"></div>

            <h4 className="text-xl font-semibold text-white">UX Skills</h4>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {ux.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="
                    px-4 py-3 rounded-xl 
                    bg-[rgba(255,255,255,0.04)] 
                    backdrop-blur-md 
                    text-gray-200 text-sm font-medium 
                    hover:bg-[rgba(255,255,255,0.09)]
                    transition-all duration-300
                    shadow-[0_0_20px_rgba(160,110,255,0.07)]
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <h5 className="mt-10 mb-2 text-sm font-semibold text-gray-300">Soft Skills</h5>
            <div className="flex flex-wrap gap-2">
              {soft.map((tag) => (
                <span
                  key={tag}
                  className="
                    text-xs px-3 py-1.5 rounded-full 
                    bg-[rgba(255,255,255,0.04)] 
                    backdrop-blur 
                    text-gray-300 
                    shadow-[0_0_12px_rgba(140,82,255,0.1)]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tech Awareness */}
            <h5 className="mt-10 mb-2 text-sm font-semibold text-gray-300">Technical Awareness</h5>
            <div className="flex flex-wrap gap-2">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="
                    text-xs px-3 py-1.5 rounded-full 
                    bg-[rgba(255,255,255,0.04)] 
                    text-gray-300 
                    backdrop-blur 
                    shadow-[0_0_12px_rgba(80,180,255,0.07)]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE — TOOLS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              p-10 rounded-3xl 
              bg-[rgba(15,15,25,0.55)]
              backdrop-blur-2xl
              shadow-[0_0_60px_rgba(130,80,255,0.12)]
              bg-gradient-to-br from-[#0c0c14] to-[#0a0a11]
              relative overflow-hidden
            "
          >

            {/* Glow overlay */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_bottom_right,rgba(82,156,255,0.25),transparent_40%)]"></div>

            <h4 className="text-xl font-semibold text-white relative z-10">Tools I Use</h4>
            <p className="mt-1 text-sm text-gray-400 relative z-10">
              Tools I design, collaborate & prototype with.
            </p>

            <div className="mt-8 space-y-5 relative z-10">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="
                    flex items-center gap-4 p-4 rounded-2xl
                    bg-[rgba(255,255,255,0.04)]
                    backdrop-blur-md
                    hover:bg-[rgba(255,255,255,0.08)]
                    transition
                    shadow-[0_0_20px_rgba(120,80,255,0.1)]
                  "
                >
                  <div className="relative h-12 w-12 flex items-center justify-center rounded-xl overflow-hidden">
                    <img src={t.img} alt={t.name} className="h-8 w-8 object-contain relative z-10" />

                    {/* Glow behind icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc] via-[#a855f7] to-[#38bdf8] blur-xl opacity-40"></div>
                  </div>

                  <span className="text-sm text-gray-200 font-medium">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
