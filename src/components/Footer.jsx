export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <span className="absolute top-20 left-10 text-6xl animate-float">☁️</span>
        <span className="absolute top-32 right-20 text-5xl animate-float-slow">⭐</span>
        <span className="absolute bottom-32 left-16 text-4xl animate-bounce-slow">🎈</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* ONE ROW - 4 GRID COLUMNS - MAP FIRST */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Google Maps - FIRST */}
          <div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-3 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.072989399499!2d77.55239961476636!3d12.921073690778684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzE1LjciTiA3N8KwMzMnOS41IkU!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="180"
                className="rounded-xl w-full border-0 shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bright Star Preschool Location"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">🏠 Home</a></li>
              <li><a href="/about" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">⭐ About</a></li>
              <li><a href="/programs" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">🎒 Programs</a></li>
              <li><a href="/testimonials" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">💬 Testimonials</a></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="/nursery" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">🌼 Nursery</a></li>
              <li><a href="/preschool" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">🌟 Preschool</a></li>
              <li><a href="/lkg" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">📚 LKG</a></li>
              <li><a href="/ukg" className="text-indigo-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2">🎓 UKG</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-300">Contact Info</h4>
            <div className="space-y-4 text-indigo-200 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-2xl mt-1">📍</span>
                <span>213, 7th Main Rd<br/>Poornapragna Housing Society Layout<br/>Bengaluru, Karnataka 560061</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-xl">📞</span>
                <a href="tel:+916364259911" className="hover:translate-x-1 transition-transform font-semibold">+91 63642 59911</a>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-xl">✉️</span>
                <a href="mailto:brightstarpreschool2020@gmail.com" className="hover:translate-x-1 transition-transform font-semibold">brightstarpreschool2020@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-10"></div>

        {/* Compact Copyright Row */} 
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between text-center text-indigo-300 text-xs py-2 border-t border-indigo-800/30">
          <div>
            © 2026 Bright Star Preschool. All rights reserved. Made with ❤️ in Bengaluru
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px]">Design by</span>
            <a 
              href="https://www.worexatechnologies.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-yellow-300 hover:text-yellow-200 hover:underline transition-all duration-300"
            >
              Worexa Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
