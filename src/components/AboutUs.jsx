import { useEffect, useRef, useState } from "react";
import programImage from "../assets/program.jpg";

export default function AboutUs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#efe8ff] py-24 overflow-hidden"
    >
      {/* ✏️ Doodle Icons */}
      <span className="absolute top-20 left-10 text-4xl opacity-30 rotate-12">📏</span>
      <span className="absolute top-24 right-20 text-4xl opacity-30 -rotate-12">🎒</span>
      <span className="absolute bottom-24 right-32 text-3xl opacity-30">🐟</span>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 🧸 IMAGE SIDE */}
          <div
            className={`transition-all duration-700
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Blob background */}
              <div className="absolute inset-0 bg-white rounded-[50%_40%_60%_50%] scale-105"></div>

              {/* Image */}
              <img
                src={programImage}
                alt="Bright Star Preschool classroom"
                className="relative rounded-[50%_40%_60%_50%] object-cover w-full h-[420px]"
              />
            </div>
          </div>

          {/* 📘 CONTENT SIDE */}
          <div
            className={`transition-all duration-700 delay-150
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-4xl font-extrabold text-indigo-700 text-justify">
                Welcome to Bright Star Preschool
              </h2>
              <div className="w-16 h-1 bg-indigo-500 mt-2 rounded-full"></div>
            </div>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
              Bright Star Preschool is a trusted preschool in Bangalore, located in the heart of Banashankari, offering a warm and engaging environment for early learning. Our campus is designed with safe play areas, colorful classrooms, and child-friendly spaces that encourage creativity and confidence.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
              With passionate educators and a balanced curriculum focused on experiential learning, we help children build strong academic and social foundations. At Bright Star Preschool, we nurture young minds with care, ensuring every child grows happy, confident, and ready for the next stage of learning.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <Highlight text="Play-based Learning" emoji="🎨" />
              <Highlight text="Safe & Caring Space" emoji="🛡️" />
              <Highlight text="Trained Educators" emoji="👩‍🏫" />
              <Highlight text="Happy Classrooms" emoji="😊" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Highlight Item ---------- */

function Highlight({ emoji, text }) {
  return (
    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm">
      <span className="text-2xl">{emoji}</span>
      <span className="font-semibold text-gray-700">{text}</span>
    </div>
  );
}
