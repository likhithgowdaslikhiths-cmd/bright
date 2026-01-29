export default function Preloader({ isVisible }) {
  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-gradient-to-br from-yellow-200 via-pink-200 to-indigo-200
        transition-opacity duration-700 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex flex-col items-center gap-6">

        {/* 🧸 Mascot */}
        <Mascot />

        {/* Brand Name */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-700">
          Bright School
        </h2>

        {/* Friendly Text */}
        <p className="text-lg text-gray-700 font-medium">
          Learning is fun here! 🎉
        </p>

      </div>
    </div>
  );
}
function Mascot() {
  return (
    <div className="relative animate-bounce-slow">

      {/* 💬 Speech Bubble */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="relative bg-white px-4 py-2 rounded-2xl shadow-md animate-pop">
          <span className="text-sm font-semibold text-indigo-600">
            Hi friend! 👋
          </span>

          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
        </div>
      </div>

      {/* 🧸 Face */}
      <div className="w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">

        {/* Eyes */}
        <div className="flex gap-6">
          <Eye />
          <Eye />
        </div>
      </div>

      {/* 😊 Smile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-8 border-b-4 border-indigo-700 rounded-b-full"></div>
    </div>
  );
}

function Eye() {
  return (
    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
      <div className="w-3 h-3 bg-indigo-700 rounded-full animate-blink"></div>
    </div>
  );
}
