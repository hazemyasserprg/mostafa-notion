import { Link } from "react-router-dom";
import blogsData from "../data/blogsData";
import BlurText from "../components/BlurText";

function Blogs() {
  return (
    <BlurText>
      <div className="min-h-screen py-12 px-6 mt-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            My Latest Blog Posts
          </h1>
          <p className="text-base sm:text-lg text-main mb-8 sm:mb-10">
            Stay updated with the latest insights and trends I’m sharing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {blogsData.map((blog) => (
              <Link
                to={`/blogs/${blog.slug}`}
                key={blog.id}
                className="rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-2 overflow-hidden ease-in-out hover:shadow-main"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-3">{blog.excerpt}</p>
                  <span className="transition text-main hover:opacity-70">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default Blogs;
