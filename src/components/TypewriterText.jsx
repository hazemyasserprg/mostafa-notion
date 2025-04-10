import { motion } from "framer-motion";

function TypewriterText({ text }) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 0.2,
    },
  };

  const TypewriterText = ({ text }) => (
    <motion.h1 variants={sentence} initial="hidden" animate="visible">
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
        </span>
      ))}
    </motion.h1>
  );

  return <TypewriterText text={text} />;
}

export default TypewriterText;
