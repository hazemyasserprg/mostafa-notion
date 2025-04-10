import { MdEmail } from "react-icons/md";
import aboutImg from "../assets/imgs/mostafa/mostafa.png";
import BlurText from "../components/BlurText";

function AboutMe() {
  return (
    <BlurText>
      <div className="min-h-screen bg-neutral-950 text-white px-6 py-24 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Text Section */}
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="block text-gray-300">Hey, I’m</span>
              <span className="text-main">Mostafa</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed border-l-4 border-main pl-4">
              Engineer. Notion systems builder. Productivity content creator. I
              help teams and individuals master their workflows with scalable
              Notion setups that bring clarity and focus.
            </p>

            <div>
              <a
                href="mailto:contactmostafayasser@gmail.com"
                className="inline-flex items-center gap-3 bg-main text-black font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
              >
                <MdEmail size={22} />
                Let’s Connect
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-main/20 blur-2xl rounded-3xl -z-10 rotate-1"></div>
            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-2xl rounded-3xl overflow-hidden border border-main/20">
              <img
                src={aboutImg}
                alt="Mostafa Yasser"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default AboutMe;
