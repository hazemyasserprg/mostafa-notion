import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function FadeInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={ref}
      className="text-center mt-10 sm:mt-14 lg:mt-16"
      initial={{ filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: isVisible ? "blur(0px)" : "blur(10px)" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}

export default FadeInSection;
