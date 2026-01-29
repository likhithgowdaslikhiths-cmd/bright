export default function Footer() {
  return (
    <footer className="relative bg-indigo-700 text-white overflow-hidden">

      {/* ☁️ Clouds */}
      <span className="absolute top-10 left-10 text-6xl opacity-20">☁️</span>
      <span className="absolute top-16 right-20 text-5xl opacity-20">⭐</span>

      {/* 🌱 Grass Playground */}
      <div className="absolute top-0 left-0 w-full h-24 bg-green-400 rounded-b-[100%]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* 🧸 SCHOOL INFO */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              Bright School 🧸
            </h3>
            <p className="text-indigo-100 leading-relaxed">
              A joyful preschool where little minds learn, play, and grow
              with love, care, and creativity.
            </p>
          </div>

          {/* 🔗 QUICK LINKS */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-indigo-100">
              <li>🏠 Home</li>
              <li>📖 About Us</li>
              <li>🎒 Programs</li>
              <li>⭐ Testimonials</li>
              <li>📞 Contact</li>
            </ul>
          </div>

          {/* 🎨 PROGRAMS */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-indigo-100">
              <li>🧸 Playgroup</li>
              <li>🎈 Nursery</li>
              <li>📘 LKG</li>
              <li>🎓 UKG</li>
            </ul>
          </div>

          {/* 📍 CONTACT */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-indigo-100">
              <li>📍 Bangalore, Karnataka</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ admissions@brightschool.com</li>
            </ul>
          </div>

        </div>

        {/* ⭐ DIVIDER */}
        <div className="my-10 border-t border-indigo-500"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-indigo-200 text-sm">
          © {new Date().getFullYear()} Bright School. Made with 💖 for little learners.
        </div>

      </div>
    </footer>
  );
}
