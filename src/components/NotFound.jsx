import AnimatedText from "./AnimatedText"; // Assuming you want to use it
import AnimatedWrapper from "./AnimatedWrapper";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-black text-white py-16">
      <div className="text-center px-6">
        {/* Animated Heading */}
        <AnimatedText>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
            404 - Page Not Found
          </h1>
        </AnimatedText>

        {/* Animated Description */}
        <AnimatedWrapper delay={0.5}>
          <p className="text-base sm:text-lg md:text-xl text-main mt-4 max-w-2xl mx-auto px-4 font-light tracking-tight">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
            Let&apos;s get you back on track.
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
            You can also explore our templates and get organized!
          </p>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

export default NotFound;
