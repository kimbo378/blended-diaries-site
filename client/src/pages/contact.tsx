import { MessageCircle } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <div className="lined-paper margin-line">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-handwritten text-4xl text-center text-diary-charcoal mb-12">
            Let's Chat
            <MessageCircle className="inline ml-3 text-diary-purple" size={36} />
          </h1>
          
          <div className="mb-8 text-center">
            <p className="text-lg text-diary-charcoal/80 max-w-2xl mx-auto mb-6">
              Got questions? Want to collaborate? Just fancy a chat about blended family chaos? 
              Drop me a line! I promise to respond between tea breaks and teenage drama.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-diary-yellow/20 p-4 rounded border-2 border-dashed border-diary-yellow transform -rotate-1">
                <h3 className="font-handwritten text-diary-charcoal font-bold">📚 Readers</h3>
                <p className="text-sm text-diary-charcoal/80">Questions about the books or characters</p>
              </div>
              <div className="bg-diary-purple/20 p-4 rounded border-2 border-dashed border-diary-purple transform rotate-1">
                <h3 className="font-handwritten text-diary-charcoal font-bold">📰 Press</h3>
                <p className="text-sm text-diary-charcoal/80">Interviews, reviews, media inquiries</p>
              </div>
              <div className="bg-diary-red/20 p-4 rounded border-2 border-dashed border-diary-red transform -rotate-1">
                <h3 className="font-handwritten text-diary-charcoal font-bold">🤝 Collaboration</h3>
                <p className="text-sm text-diary-charcoal/80">Writing projects, partnerships</p>
              </div>
              <div className="bg-diary-yellow/20 p-4 rounded border-2 border-dashed border-diary-yellow transform rotate-1">
                <h3 className="font-handwritten text-diary-charcoal font-bold">🏫 Schools</h3>
                <p className="text-sm text-diary-charcoal/80">Educational visits, resources</p>
              </div>
            </div>
          </div>
          
          <ContactForm />
          
          {/* Contact info */}
          <div className="mt-12 text-center">
            <div className="bg-diary-cream p-6 rounded-xl border-2 border-dashed border-diary-purple inline-block transform rotate-1">
              <p className="font-handwritten text-diary-charcoal mb-2">
                📧 Prefer email? Drop me a line at:
              </p>
              <a
                href="mailto:hello@theblendeddiaries.com"
                className="text-diary-purple hover:text-diary-red transition-colors font-medium"
              >
                hello@theblendeddiaries.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
