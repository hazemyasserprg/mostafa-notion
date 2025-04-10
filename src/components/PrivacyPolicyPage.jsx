function PrivacyPolicyPage() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-black py-16 px-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold text-main mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-4">Effective Date: April 8, 2025</p>

        <h2 className="text-2xl font-semibold text-main mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-400 mb-4">
          Welcome to Mostafa Yasser. This Privacy Policy outlines how we
          collect, use, and protect your personal information. By using our
          website, you agree to the collection and use of information in
          accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold text-main mb-4">
          2. Information We Collect
        </h2>
        <p className="text-gray-400 mb-4">
          We collect the following types of information:
          <ul className="list-none ml-8 text-gray-400">
            <li>Personal Information: Name, email address, etc.</li>
            <li>
              Usage Data: Information about how you interact with our website.
            </li>
            <li>Cookies: We use cookies to enhance user experience.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-main mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-gray-400 mb-4">
          We may use the information we collect for the following purposes:
          <ul className="list-none ml-8 text-gray-400">
            <li>To improve our website and services.</li>
            <li>To send promotional emails and updates.</li>
            <li>To respond to customer support inquiries.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-main mb-4">
          4. Data Security
        </h2>
        <p className="text-gray-400 mb-4">
          We take appropriate measures to protect your personal information, but
          please note that no method of transmission over the internet or method
          of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-main mb-4">
          5. Your Rights
        </h2>
        <p className="text-gray-400 mb-4">
          You have the right to access, correct, and delete your personal
          information. You may also opt out of receiving promotional emails.
        </p>

        <h2 className="text-2xl font-semibold text-main mb-4">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-400 mb-4">
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date.
        </p>

        <h2 className="text-2xl font-semibold text-main mb-4">7. Contact Us</h2>
        <p className="text-gray-400 mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:contactmostafayasser@gmail.com"
            className="text-main hover:text-white"
          >
            contactmostafayasser@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
