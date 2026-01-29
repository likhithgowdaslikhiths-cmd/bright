import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
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

  const reasons = [
    {
      emoji: "🛡️",
      title: "Safe & Secure",
      desc: "Child-first safety with caring supervision and secure spaces.",
      color: "from-blue-200 to-blue-100",
    },
    {
      emoji: "👩‍🏫",
      title: "Loving Teachers",
      desc: "Experienced educators who treat every child like family.",
      color: "from-pink-200 to-pink-100",
    },
    {
      emoji: "🎨",
      title: "Play-Based Learning",
      desc: "Learning through fun, creativity, stories, and activities.",
      color: "from-yellow-200 to-yellow-100",
    },
    {
      emoji: "🧠",
      title: "Holistic Growth",
      desc: "Emotional, social, physical, and mental development.",
      color: "from-green-200 to-green-100",
    },
    {
      emoji: "📞",
      title: "Parent Connect",
      desc: "Regular updates and transparent communication.",
      color: "from-purple-200 to-purple-100",
    },
    {
      emoji: "😊",
      title: "Happy Environment",
      desc: "A joyful space where children love coming every day.",
      color: "from-indigo-200 to-indigo-100",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-indigo-50 to-white"
    >
      {/* 🌈 Decorative Waves */}
      <div className="absolute top-0 left-0 w-full h-40 bg-indigo-200 rounded-b-[100%]"></div>

      {/* 🎈 Floating Doodles */}
      <span className="absolute top-24 left-10 text-5xl opacity-30">☁️</span>
      <span className="absolute top-32 right-20 text-4xl opacity-30">⭐</span>
      <span className="absolute bottom-24 left-24 text-4xl opacity-30">🎈</span>
      <span className="absolute bottom-40 right-32 text-4xl opacity-30">💖</span>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
            Why Choose Us 💕
          </h2>
          <p className="mt-5 text-lg text-gray-700 max-w-3xl mx-auto">
            Because your child deserves a safe, joyful, and loving place
            to grow, explore, and shine every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((item, index) => (
            <WhyCard
              key={index}
              {...item}
              visible={visible}
              delay={index * 120}
            />
          ))}
        </div>
      </div>

      {/* 🌱 Grass Base */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-green-300 rounded-t-full"></div>
    </section>
  );
}

/* ---------- Why Card ---------- */

function WhyCard({ emoji, title, desc, color, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        bg-gradient-to-br ${color}
        rounded-[3rem] p-10 shadow-xl
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl
      `}
    >
      <div className="text-6xl mb-6 animate-bounce-slow">
        {emoji}
      </div>

      <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
        {title}
      </h3>

      <p className="text-gray-700 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
