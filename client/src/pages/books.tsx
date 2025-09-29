import React from "react";
import taylorCover from "../../assets/taylorcover.png";

export default function Books() {
  return (
    <div className="min-h-screen bg-[url('/attached_assets/linedpaper.png')] bg-repeat">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-handwritten text-center mb-12 text-black">
          The Diaries
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Taylor’s Diary (Available Now) */}
          <div className="relative bg-white shadow-lg rounded-xl p-4 border-2 border-dashed border-purple-400 flex flex-col items-center">
            <a
              href="https://www.amazon.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={taylorCover}
                alt="Taylor's Diary Cover"
                className="h-80 w-auto object-cover rounded-lg shadow-md mx-auto hover:opacity-90 transition"
              />
            </a>
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              Available Now
            </div>
            <h3 className="text-xl font-bold text-center mt-4 text-purple-700">
              <a
                href="https://www.amazon.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Taylor's Diary
              </a>
            </h3>
            <p className="text-center text-gray-600 mt-2">
              The chaos begins — the first diary is here!
            </p>
          </div>

          {/* Caleb’s Diary (Coming Soon) */}
          <div className="relative bg-white shadow-lg rounded-xl p-4 border-2 border-dashed border-orange-400 flex flex-col items-center">
            <div className="h-80 w-auto flex items-center justify-center text-center text-orange-600 font-bold">
              Cover Coming Soon
            </div>
            <h3 className="text-xl font-bold text-center mt-4 text-orange-600">
              Caleb's Diary
            </h3>
            <p className="text-center text-gray-500 mt-2">Coming Soon</p>
          </div>

          {/* Libby’s Diary (Coming Soon) */}
          <div className="relative bg-white shadow-lg rounded-xl p-4 border-2 border-dashed border-pink-400 flex flex-col items-center">
            <div className="h-80 w-auto flex items-center justify-center text-center text-pink-600 font-bold">
              Cover Coming Soon
            </div>
            <h3 className="text-xl font-bold text-center mt-4 text-pink-600">
              Libby's Diary
            </h3>
            <p className="text-center text-gray-500 mt-2">Coming Soon</p>
          </div>

          {/* Pumpkin’s Diary (Coming Soon) */}
          <div className="relative bg-white shadow-lg rounded-xl p-4 border-2 border-dashed border-yellow-400 flex flex-col items-center">
            <div className="h-80 w-auto flex items-center justify-center text-center text-yellow-600 font-bold">
              Cover Coming Soon
            </div>
            <h3 className="text-xl font-bold text-center mt-4 text-yellow-600">
              Pumpkin's Diary
            </h3>
            <p className="text-center text-gray-500 mt-2">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
