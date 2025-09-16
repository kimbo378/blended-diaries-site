import { useParams } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { StickyNoteButton } from "@/components/ui/sticky-note-button";

const bookData: Record<string, any> = {
  "taylors-diary": {
    title: "Taylor's Diary",
    subtitle: "Teen with sarcasm for breakfast. Mum's new girlfriend. New siblings. New mess.",
    description: "Navigating new siblings, new rules, and a whole lot of new normal with trademark sarcasm. Taylor's world gets turned upside down when Mum's new girlfriend moves in with her kids. Between school drama, family chaos, and trying to figure out where she fits in this new reality, Taylor documents it all with her signature wit and brutal honesty.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    quotes: [
      "Day 1: So apparently we're a 'blended family' now. I prefer 'chaos smoothie.'",
      "Day 15: New house rule: No one is allowed to be happy before 9 AM. I'm looking at you, Caleb.",
      "Day 23: Mum asked if I'm adjusting well. I said yes while eating cereal for dinner. She seemed pleased."
    ],
    amazonUrl: "https://www.amazon.co.uk",
    etsyUrl: "#",
  },
  "calebs-diary": {
    title: "Caleb's Diary",
    subtitle: "Same house. Different brain. Deadpan commentary included.",
    description: "Seeing the world differently has its perks. Especially when your family gets bigger overnight. Caleb processes the world in his own unique way, and when Taylor and her mum move in, he observes the beautiful chaos with his characteristic deadpan humor and unexpected insights.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    quotes: [
      "Taylor talks at 147 words per minute. I've calculated this. She doesn't appreciate the data.",
      "Mum says we're 'blending.' Like a smoothie, but with more arguing and less fruit.",
      "I explained the optimal sock-sorting system to Taylor. She called it 'deeply weird.' I prefer 'efficiently organized.'"
    ],
    amazonUrl: "#",
    etsyUrl: "#",
  },
  "libbys-diary": {
    title: "Libby's Diary",
    subtitle: "Mum. Ringmaster. Trying her best. Powered by tea.",
    description: "Keeping everyone fed, watered, and mostly alive. Some days that feels like winning. Libby juggles work as a rheumatology nurse, raising two very different kids, and navigating a new relationship while trying to create a home where everyone feels they belong.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    quotes: [
      "Today's achievements: Everyone ate vegetables. No one died. Found matching socks. Basically parent of the year.",
      "Sarah asked if I'm ready to move in together. I said yes while internally screaming. Love is terrifying.",
      "Caleb organized the medicine cabinet by molecular structure. Taylor reorganized it by 'vibes.' I choose my battles."
    ],
    amazonUrl: "#",
    etsyUrl: "#",
  },
};

export default function BookDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const book = bookData[slug];

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-handwritten text-4xl text-diary-charcoal mb-4">Book Not Found</h1>
          <Link href="/books">
            <StickyNoteButton color="red">Back to Books</StickyNoteButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lined-paper margin-line">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link href="/books" className="inline-flex items-center text-diary-purple hover:text-diary-red transition-colors mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Books
          </Link>

          {/* Book spread layout */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left page - Book cover */}
              <div className="p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="polaroid">
                    <img
                      src={book.image}
                      alt={`${book.title} Cover`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="tape absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-8"></div>
                  </div>
                </a>
              </div>

              {/* Right page - Content */}
              <div className="p-8 lg:p-12 lined-paper bg-diary-cream">
                <h1 className="font-handwritten text-4xl text-diary-charcoal mb-4">
                  {book.title}
                </h1>
                <p className="font-handwritten text-xl text-diary-purple mb-6">
                  {book.subtitle}
                </p>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-diary-charcoal/80 leading-relaxed">
                    {book.description}
                  </p>
                </div>

                {/* Funny quotes styled as handwritten notes */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-handwritten text-2xl text-diary-charcoal">Diary Snippets:</h3>
                  {book.quotes.map((quote: string, index: number) => (
                    <div
                      key={index}
                      className={`bg-diary-yellow/30 p-4 rounded border-2 border-dashed border-diary-yellow transform ${
                        index % 2 === 0 ? "-rotate-1" : "rotate-1"
                      }`}
                    >
                      <p className="font-handwritten text-diary-charcoal italic">"{quote}"</p>
                    </div>
                  ))}
                </div>

                {/* Buy buttons */}
                <div className="space-y-4">
                  <h3 className="font-handwritten text-2xl text-diary-charcoal">Get Your Copy:</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StickyNoteButton color="red" className="px-6 py-3">
                        Amazon KDP <ExternalLink className="ml-2" size={16} />
                      </StickyNoteButton>
                    </a>
                    <a
                      href={book.etsyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StickyNoteButton color="purple" className="px-6 py-3">
                        Etsy Shop <ExternalLink className="ml-2" size={16} />
                      </StickyNoteButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
