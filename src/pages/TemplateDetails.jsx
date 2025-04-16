import { useParams } from "react-router-dom";
import templates from "../data/templatesData";
import BlurText from "../components/BlurText";

function TemplateDetails() {
  const { templateSlug } = useParams();
  const decodedName = decodeURIComponent(templateSlug);

  const template = templates.find((t) => t.slug === decodedName);

  if (!template) return <div>Template not found.</div>;

  return (
    <BlurText>
      <div className="min-h-screen px-6 md:px-12 lg:px-24 py-6 sm:py-12 flex flex-col lg:flex-row lg:gap-10 gap-5 items-start">
        {/* Image */}
        <img
          src={template.image}
          alt={template.name}
          className="w-full lg:w-7/12 aspect-[4/3] lg:aspect-auto rounded-xl shadow-lg"
        />

        {/* Text & Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">
            {template.name}
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-main">{template.price}</p>
          <p className="text-base md:text-lg text-muted mt-4">
            {template.description}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center mt-8 gap-4">
            <a
              href={template.checkout}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block overflow-hidden px-6 py-3 font-medium text-white bg-black rounded-full group shadow-secondary"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left" />
              <span className="relative block text-lg transform transition-all duration-300 ease-in-out group-hover:text-main">
                CHECKOUT
              </span>
            </a>

            <a
              // href={template.detailsLink}
              onClick={(e) => e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-no-drop overflow-hidden px-6 py-3 font-medium text-white bg-black rounded-full shadow-secondary opacity-50"
            >
              <span className="block text-lg">More Details</span>
            </a>
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default TemplateDetails;
