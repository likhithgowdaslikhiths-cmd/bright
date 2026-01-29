import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBook,
  FaGraduationCap,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3">

          {/* 🌈 Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-3xl">🧸</span>
            <span className="text-xl font-extrabold text-indigo-600">
              Bright School
            </span>
          </NavLink>

          {/* 🧭 Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <NavItem to="/" icon={<FaHome />} label="Home" />
            <NavItem to="/programs" icon={<FaBook />} label="Programs" />
            <NavItem to="/admissions" icon={<FaGraduationCap />} label="Admissions" />
            <NavItem to="/contact" icon={<FaPhoneAlt />} label="Contact" />

            <NavLink
              to="/admissions"
              className="ml-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Enquire Now
            </NavLink>
          </nav>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-indigo-600"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* ---------- Desktop Nav Item ---------- */

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 transition
        ${isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`
      }
    >
      <span className="text-indigo-500">{icon}</span>
      {label}
    </NavLink>
  );
}

/* ---------- Mobile Menu ---------- */

function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="bg-white w-72 h-full p-6 relative">

        {/* Close */}
        <button
          className="absolute top-4 right-4 text-xl text-indigo-600"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 mt-12 text-lg font-semibold">
          <MobileItem to="/" icon="🏠" label="Home" onClose={onClose} />
          <MobileItem to="/programs" icon="📘" label="Programs" onClose={onClose} />
          <MobileItem to="/admissions" icon="🎓" label="Admissions" onClose={onClose} />
          <MobileItem to="/contact" icon="📞" label="Contact" onClose={onClose} />

          <NavLink
            to="/admissions"
            onClick={onClose}
            className="mt-6 bg-indigo-600 text-white py-3 rounded-xl text-center"
          >
            Enquire Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile Item ---------- */

function MobileItem({ to, icon, label, onClose }) {
  return (
    <NavLink
      to={to}
      onClick={onClose}
      className="flex items-center gap-3 text-gray-700 hover:text-indigo-600"
    >
      <span className="text-2xl">{icon}</span>
      {label}
    </NavLink>
  );
}
