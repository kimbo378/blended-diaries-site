import taylorCover from "../../attached_assets/taylorcover.png";

export default function Books() {
  return (
    <div className="bg-diary-paper min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-handwritten text-4xl text-center text-diary-charcoal mb-4">
          The Diaries
        </h1>
        <p className="text-center text-diary-charcoal/70 mb-12">
          Four perspectives. One chaotic, loving family. Endless laughs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Taylor’s Diary */}
          <div className="bg-white shadow-lg rounded-xl p-4 border-2 border-diary-lines">
            <img
              src={taylorCover}
              alt="Taylor's Diary Cover"
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="font-handwritten text-2xl text-diary-red mb-2">
              Taylor&apos;s Diary
            </h3>
            <p className="text-diary-charcoal/80 mb-4">
              Navigating new siblings, new rules, and a whole lot of new normal
              with trademark sarcasm.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="px-4 py-2 bg-diary-red text-white rounded hover:bg-diary-red/80"
              >
                Amazon
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-diary-purple text-white rounded hover:bg-diary-purple/80"
              >
                Etsy
              </a>
            </div>
          </div>

          {/* Caleb’s Diary */}
          <div className="bg-white shadow-lg rounded-xl p-4 border-2 border-diary-lines flex flex-col items-center justify-center text-center">
            <h3 className="font-handwritten text-2xl text-diary-purple mb-2">
              Caleb&apos;s Diary
            </h3>
            <p className="text-diary-charcoal/70">
              Coming Soon — another side of the chaos.
            </p>
          </div>

          {/* Libby’s Diary */}
          <div className="bg-white shadow-lg rounded-xl p-4 border-2 border-diary-lines flex flex-col items-center justify-center text-center">
            <h3 className="font-handwritten text-2xl text-diary-yellow mb-2">
              Libby&apos;s Diary
            </h3>
            <p className="text-diary-charcoal/70">
              Coming Soon — Mum&apos;s take on the madness.
            </p>
          </div>

          {/* Pumpkin’s Diary */}
          <div className="bg-white shadow-lg rounded-xl p-4 border-2 border-diary-lines flex flex-col items-center justify-center text-center">
            <h3 className="font-handwritten text-2xl text-diary-green mb-2">
              Pumpkin&apos;s Diary
            </h3>
            <p className="text-diary-charcoal/70">
              Coming Soon — a dog&apos;s-eye view of family chaos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
