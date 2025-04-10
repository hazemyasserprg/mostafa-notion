import { Link } from "react-router-dom";
import templateOne from "../assets/imgs/thumbnails/1.png";
import templateTwo from "../assets/imgs/thumbnails/2.png";
import templateThree from "../assets/imgs/thumbnails/3.png";
import templateFour from "../assets/imgs/thumbnails/4.png";
import templateFive from "../assets/imgs/thumbnails/5.png";
import templateSix from "../assets/imgs/thumbnails/6.png";
import templateSeven from "../assets/imgs/thumbnails/7.png";
import templateEight from "../assets/imgs/thumbnails/8.png";
import templateNine from "../assets/imgs/thumbnails/9.png";
import templateTen from "../assets/imgs/thumbnails/10.png";
import templateEleven from "../assets/imgs/thumbnails/11.png";

import BlurText from "./BlurText";
import FadeInSection from "./FadeInSection";
import GoToTemplatesPageButton from "./GoToTemplatesPageButton";

const templates = {
  lifeChanging: [
    {
      id: 1,
      name: "Quran Tracker Premium",
      slug: "quran-tracker-premium",
      price: "$5",
      image: templateOne,
    },
    {
      id: 2,
      name: "90-Day Challenge Premium",
      slug: "90-day-challenge-premium",
      price: "$3",
      image: templateTwo,
    },
  ],
  moreTemplates: [
    {
      id: 3,
      name: "Ibadat Tracker",
      slug: "ibadat-tracker",
      price: "$0",
      image: templateThree,
    },
    {
      id: 4,
      name: "Quran Tracker",
      slug: "quran-tracker",
      price: "$0",
      image: templateFour,
    },
    {
      id: 5,
      name: "Study Planner",
      slug: "study-planner",
      price: "$0",
      image: templateFive,
    },
  ],
  largeCollection: [
    {
      id: 6,
      name: "Weekly Planner",
      slug: "weekly-planner",
      price: "$0",
      image: templateSix,
    },
    {
      id: 7,
      name: "Habit Tracker",
      slug: "habit-tracker",
      price: "$0",
      image: templateSeven,
    },
    {
      id: 8,
      name: "Reading Tracker",
      slug: "reading-tracker",
      price: "$0",
      image: templateEight,
    },
    {
      id: 9,
      name: "90-Day Challenge",
      slug: "90-day-challenge",
      price: "$0",
      image: templateNine,
    },
    {
      id: 10,
      name: "Quran Memorization",
      slug: "quran-memorization",
      price: "$0",
      image: templateTen,
    },
    {
      id: 11,
      name: "Ramadan Tracker",
      slug: "ramadan-tracker",
      price: "$0",
      image: templateEleven,
    },
  ],
};

function TemplatesShowcase() {
  return (
    <BlurText duration={1}>
      <div className="w-full px-6 py-12 sm:mt-12 mt-18 text-center flex flex-col gap-5 sm:gap-20">
        {/* Life Changing Section */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Unlock Your Potential
            </h2>
            <p className="text-secondary mt-2 text-base sm:text-lg md:text-xl">
              Discover the essential Notion templates that have empowered
              countless creatives to reach new heights.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-8">
            {templates.lifeChanging.map((template) => (
              <Link
                key={template.id}
                to={`/templates/${template.slug}`}
                className="rounded-2xl shadow-lg transition-all duration-300 
              transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden 
                ease-in-out cursor-pointer hover:shadow-main"
              >
                <div className="w-full aspect-[4/3] lg:aspect-auto">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-base sm:text-xl md:text-2xl font-semibold">
                  {template.name}
                </h3>
                <p className="text-main text-base sm:text-lg md:text-xl mb-8">
                  {template.price}
                </p>
              </Link>
            ))}
          </div>
        </FadeInSection>

        {/* More Amazing Templates Section */}
        <div className="mt-4">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Most Popular Templates
            </h2>
            <p className="text-secondary mt-2 text-base sm:text-lg md:text-xl">
              Check out the templates that have revolutionized the way creatives
              work and organize.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {templates.moreTemplates.map((template) => (
              <Link
                key={template.id}
                to={`/templates/${template.slug}`}
                className="rounded-2xl shadow-lg transition-all duration-300 
                transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden 
                ease-in-out cursor-pointer hover:shadow-main"
              >
                <div className="w-full aspect-[4/3] lg:aspect-auto">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-base sm:text-xl md:text-2xl font-semibold">
                  {template.name}
                </h3>
                <p className="text-main text-base sm:text-lg md:text-xl mb-8">
                  {template.price}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Large Template Collection Section */}
        <div className="mt-4">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Discover More Templates
            </h2>
            <p className="text-secondary mt-2 text-base sm:text-lg md:text-xl">
              Explore the Notion templates that have helped creatives improve
              their workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {templates.largeCollection.map((template) => (
              <Link
                key={template.id}
                to={`/templates/${template.slug}`}
                className="rounded-2xl shadow-lg transition-all duration-300 
                transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden 
                ease-in-out cursor-pointer hover:shadow-main"
              >
                <div className="w-full aspect-[4/3] lg:aspect-auto">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-base sm:text-xl md:text-2xl font-semibold">
                  {template.name}
                </h3>
                <p className="text-main text-base sm:text-lg md:text-xl mb-8">
                  {template.price}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <FadeInSection>
          <GoToTemplatesPageButton text={"Show More Templates"} />
        </FadeInSection>
      </div>
    </BlurText>
  );
}

export default TemplatesShowcase;
