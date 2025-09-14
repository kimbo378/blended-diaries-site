import React from "react";
import taylorCover from "../assets/taylorcover.png";
import calebPlaceholder from "../assets/caleb-placeholder.png";
import libbyPlaceholder from "../assets/libby-placeholder.png";
import pumpkinPlaceholder from "../assets/pumpkin-placeholder.png";

export default function Books() {
  return (
    <div className="bg-diary-paper min-h-screen py-12 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-handwritten text-center text-diary-charcoal mb-4">
        The Diaries
      </h1>
      <p className="text-center text-diary-charcoal/80 mb-12">
        Four perspectives. One chaotic, loving family. Endless laughs.
      </p>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Taylor’s Diary */}
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-diary-lines relative">
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
            Available Now
          </span>
          <img
            src={taylorCover}
            alt="Taylor's Diary Cover"
            className="mx-auto rounded-lg shadow-md mb-4"
          />
          <h2 className="text-2xl font-handwritten text-diary-charcoal">
            Taylor’s Diary
          </h2>
          <p className="text-diary-charcoal/70 mb-4">
            The chaos begins — the first diary is here!
          </p>
          <div className="flex justify-center gap-2">
            <a
              href="#"
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Amazon
            </a>
            <a
              href="#"
              className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
            >
              Etsy
            </a>
          </div>
        </div>

        {/* Caleb’s Diary */}
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-diary-lines">
          <img
            src={calebPlaceholder}
            alt="Caleb's Diary Placeholder"
            className="mx-auto rounded-lg shadow-md mb-4 opacity-70"
          />
          <h2 className="text-2xl font-handwritten text-diary-charcoal">
            Caleb’s Diary
          </h2>
          <p className="text-diary-charcoal/70">Coming Soon</p>
        </div>

        {/* Libby’s Diary */}
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-diary-lines">
          <img
            src={libbyPlaceholder}
            alt="Libby's Diary Placeholder"
            className="mx-auto rounded-lg shadow-md mb-4 opacity-70"
          />
          <h2 className="text-2xl font-handwritten text-diary-charcoal">
            Libby’s Diary
          </h2>
          <p className="text-diary-charcoal/70">Coming Soon</p>
        </div>

        {/* Pumpkin’s Diary */}
        <div className="bg-white rounded-xl shadow-lg p-4 text-center border border-diary-lines">
          <img
            src={pumpkinPlaceholder}
            alt="Pumpkin's Diary Placeholder"
            className="mx-auto rounded-lg shadow-md mb-4 opacity-70"
          />
          <h2 className="text-2xl font-handwritten text-diary-charcoal">
            Pumpkin’s Diary
          </h2>
          <p className="text-diary-charcoal/70">Coming Soon</p>
        </div>
      </div>

      {/* Note */}
      <p className="text-center text-sm text-diary-charcoal/60 mt-12">
        Start with any diary — they’re all connected but standalone!
      </p>
    </div>
  );
}
