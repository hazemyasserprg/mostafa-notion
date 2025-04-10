import { useState } from "react";
import templates from "../data/templatesData";
import BlurText from "../components/BlurText";
import { Link } from "react-router-dom";

const categories = ["All", "Productivity", "Education", "Islam"];

function Templates() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <BlurText>
      <div className="w-full px-6 py-12 mt-12">
        {/* All Templates Section */}
        <section className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            My Latest Creations
          </h1>
          <p className="text-base sm:text-lg text-main mb-8 sm:mb-10">
            Stay inspired and explore the newest projects and ideas I&apos;ve
            been working on.
          </p>

          {/* Filters */}
          {/* Search */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <input
              type="text"
              placeholder="Search templates..."
              className="w-18 px-4 py-2 bg-transparent shadow-search cursor-pointer rounded-full
                hover:placeholder-gray-100 focus:cursor-text text-white placeholder-gray-400 focus:placeholder-gray-100
                focus:outline-none focus:ring-2 focus:ring-main transition-all duration-300 ease-in-out focus:w-64 hover:scale-105 hover:shadow-main"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Buttons */}
          <div className="my-6 flex items-center justify-center">
            {/* Scrollable container for categories */}
            <div className="overflow-x-auto py-2 scrollbar-container">
              <div className="flex gap-2 justify-start">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer px-4 py-2 rounded-xl border transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-main text-white border-main"
                        : "bg-black text-main border-gray-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredTemplates.map((template) => (
              <Link
                key={template.id}
                to={`/templates/${template.slug}`}
                className="rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden ease-in-out cursor-pointer hover:shadow-main"
              >
                <div className="w-full aspect-[4/3] lg:aspect-auto">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold sm:text-lg md:text-xl">
                  {template.name}
                </h3>
                <p className="text-main text-base mb-4 sm:text-lg md:text-xl">
                  {template.price}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </BlurText>
  );
}

export default Templates;
