import { ArrowDown } from "lucide-react";
import { Link } from "wouter";
import { StickyNoteButton } from "@/components/ui/sticky-note-button";

const books = [
  {
    id: "taylors-diary",
    title: "Taylor's Diary",
    description: "Navigating new siblings, new rules, and a whole lot of new normal with trademark sarcasm.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
    amazonUrl: "#",
    etsyUrl: "#",
  },
  {
    id: "calebs-diary",
    title: "Caleb's Diary",
    description: "Seeing the world differently has its perks. Especially when your family gets bigger overnight.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
    amazonUrl: "#",
    etsyUrl: "#",
  },
  {
    id: "libbys-diary",
    title: "Libby's Diary",
    description: "Keeping everyone fed, watered, and mostly alive. Some days that feels like winning.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400",
    amazonUrl: "#",
    etsyUrl: "#",
  },
];

export default function Books() {
  return (
    <div className="lined-paper margin-line">
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-handwritten text-4xl sm:text-5xl text-diary-charcoal mb-4">
              The Diaries
            </h1>
            <p className="text-xl text-diary-charcoal/80 max-w-2xl mx-auto">
              Four perspectives. One chaotic, loving family. Endless laughs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform"
              >
                <img
                  src={book.image}
                  alt={`${book.title} Cover`}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="font-handwritten text-2xl text-diary-charcoal mb-2">
                  {book.title}
                </h3>
                <p className="text-diary-charcoal/80 mb-4">{book.description}</p>
                <div className="flex space-x-3 mb-4">
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StickyNoteButton color="red" className="text-sm px-4 py-2">
                      Amazon
                    </StickyNoteButton>
                  </a>
                  <a
                    href={book.etsyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StickyNoteButton color="purple" className="text-sm px-4 py-2">
                      Etsy
                    </StickyNoteButton>
                  </a>
                </div>
                <Link href={`/books/${book.id}`}>
                  <StickyNoteButton color="yellow" className="text-sm px-4 py-2 w-full">
                    Read More
                  </StickyNoteButton>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <p className="font-handwritten text-2xl text-diary-purple mb-6">
              Start with any diary - they're all connected but standalone!
            </p>
            <Link href="/freebies">
              <StickyNoteButton color="yellow" className="text-xl px-8 py-4">
                Get Free Sample <ArrowDown className="ml-2 doodle-arrow" size={16} />
              </StickyNoteButton>
            </Link>
          </div>
        </div>
        
        {/* Doodles */}
        <div className="absolute top-10 right-10 text-diary-purple text-2xl">
          💬
        </div>
      </section>
    </div>
  );
}
