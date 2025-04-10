import AnimatedText from "../components/AnimatedText";
import TemplatesShowcase from "../components/TemplatesShowcase";
import TypewriterText from "../components/TypewriterText";
import SubscriptionForm from "../components/SubscriptionForm";
import GoToTemplatesPageButton from "../components/GoToTemplatesPageButton";
import AnimatedWrapper from "../components/AnimatedWrapper";

function Home() {
  return (
    <>
      <div className="text-center mt-10">
        <AnimatedText>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-2 font-extrabold leading-tight">
            <TypewriterText
              text={`All-in-One Notion Templates\nto Organize Your Life`}
            />
          </h1>
        </AnimatedText>
        <AnimatedWrapper delay={2.5}>
          <p className="text-base sm:text-lg md:text-xl text-main mt-4 max-w-2xl mx-auto px-4 font-light tracking-tight">
            Simple, powerful tools to help you stay focused, build better
            habits, and get things done—your way.
          </p>
        </AnimatedWrapper>
        <GoToTemplatesPageButton text={"Browse All Templates"} />

        <AnimatedWrapper delay={2.5}>
          <SubscriptionForm
            className={
              "mt-15 w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 px-4 sm:px-6"
            }
          >
            <p className="text-center text-sm sm:text-base mt-4 max-w-md px-4 sm:px-0 mx-auto text-gray-400 font-light tracking-tight leading-relaxed">
              Join <span className="font-medium text-white">500+ readers</span>{" "}
              receiving exclusive Notion tips, productivity tools, and fresh
              inspiration—every single week.
            </p>
          </SubscriptionForm>
        </AnimatedWrapper>
      </div>
      <TemplatesShowcase />
    </>
  );
}

export default Home;
