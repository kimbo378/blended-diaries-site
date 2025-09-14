import React from "react";

export default function Books() {
  return (
    <div className="min-h-screen bg-[url('/attached_assets/linedpaper.png')] bg-repeat">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-purple-700">
          The Blended Diaries
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Taylor's Diary (Available Now) */}
          <div className="relative bg-white shadow-lg rounded-xl p-4 border-2 border-dashed border-purple-400 h-96 flex flex-col">
            <img
              src="/attached_assets/taylorcover.png"
              alt="Taylor's Diary Cover"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              Available Now
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-xl font-bold text-center mt-4 text-purple-700">
                Taylor’s Diary
              </h3>
              <p className="text-center text-gray-600 mt-2">
                The chaos begins — the first diary is here!
              </p>
            </div>
          </div>

          {/* Caleb's Diary (Coming Soon) */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-2 border-dashed border-orange-400 h-96 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-center text-orange-600">
              Caleb’s Diary
            </h3>
            <p className="text-center text-gray-500 mt-2">Coming Soon</p>
          </div>

          {/* Libby's Diary (Coming Soon) */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-2 border-dashed border-pink-400 h-96 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-center text-pink-600">
              Libby’s Diary
            </h3>
            <p className="text-center text-gray-500 mt-2">Coming Soon</p>
          </div>

          {/* Pumpkin's Diary (Coming Soon) */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-2 border-dashed border-yellow-400 h-96 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-center text-yellow-600">
              Pumpkin’s Diary
            </h3>
            <p className="text-center text-gray-500 mt-2">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
