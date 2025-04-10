import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top every time the route changes
    window.scrollTo(0, 0);
  }, [location]); // This runs every time the location (route) changes

  return null; // This component does not render anything
};

export default ScrollToTop;
