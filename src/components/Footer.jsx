import { useEffect, useState } from "react";
import { FilloutSliderEmbed } from "@fillout/react";
import templateOne from "../assets/imgs/youtube/2.webp";
import templateTwo from "../assets/imgs/youtube/1.webp";
import templateThree from "../assets/imgs/youtube/3.webp";
import { RiNotionFill } from "react-icons/ri";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    const footer = document.getElementById("footer");
    if (footer) observer.observe(footer);

    return () => footer && observer.unobserve(footer);
  }, []);

  return (
    <footer
      id="footer"
      className={`transition-all duration-1000 ease-in-out transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-black text-white pt-20 pb-10`}
    >
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section: Logo & Social Media */}
        <div className="space-y-4">
          <div>
            <h4 className="text-main font-semibold text-lg md:text-xl">
              FOLLOW ME
            </h4>
            <div className="w-10 h-1 bg-main rounded-full mt-1"></div>
          </div>

          <div className="w-3 h-3 rounded-full bg-main animate-ping ml-60"></div>

          <div className="flex space-x-5">
            {[
              { icon: BsFacebook, link: "https://facebook.com/engmsyasser" },
              { icon: BsTwitterX, link: "https://x.com/engmsyasser" },
              { icon: BsInstagram, link: "https://instagram.com/engmsyasser" },
              { icon: BsLinkedin, link: "https://linkedin.com/in/engmsyasser" },
              { icon: BsYoutube, link: "https://youtube.com/@engmsyasser" },
              { icon: BsTelegram, link: "https://t.me/engmsyasser" },
            ].map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-main transition duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Center Section: Template Showcase with Video Links */}
        <div className="hidden md:block -ml-6 mr-6">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-2">
            <RiNotionFill className="text-main text-2xl" size={30} />
            <h4 className="text-main font-semibold text-base md:text-lg">
              POPULAR VIDEOS
            </h4>
          </div>

          <div className="space-y-4">
            {[
              {
                img: templateOne,
                video: "https://youtube.com/watch?v=bumkYuAexk0",
                title:
                  "Introduction to Notion: What It Is and Why You Should Use It",
              },
              {
                img: templateThree,
                video: "https://youtube.com/watch?v=tXpGGccqx60",
                title: "Comprehensive Guide to Using Databases in Notion",
              },
              {
                img: templateTwo,
                video: "https://youtube.com/watch?v=JMH2oLmPohw",
                title: "Notion Advanced Tips and Tricks for Productivity",
              },
            ].map(({ img, video, title }, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl border border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-40 aspect-[4/2] overflow-hidden rounded-lg border border-gray-600 group">
                  <img
                    src={img}
                    alt={`Template ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main hover:text-white hover:underline text-xs md:text-sm font-medium flex items-center space-x-1 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 8.64v6.72L15.27 12 10 8.64z" />
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>{title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Subscription & Legal */}
        <div className="space-y-6">
          <div>
            <h4 className="text-main font-semibold text-base mb-4">
              STAY IN THE LOOP
            </h4>
            <form
              action="https://app.gumroad.com/follow_from_embed_form"
              method="POST"
              target="_blank"
              className="flex flex-col sm:flex-row gap-4"
            >
              <input type="hidden" name="seller_id" value="1089014516697" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 rounded-lg bg-white/5 text-white placeholder:text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-main transition"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-main text-black font-semibold rounded-lg hover:bg-transparent hover:text-white border border-main transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="space-x-5">
            <h4 className="text-main font-semibold text-base mb-2">LEGAL</h4>
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-400 hover:text-main transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm text-gray-400 hover:text-main transition"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="space-x-5">
            <h4 className="text-main font-semibold text-base mb-2">
              AFFILIATE & CREATE
            </h4>
            <Link
              to="/affiliates"
              className="text-sm text-gray-400 hover:text-main transition"
            >
              Affiliate Program
            </Link>
            <a
              className="text-sm text-gray-400 hover:text-main transition cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Need a Custom Template?
            </a>
            <FilloutSliderEmbed
              filloutId="6VeTu9jHKhus"
              inheritParameters
              parameters={{ example: "abc" }}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              sliderDirection="right"
            />
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
        <p className="text-center md:text-left">
          © 2025 Mostafa Yasser. All rights reserved.
        </p>
        <p className="text-center md:text-right">
          Developed by{" "}
          <a
            href="https://hazemyasser.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-main transition"
          >
            Hazem Yasser
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
