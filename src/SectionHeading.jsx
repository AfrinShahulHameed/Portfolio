import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SectionHeading({ children }) {
  return (
    <motion.h3
      className="text-3xl font-bold text-white relative inline-block"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[3px] mt-1 bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8] rounded-full"
      />
    </motion.h3>
  );
}
