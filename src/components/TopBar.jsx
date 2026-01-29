import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-yellow-400 text-gray-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* 📞 Left Info */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-indigo-700" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-700" />
            <span>info@brightschool.com</span>
          </div>
        </div>

        {/* 🌈 Right Social */}
        <div className="flex items-center gap-4 ml-auto">
          <SocialIcon icon={<FaFacebookF />} />
          <SocialIcon icon={<FaInstagram />} />
          <SocialIcon icon={<FaYoutube />} />
        </div>

      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-indigo-700 hover:scale-110 transition"
    >
      {icon}
    </a>
  );
}
