"use client";

export default function ReviewCard({ review, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="bg-zinc-900 rounded-xl p-6 shadow-lg min-w-[300px] md:min-w-[350px] flex flex-col 
                transition-all duration-300 ease-in-out hover:shadow-xl hover:z-10
                relative overflow-hidden group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-green-700 
                  opacity-0 group-hover:opacity-90 transition-opacity duration-300"
      ></div>

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          
          <div>
            <h3 className="font-semibold text-lg">{review.name}</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300">{review.company}</p>
          </div>
        </div>
        <p className="text-gray-300 group-hover:text-white">{review.text}</p>
      </div>
    </div>
  );
}
