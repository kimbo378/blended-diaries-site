import React from "react";
import taylorCover from "../assets/taylorcover.png"; // Taylor's image

export default function Books() {
  return (
    <div className="bg-diary-paper min-h-screen py-12 px-6">
      <h1 className="text-4xl font-handwritten text-center text-diary-charcoal mb-4">
        The Diaries
      </h1>
      <p className="text-center text-lg text-diary-charcoal/80 mb-12">
        Four perspectives. One chaotic, loving family. Endless laughs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Taylor's Diary */}
        <div className="bg-white rounded-xl shadow-lg border border-diary-pink p-4 flex flex-col items-center">
          <img
            src={taylorCover}
            alt="Taylor's Diary Cover"
            className="rounded-md shadow-md mb-4"
          />
          <h2 className="text-2xl font-handwritten text-diary-red mb-2">
            Taylor’s Diary
          </h2>
          <p className="text-diary-charcoal/80 text-center mb-4">
            The chaos begins — the first diary is here!
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-diary-red text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Amazon
            </a>
            <a
              href="#"
              className="bg-diary-purple text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Etsy
            </a>
          </div>
        </div>

        {/* Caleb's Diary */}
        <div className="bg-white rounded-xl shadow-lg border border-diary-yellow p-4 flex flex-col items-center">
          <div className="w-full h-48 flex items-center justify-center bg-diary-paper border-2 border-diary-yellow rounded mb-4">
            <span className="text-diary-yellow font-handwritten text-lg">
              Caleb’s Diary <br /> Coming Soon
            </span>
          </div>
          <h2 className="text-2xl font-handwritten text-diary-yellow mb-2">
            Caleb’s Diary
          </h2>
          <p className="text-diary-charcoal/80 text-center">
            Another side of the chaos.
          </p>
        </div>

        {/* Libby's Diary */}
        <div className="bg-white rounded-xl shadow-lg border border-diary-purple p-4 flex flex-col items-center">
          <div className="w-full h-48 flex items-center justify-center bg-diary-paper border-2 border-diary-purple rounded mb-4">
            <span className="text-diary-purple font-handwritten text-lg">
              Libby’s Diary <br /> Coming Soon
            </span>
          </div>
          <h2 className="text-2xl font-handwritten text-diary-purple mb-2">
            Libby’s Diary
          </h2>
          <p className="text-diary-charcoal/80 text-center">
            Mum’s take on the madness.
          </p>
        </div>

        {/* Pumpkin's Diary */}
        <div className="bg-white rounded-xl shadow-lg border border-diary-red p-4 flex flex-col items-center">
          <div className="w-full h-48 flex items-center justify-center bg-diary-paper border-2 border-diary-red rounded mb-4">
            <span className="text-diary-red font-handwritten text-lg">
              Pumpkin’s Diary <br /> Coming Soon
            </span>
          </div>
          <h2 className="text-2xl font-handwritten text-diary-red mb-2">
            Pumpkin’s Diary
          </h2>
          <p className="text-diary-charcoal/80 text-center">
            The family dog’s grumpy perspective.
          </p>
        </div>
      </div>
    </div>
  );
}
