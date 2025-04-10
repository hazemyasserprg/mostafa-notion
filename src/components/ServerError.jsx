// src/pages/500Page.jsx
import AnimatedText from "./AnimatedText";
import AnimatedWrapper from "./AnimatedWrapper";
import { Link } from "react-router-dom";

function ServerError() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-black text-white py-16">
      <div className="text-center px-6">
        {/* Animated Heading */}
        <AnimatedText>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
            500 - Server Error
          </h1>
        </AnimatedText>

        {/* Animated Description */}
        <AnimatedWrapper delay={0.5}>
          <p className="text-base sm:text-lg md:text-xl text-main mt-4 max-w-2xl mx-auto px-4 font-light tracking-tight">
            Oops! Something went wrong on our end. Please try again later.
          </p>
        </AnimatedWrapper>

        {/* Button to Home */}
        <AnimatedWrapper delay={1.5}>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-main text-black font-semibold rounded-lg hover:bg-transparent hover:text-white border border-main transition-all duration-300"
          >
            Go Back Home
          </Link>
        </AnimatedWrapper>

        {/* Optional Extra Message */}
        <AnimatedWrapper delay={2}>
          <p className="text-sm sm:text-base mt-6 text-gray-400 font-light tracking-tight">
            We are working on fixing the issue. Please check back later.
          </p>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

export default ServerError;
