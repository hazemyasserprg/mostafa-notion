import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lightLogo from "../assets/imgs/logos/lightLogo.webp";
import BlurText from "./BlurText";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const hamburgerRef = useRef(null);

  // Twerking Effect with GSAP
  const tweakingEffect = (index) => {
    gsap.to(linksRef.current[index], {
      scale: 1.1,
      duration: 0.2,
      repeat: 1,
      yoyo: true,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    animateHamburger();
  };

  const animateHamburger = () => {
    gsap.to(hamburgerRef.current, {
      x: menuOpen ? 0 : 100,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  const links = [
    { name: "HOME", to: "/" },
    { name: "TEMPLATES", to: "/templates" },
    { name: "BLOG", to: "/blogs" },
    { name: "CONTACT", to: "/contact-affiliates" },
    { name: "ABOUT ME", to: "/about-me" },
    // You can add more links here as needed
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 p-3">
      <BlurText duration={1}>
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 pl-1">
            <img src={lightLogo} alt="Logo" className="h-6" />
            <span className="hidden sm:block text-xl font-bold">
              MOSTAFA YASSER
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="hover:text-main transition duration-300"
                ref={(el) => (linksRef.current[index] = el)} // Assign the ref dynamically
                onMouseEnter={() => tweakingEffect(index)} // Trigger the effect on hover
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden pr-1">
            <GiHamburgerMenu
              ref={hamburgerRef}
              size={30}
              className="cursor-pointer text-white size-6"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Mobile Menu using GSAP */}
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-screen bg-black backdrop-blur-md z-40 px-6 py-12 overflow-y-auto"
          style={{ transform: "translateX(-100%)" }}
        >
          <div className="flex flex-col items-center space-y-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-2xl font-semibold"
                onClick={toggleMenu}
                ref={(el) => (linksRef.current[index] = el)} // Assign the ref dynamically
                onMouseEnter={() => tweakingEffect(index)} // Trigger the effect on hover
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </BlurText>
    </nav>
  );
}

export default Navbar;
//////////////////
