import { Gift, Mail, Instagram, Music2 } from "lucide-react";

export default function Freebies() {
  return (
    <div className="bg-gradient-to-b from-diary-cream to-diary-purple/10">
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-handwritten text-4xl sm:text-5xl text-diary-charcoal mb-6">
            Free Goodies
            <Gift className="inline ml-3 text-diary-red" size={40} />
          </h1>
          <p className="text-xl text-diary-charcoal/80 mb-12 max-w-2xl mx-auto">
            Get a free bonus page plus exclusive content delivered to your
            inbox. No spam, just the good stuff.
          </p>

          {/* Email signup form from Kit */}
          <form
            action="https://app.kit.com/forms/8555422/subscriptions"
            method="post"
            target="_blank"
            className="max-w-md mx-auto"
          >
            <input
              type="email"
              name="email_address"
              placeholder="Your email address"
              required
              className="w-full px-4 py-3 rounded mb-4 border border-gray-300"
            />
            <button
              type="submit"
              className="w-full bg-diary-red text-white font-bold py-3 px-6 rounded shadow hover:bg-diary-charcoal transition"
            >
              Send Me the Good Stuff!
            </button>
          </form>

          <p className="text-sm text-diary-charcoal/60 mt-4">
            Unsubscribe anytime. Promise we’re not that clingy.
          </p>
        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center space-x-8">
          <a
            href="mailto:hello@theblendeddiaries.com"
            className="text-diary-charcoal hover:text-diary-red"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://instagram.com/theblendeddiaries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-diary-charcoal hover:text-diary-red"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://tiktok.com/@theblendeddiaries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-diary-charcoal hover:text-diary-red"
          >
            <Music2 size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}
