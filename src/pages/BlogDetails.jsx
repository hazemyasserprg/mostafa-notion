import { useParams } from "react-router-dom";
import blogsData from "../data/blogsData";
import BlurText from "../components/BlurText";

function BlogDetails() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) return <div className="p-6">Blog not found.</div>;

  const renderContentWithLineBreaks = (content) => {
    const paragraphs = content.split("\n");

    return paragraphs.map((para, index) => {
      return <p key={index}>{para}</p>;
    });
  };

  return (
    <BlurText>
      <div className="max-w-7xl mx-auto p-6 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="md:col-span-1 hidden md:block">
            <div className="p-0 border-l-2 border-main pl-6">
              <h2 className="text-xl font-bold text-white mb-6 tracking-tight">
                Table of Contents
              </h2>
              <ul className="space-y-4">
                {blog.topics.map((topic) => (
                  <li key={topic.id} className="flex items-start gap-3 group">
                    {/* Dot */}
                    <div className="w-2 h-2 mt-2 rounded-full bg-main transition-all group-hover:scale-125" />
                    {/* Link */}
                    <a
                      href={`#${topic.id}`}
                      className="text-gray-300 hover:text-main transition-colors duration-300 font-medium"
                    >
                      {topic.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Content */}
          <div className="md:col-span-3">
            {/* Blog Title */}
            <h1 className="sm:text-4xl text-3xl font-bold text-center mb-8">
              {blog.title}
            </h1>

            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full aspect-[4/2] mb-12 rounded-lg shadow-lg object-cover"
            />

            {/* Blog Topics */}
            {blog.topics.map((topic) => (
              <section key={topic.id} id={topic.id} className="mb-16">
                <h3 className="text-2xl font-semibold text-main mb-4">
                  {topic.heading}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {renderContentWithLineBreaks(topic.content)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </BlurText>
  );
}

export default BlogDetails;
