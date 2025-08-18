import { Mail, Download } from "lucide-react";
import { Link } from "wouter";
import { StickyNoteButton } from "@/components/ui/sticky-note-button";

export default function About() {
  return (
    <div className="lined-paper margin-line">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h1 className="font-handwritten text-4xl text-diary-charcoal mb-8 text-center">
              About the Author
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="text-lg text-diary-charcoal/80 leading-relaxed mb-6">
                  A rheumatology nurse turned chaos curator, writing honest, funny diaries about blended family life.
                </p>
                <p className="text-diary-charcoal/80 leading-relaxed mb-6">
                  When I'm not untangling medical mysteries or family drama, you'll find me with a cup of tea, 
                  wondering how I ended up with four kids, one dog, and a partner who thinks hoovering is optional.
                </p>
                <p className="text-diary-charcoal/80 leading-relaxed mb-6">
                  These diaries started as a way to process the beautiful chaos of blended family life. 
                  I wrote them late at night, between nursing shifts, when the house was finally quiet and I could 
                  laugh about the day's disasters instead of crying into my tea.
                </p>
                <p className="text-diary-charcoal/80 leading-relaxed mb-8">
                  Turns out, other people found them relatable too. Who knew that our particular brand of organized 
                  chaos would resonate with so many families navigating their own beautiful messes?
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <StickyNoteButton color="purple" className="px-6 py-3">
                      Say Hello <Mail className="ml-2" size={16} />
                    </StickyNoteButton>
                  </Link>
                  <a href="/media-kit.pdf" download>
                    <StickyNoteButton color="red" className="px-6 py-3">
                      Media Kit <Download className="ml-2" size={16} />
                    </StickyNoteButton>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="polaroid">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400"
                    alt="Author portrait"
                    className="w-full h-64 object-cover"
                  />
                  <div className="tape absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-8"></div>
                  <p className="font-handwritten text-center mt-2 text-diary-charcoal">
                    Tea-powered chaos curator
                  </p>
                </div>
              </div>
            </div>

            {/* Fun facts section */}
            <div className="mt-12 pt-8 border-t-2 border-dashed border-diary-purple">
              <h2 className="font-handwritten text-3xl text-diary-charcoal mb-6 text-center">
                Random Author Facts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-diary-yellow/20 p-4 rounded border-2 border-dashed border-diary-yellow transform -rotate-1">
                  <p className="font-handwritten text-diary-charcoal">
                    🍵 Daily tea consumption: Approximately 7 cups (and counting)
                  </p>
                </div>
                <div className="bg-diary-red/20 p-4 rounded border-2 border-dashed border-diary-red transform rotate-1">
                  <p className="font-handwritten text-diary-charcoal">
                    🩺 Can diagnose joint problems but can't fix a wobbly table
                  </p>
                </div>
                <div className="bg-diary-purple/20 p-4 rounded border-2 border-dashed border-diary-purple transform rotate-1">
                  <p className="font-handwritten text-diary-charcoal">
                    📚 Writes books about chaos while living in delightful chaos
                  </p>
                </div>
                <div className="bg-diary-yellow/20 p-4 rounded border-2 border-dashed border-diary-yellow transform -rotate-1">
                  <p className="font-handwritten text-diary-charcoal">
                    🐕 Pumpkin's official human servant and treat dispenser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
