import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlurText from "./BlurText";

function GoToTemplatesPageButton({ text }) {
  return (
    <BlurText duration={5.5}>
      <div className="flex justify-center mt-6 sm:mt-10 relative z-10 px-4">
        {/* Glow behind the button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute w-56 sm:w-72 h-20 sm:h-24 blur-2xl bg-gradient-to-br from-white/70 to-transparent rounded-full"
        />

        {/* Wrap Link inside motion.div */}
        <Link to="/templates">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(215, 177, 128, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full 
          bg-black text-white font-medium text-sm sm:text-base relative overflow-hidden 
            transition-all duration-300 cursor-pointer"
          >
            {text}
            <ArrowRight className="ml-1 sm:ml-2" />
            {/* Stroke effect */}
            <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
            {/* Radial light inside button */}
            <div className="absolute left-1/2 top-0 w-32 sm:w-40 h-32 sm:h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl opacity-50 pointer-events-none" />
          </motion.div>
        </Link>
      </div>
    </BlurText>
  );
}

export default GoToTemplatesPageButton;
