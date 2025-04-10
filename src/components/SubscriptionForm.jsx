import BlurText from "./BlurText";

function SubscriptionForm({ children, className }) {
  return (
    <BlurText duration={3}>
      <form
        className={className}
        action="https://app.gumroad.com/follow_from_embed_form"
        method="POST"
        target="_blank"
      >
        <input type="hidden" name="seller_id" value="1089014516697" />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
          className="flex-1 w-full sm:w-auto px-5 py-3 rounded-lg shadow-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
      {children}
    </BlurText>
  );
}

export default SubscriptionForm;
