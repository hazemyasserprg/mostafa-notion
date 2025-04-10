import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TemplateDetails from "./pages/TemplateDetails";
import ScrollToTop from "./components/ScrollToTop";
import ContactAffiliates from "./pages/ContactAffiliates";
import Affiliates from "./pages/Affiliates";
import AboutMe from "./pages/AboutMe";
import BlogDetails from "./pages/BlogDetails";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsAndConditionsPage from "./components/TermsAndConditionsPage";
import NotFound from "./components/NotFound";
import ServerError from "./components/ServerError";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Templates />} />
            <Route
              path="/templates/:templateSlug"
              element={<TemplateDetails />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
            <Route path="/contact-affiliates" element={<ContactAffiliates />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/500" element={<ServerError />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
