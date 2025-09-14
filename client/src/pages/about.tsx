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

            <div className="grid grid-cols-1 gap-8 items-start">
              <div>
                <p className="text-lg text-diary-charcoal/80 leading-relaxed mb-6">
                  Callie Cruse writes about the messy and funny side of modern
                  family life, finding humour in the small moments that often
                  feel the most overwhelming. Her series, The Blended Diaries,
                  explores the ups and downs of families of all shapes and sizes
                  with honesty, warmth and plenty of laughs.
                </p>
                <p className="text-diary-charcoal/80 leading-relaxed mb-6">
                  Outside of writing, Callie works as a nurse and understands
                  how important it is to share stories that help people feel
                  less alone. Family life, with all its chaos and love, inspires
                  much of her work and she hopes her books give readers both
                  comfort and entertainment.
                </p>
                <p className="text-diary-charcoal/80 leading-relaxed mb-6">
                  When she is not working or writing, Callie enjoys spending
                  time with her own family, drinking too much tea and coming up
                  with new ideas for the next diary entry.
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
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
            </div>

            {/* Fun facts section */}
            <div className="mt-12 pt-8 border-t-2 border-dashed border-diary-purple">
              <h2 className="font-handwritten text-3xl text-diary-charcoal mb-6 text-center">
                Random Author Facts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-diary-yellow/20 p-4 rounded border-2 border-dashed border-diary-yellow transform -rotate-1">
                  <p className="font-handwritten text-diary-charcoal">
                    🍵 Daily tea consumption: Approximately 7 cups (and
                    counting)
                  </p>
                </div>
                <div className="bg-diary-red/20 p-4 rounded border-2 border-dashed border-diary-red transform rotate-1">
                  <p className="font-handwritten text-diary-charcoal">
                    🩺 Can diagnose joint problems but cannot fix a wobbly table
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
