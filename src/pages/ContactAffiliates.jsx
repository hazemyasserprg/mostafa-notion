import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import BlurText from "../components/BlurText";
import { MdEmail } from "react-icons/md";
import { Handshake } from "lucide-react";
import { useState } from "react";
import { FilloutSliderEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import { GrTemplate } from "react-icons/gr";

function ContactAffiliates() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BlurText>
      <div className="min-h-screen py-12 px-6 mt-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let’s Work Together on Your Notion Journey
          </h1>
          <p className="text-base sm:text-lg text-main mb-8 sm:mb-10">
            Feel free to choose an option below to message me, order a custom
            Notion template, or find out how to become an affiliate and start
            earning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-20 max-w-xl sm:max-w-4xl mx-auto">
            {/* Contact Me Button */}
            <a
              href="mailto:contactmostafayasser@gmail.com"
              className="cursor-pointer inline-flex items-center justify-center gap-4 text-main text-lg font-semibold border border-main px-8 py-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#d7b180] to-[#fff] hover:text-black"
            >
              <MdEmail size={28} />
              Contact Me
            </a>

            {/* Affiliates Button */}
            <Link
              to="/affiliates"
              className="cursor-pointer inline-flex items-center justify-center gap-4 text-main text-lg font-semibold border border-main px-8 py-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#d7b180] to-[#fff] hover:text-black"
            >
              <Handshake size={28} />
              Become an Affiliate
            </Link>

            {/* Custom Template */}
            <button
              className="cursor-pointer inline-flex items-center justify-center gap-4 text-main text-lg font-semibold border border-main px-8 py-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#d7b180] to-[#fff] hover:text-black"
              onClick={() => setIsOpen(true)}
            >
              <GrTemplate size={28} />
              Custom Template
            </button>

            <FilloutSliderEmbed
              filloutId="6VeTu9jHKhus"
              inheritParameters
              parameters={{
                example: "abc",
              }}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              sliderDirection="right"
            />
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default ContactAffiliates;
