import { SiGumroad, SiLemonsqueezy } from "react-icons/si";
import BlurText from "../components/BlurText";

function Affiliates() {
  return (
    <BlurText>
      <div className="min-h-screen py-6 sm:py-12 px-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Become Our Affiliate
          </h1>
          <p className="text-base sm:text-lg text-main mb-8 sm:mb-10">
            Join our affiliate program and start earning today! Choose your
            preferred platform.
          </p>

          {/* Affiliate Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {/* Gumroad Card */}
            <a
              href="https://mostafayasser.gumroad.com/affiliates"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-2xl shadow-pink transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden ease-in-out cursor-pointer hover:shadow-[0_8px_25px_rgba(254,144,231,0.6)]">
                <div className="flex justify-center items-center bg-[#000] text-white p-6">
                  <SiGumroad color="#FE90E7" size={40} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    Gumroad Affiliate
                  </h3>
                  <p className="text-sm sm:text-base mb-6">
                    Join the Gumroad affiliate program to earn commissions on
                    sales made through your referrals.
                  </p>
                  <div className="inline-block px-6 py-2 bg-[#FE90E7] text-white rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
                    Join Now
                  </div>
                </div>
              </div>
            </a>

            {/* Lenom Squeezy Card */}
            <a
              href="https://mostafayasser.lemonsqueezy.com/affiliates" // Replace with the actual link to your Lenom Squeezy affiliate page
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-2xl shadow-yellow transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden ease-in-out cursor-pointer hover:shadow-[0_8px_25px_rgba(255,194,51,0.6)]">
                <div className="flex justify-center items-center bg-[#8A24FF] text-white p-6">
                  <SiLemonsqueezy color="#FFC233" size={40} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    Lenom Squeezy Affiliate
                  </h3>
                  <p className="text-sm sm:text-base mb-6">
                    Join the Lenom Squeezy affiliate program and start earning
                    by promoting their products.
                  </p>

                  <div className="inline-block px-6 py-2 bg-[#FFC233] text-white rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
                    Join Now
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default Affiliates;
