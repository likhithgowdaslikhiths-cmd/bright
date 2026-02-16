import {
  FaBookOpen,
  FaPuzzlePiece,
  FaPaintBrush,
  FaMusic,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-100 to-white overflow-hidden">
      
      {/* 🌈 Floating Shapes */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">
        ⭐
      </div>
      <div className="absolute top-32 right-16 text-6xl opacity-20 animate-pulse">
        ☁️
      </div>
      <div className="absolute bottom-10 left-1/3 text-6xl opacity-20 animate-bounce">
        🎈
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🧸 LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
              Where Little Stars <br />
              <span className="text-pink-500">Begin Bright Journeys</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Bright Star Preschool provides a joyful, nurturing start where children grow with confidence and curiosity. We inspire a lifelong love for learning in a safe and caring environment.
            </p>

            {/* CTA Buttons */}
             <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="https://wa.me/916364259911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition inline-block text-center"
              >
                Chat With Us 🏫
              </a>

              <a 
                href="/contact" 
                className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full text-lg hover:bg-indigo-50 transition inline-block text-center"
              >
                Enroll Now 📚
              </a>
            </div>
          </div>

          {/* 🎨 RIGHT CARTOON ICON GRID */}
          <div className="grid grid-cols-2 gap-6">

            <IconCard
              icon={<FaBookOpen />}
              color="bg-yellow-200"
              label="Learning"
            />

            <IconCard
              icon={<FaPuzzlePiece />}
              color="bg-pink-200"
              label="Play"
            />

            <IconCard
              icon={<FaPaintBrush />}
              color="bg-green-200"
              label="Creativity"
            />

            <IconCard
              icon={<FaMusic />}
              color="bg-blue-200"
              label="Music"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cartoon Icon Card ---------- */

function IconCard({ icon, label, color }) {
  return (
    <div
      className={`${color} rounded-3xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition`}
    >
      <div className="text-4xl text-indigo-700 mb-3">
        {icon}
      </div>
      <p className="font-semibold text-gray-800">
        {label}
      </p>
    </div>
  );
}
