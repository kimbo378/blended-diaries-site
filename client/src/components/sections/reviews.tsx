import { Star } from "lucide-react";

const reviews = [
  {
    text: "Finally! A book series that gets how bonkers blended families can be. Messy, funny, real.",
    author: "Sarah, Mum of 3",
    color: "diary-yellow",
  },
  {
    text: "My teens actually laughed out loud. That’s a win in my book!",
    author: "Mark, Dad & Stepdad",
    color: "diary-purple",
  },
  {
    text: "Honest, warm, and wonderfully British. Felt like reading my own diary!",
    author: "Emma, Teacher",
    color: "diary-red",
  },
  {
    text: "Hilarious, heartfelt, and so relatable. My kids kept saying ‘this is literally us!’",
    author: "Jo, Step-mum of 2",
    color: "pink-500", // bright pink for this review
  },
  {
    text: "This series feels like my own diary got published… only way funnier. My teen and I ended up with separate bookmarks because we kept dipping into it at different times.",
    author: "James, Dad & Step dad",
    color: "diary-yellow",
  },
  {
    text: "I thought I'd just skim a few pages but ended up laughing out loud on the train. People were staring but I didn't care.",
    author: "Sophie, Commuter & Step mum",
    color: "diary-purple",
  },
];

export default function Reviews() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-handwritten text-4xl text-center text-diary-charcoal mb-12">
          What Readers Say
          <Star
            className="inline ml-2 text-diary-yellow"
            size={28}
            fill="currentColor"
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-${review.color}/20 p-6 rounded-lg border-2 border-dashed border-${review.color} transform ${
                index % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
            >
              <p className="font-handwritten text-lg text-diary-charcoal mb-4">
                "{review.text}"
              </p>
              <p className="text-sm text-diary-charcoal/70">
                - {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
