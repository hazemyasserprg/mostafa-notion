import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Templates = lazy(() => import("./pages/Templates"));
const TemplateDetails = lazy(() => import("./pages/TemplateDetails"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const ContactAffiliates = lazy(() => import("./pages/ContactAffiliates"));
const Affiliates = lazy(() => import("./pages/Affiliates"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const PrivacyPolicyPage = lazy(() => import("./components/PrivacyPolicyPage"));
const TermsAndConditionsPage = lazy(() =>
  import("./components/TermsAndConditionsPage")
);
const NotFound = lazy(() => import("./components/NotFound"));
const ServerError = lazy(() => import("./components/ServerError"));

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow mt-16">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/templates" element={<Templates />} />
              <Route
                path="/templates/:templateSlug"
                element={<TemplateDetails />}
              />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route
                path="/contact-affiliates"
                element={<ContactAffiliates />}
              />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/affiliates" element={<Affiliates />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditionsPage />}
              />
              <Route path="/500" element={<ServerError />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
