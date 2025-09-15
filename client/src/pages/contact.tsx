import { Mail, Instagram, Music2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[url('/attached_assets/linedpaper.png')] bg-repeat flex flex-col items-center justify-center py-16 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-diary-red mb-6">Contact Us</h1>

      {/* Page Intro */}
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        Got a question, idea, or just want to say hi? We’d love to hear from
        you.
      </p>

      {/* Email Link */}
      <p className="text-md text-gray-800 mb-10">
        Email us at{" "}
        <a
          href="mailto:hello@theblendeddiaries.com"
          className="text-diary-red font-semibold hover:underline"
        >
          hello@theblendeddiaries.com
        </a>
      </p>

      {/* Social Icons */}
      <div className="flex space-x-8">
        {/* Email Icon */}
        <a
          href="mailto:hello@theblendeddiaries.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-8 h-8 hover:text-diary-red transition" />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/theblendeddiaries"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-8 h-8 hover:text-diary-purple transition" />
        </a>

        {/* TikTok Icon */}
        <a
          href="https://www.tiktok.com/@blendeddiaries"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Music2 className="w-8 h-8 hover:text-diary-red transition" />
        </a>
      </div>
    </div>
  );
}
