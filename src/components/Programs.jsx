import { useEffect, useRef, useState } from "react";

export default function Programs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);

  const programs = [
    { id: 0, emoji: "🧸", title: "Playgroup", age: "1.5 – 2.5 Years", color: "bg-yellow-200" },
    { id: 1, emoji: "🎈", title: "Nursery", age: "2.5 – 3.5 Years", color: "bg-pink-200" },
    { id: 2, emoji: "📘", title: "LKG", age: "3.5 – 4.5 Years", color: "bg-green-200" },
    { id: 3, emoji: "🎓", title: "UKG", age: "4.5 – 5.5 Years", color: "bg-blue-200" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-indigo-50"
    >
      {/* 🎈 DOT PATTERN BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div
          className="w-full h-full
          bg-[radial-gradient(circle,#a5b4fc_2px,transparent_2px)]
          bg-[length:36px_36px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🧸 Mascot Pointer */}
        {visible && <Mascot active={active} />}

        {/* Section Heading */}
        <div
          className={`text-center mb-14 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-extrabold text-indigo-700">
            Our Programs 🎒
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Click a program to explore!
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {programs.map((p, index) => (
            <ProgramCard
              key={p.id}
              {...p}
              isActive={active === p.id}
              onClick={() => setActive(p.id)}
              visible={visible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Program Card ---------- */

function ProgramCard({
  emoji,
  title,
  age,
  color,
  isActive,
  onClick,
  visible,
  delay,
}) {
  return (
    <div
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        cursor-pointer ${color}
        rounded-[2.5rem] p-8 shadow-lg
        flex flex-col items-center text-center
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isActive
          ? "ring-4 ring-indigo-500 animate-bounce-slow"
          : "hover:-translate-y-2 hover:shadow-xl"}
      `}
    >
      <div className="text-6xl mb-6">{emoji}</div>

      <h3 className="text-2xl font-extrabold text-gray-800">
        {title}
      </h3>

      <p className="mt-2 text-gray-700 font-medium">
        {age}
      </p>

      <button className="mt-6 bg-white px-6 py-2 rounded-full font-semibold text-indigo-600 hover:bg-indigo-100 transition">
        Learn More →
      </button>
    </div>
  );
}

/* ---------- Mascot Pointer ---------- */

function Mascot({ active }) {
  if (active === null) return null;

  const positions = [
    "left-[8%]",
    "left-[33%]",
    "left-[58%]",
    "left-[83%]",
  ];

  return (
    <div
      className={`hidden lg:block absolute -top-12 ${positions[active]}
      transition-all duration-500`}
    >
      <div className="relative animate-bounce-slow">

        {/* 💬 Bubble */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="relative bg-white px-4 py-2 rounded-2xl shadow">
            <span className="text-sm font-semibold text-indigo-600">
              This one! 👇
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
          </div>
        </div>

        {/* 🧸 Head */}
        <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-2">
            <Eye />
            <Eye />
          </div>
        </div>

        {/* 👉 Pointer */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 text-2xl animate-wave">
          👉
        </div>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center overflow-hidden">
      <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full animate-blink"></div>
    </div>
  );
}
