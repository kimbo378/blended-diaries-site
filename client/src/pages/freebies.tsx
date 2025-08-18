import { ArrowRight, ArrowLeft, Gift } from "lucide-react";
import EmailSignup from "@/components/forms/email-signup";

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
            Get a free bonus chapter plus exclusive content delivered to your inbox. 
            No spam, just the good stuff.
          </p>
          
          <EmailSignup />
          
          {/* Additional freebies section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg transform -rotate-1">
              <h3 className="font-handwritten text-2xl text-diary-purple mb-4">
                📖 Free Sample Chapter
              </h3>
              <p className="text-diary-charcoal/80 mb-4">
                Get the first chapter of Taylor's Diary to see if our chaos matches yours.
              </p>
              <p className="text-sm text-diary-charcoal/60">
                Delivered instantly to your inbox!
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg transform rotate-1">
              <h3 className="font-handwritten text-2xl text-diary-red mb-4">
                🎨 Printable Doodle Pages
              </h3>
              <p className="text-diary-charcoal/80 mb-4">
                Diary-style pages for your own chaotic family moments.
              </p>
              <p className="text-sm text-diary-charcoal/60">
                Perfect for journaling or doodling!
              </p>
            </div>
          </div>
          
          {/* Behind the scenes */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-xl border-4 border-dashed border-diary-yellow">
            <h2 className="font-handwritten text-3xl text-diary-charcoal mb-6">
              Behind the Scenes
            </h2>
            <p className="text-diary-charcoal/80 leading-relaxed mb-6">
              Ever wondered how these diaries came to be? Subscribers get exclusive access to the real stories 
              behind the stories, plus updates on new books, family adventures, and the occasional recipe disaster.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-diary-cream p-4 rounded border border-diary-lines">
                <p className="font-handwritten text-diary-purple">✨ Early book previews</p>
              </div>
              <div className="bg-diary-cream p-4 rounded border border-diary-lines">
                <p className="font-handwritten text-diary-red">📝 Writing process insights</p>
              </div>
              <div className="bg-diary-cream p-4 rounded border border-diary-lines">
                <p className="font-handwritten text-diary-yellow">🎭 Real family stories</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Doodle arrows pointing to signup */}
        <div className="absolute left-10 top-1/2 text-diary-yellow text-3xl doodle-arrow transform rotate-45 hidden lg:block">
          <ArrowRight size={32} />
        </div>
        <div className="absolute right-10 top-1/2 text-diary-yellow text-3xl doodle-arrow transform -rotate-45 hidden lg:block">
          <ArrowLeft size={32} />
        </div>
      </section>
    </div>
  );
}
