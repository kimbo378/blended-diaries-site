import { Mail, Instagram, Music2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-diary-paper">
      {/* Contact Section */}
      <section className="flex-grow py-16 px-6 max-w-4xl mx-auto">
        <h1 className="font-handwritten text-4xl sm:text-5xl text-diary-charcoal mb-6 text-center">
          Let’s Chat 💬
        </h1>
        <p className="text-center text-diary-charcoal/80 mb-12">
          Got questions or just want to say hi? I’ll reply between tea breaks
          and teenage drama.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border-2 border-diary-purple rounded-xl p-6 text-center bg-white/70 backdrop-blur-sm">
            <h3 className="font-handwritten text-2xl text-diary-purple mb-2">
              Readers
            </h3>
            <p className="text-diary-charcoal/80">
              Ask about the books, characters, or what’s coming next.
            </p>
          </div>
          <div className="border-2 border-diary-red rounded-xl p-6 text-center bg-white/70 backdrop-blur-sm">
            <h3 className="font-handwritten text-2xl text-diary-red mb-2">
              Chaos & Questions
            </h3>
            <p className="text-diary-charcoal/80">
              Friendly notes, small collabs, or anything else non-chaotic.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Your message..."
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-diary-purple text-white font-bold rounded-md hover:bg-diary-red transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-diary-charcoal text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-4">
          <p className="text-center text-sm">
            Honest, funny diaries about the beautiful chaos of blended family
            life.
          </p>
          <div className="flex space-x-6">
            <a
              href="mailto:hello@theblendeddiaries.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6 hover:text-diary-red transition" />
            </a>
            <a
              href="https://www.instagram.com/theblendeddiaries"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-diary-purple transition" />
            </a>
            <a
              href="https://www.tiktok.com/@blendeddiaries"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music2 className="w-6 h-6 hover:text-diary-red transition" />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} The Blended Diaries. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
