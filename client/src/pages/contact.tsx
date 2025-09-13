import { MessageCircle } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <div className="lined-paper margin-line">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="font-handwritten text-4xl text-center text-diary-charcoal mb-12">
            Let's Chat
            <MessageCircle className="inline ml-3 text-diary-purple" size={36} />
          </h1>

          {/* Short + friendly intro */}
          <div className="mb-10 text-center">
            <p className="text-lg text-diary-charcoal/80 max-w-2xl mx-auto">
              Got questions or just want to say hi? I’ll reply between tea breaks and teenage drama.
            </p>
          </div>

          {/* Two simple “sticky” notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-diary-yellow/20 p-4 rounded border-2 border-dashed border-diary-yellow transform -rotate-1">
              <h3 className="font-handwritten text-diary-charcoal font-bold">📚 Readers</h3>
              <p className="text-sm text-diary-charcoal/80">
                Ask about the books, characters, or what’s coming next.
              </p>
            </div>
            <div className="bg-diary-purple/20 p-4 rounded border-2 border-dashed border-diary-purple transform rotate-1">
              <h3 className="font-handwritten text-diary-charcoal font-bold">🤝 General & Collabs</h3>
              <p className="text-sm text-diary-charcoal/80">
                Friendly notes, small partnerships, or anything else non-chaotic.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
