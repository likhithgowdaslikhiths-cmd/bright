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
      emoji: "📚",
      title: "Advanced Curriculum & Smart Learning",
      desc: "A thoughtfully designed, research-backed curriculum that builds strong foundations in literacy, numeracy, creativity, and problem-solving.",
      color: "from-blue-200 to-blue-100",
    },
    {
      emoji: "🛡️",
      title: "Safe & Caring Environment",
      desc: "Child-first safety measures, secure spaces, and constant supervision to ensure your little one feels protected and happy.",
      color: "from-green-200 to-green-100",
    },
    {
      emoji: "👩‍🏫",
      title: "Passionate & Experienced Educators",
      desc: "Warm, trained teachers who provide individual attention and nurture every child with patience and encouragement.",
      color: "from-pink-200 to-pink-100",
    },
    {
      emoji: "🎨",
      title: "Play-Based & Holistic Development",
      desc: "Engaging activities, storytelling, and hands-on exploration that support emotional, social, physical, and cognitive growth.",
      color: "from-yellow-200 to-yellow-100",
    },
    {
      emoji: "📞",
      title: "Strong Parent Communication",
      desc: "We maintain regular updates and open communication with parents to ensure continuous support and transparency in your child's learning journey.",
      color: "from-purple-200 to-purple-100",
    },
    {
      emoji: "🎭",
      title: "Creative & Engaging Classrooms",
      desc: "Colorful, activity-based classrooms designed to make early learning fun, interactive, and meaningful for every child.",
      color: "from-indigo-200 to-indigo-100",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 pb-24 overflow-hidden bg-gradient-to-b from-indigo-50 to-white"
    >
      {/* 🎈 Floating Doodles */}
      <span className="absolute top-20 left-8 text-4xl opacity-30">☁️</span>
      <span className="absolute top-24 right-16 text-3xl opacity-30">⭐</span>
      <span className="absolute bottom-20 left-20 text-3xl opacity-30">🎈</span>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Compact Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-3">
            Why Bright Star
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-indigo-600 mb-4">
            Smart & Structured Learning
          </h3>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            A well-structured, research-based curriculum designed to support early literacy, numeracy, creativity, and critical thinking skills.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <WhyCard
              key={index}
              {...item}
              visible={visible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Compact Why Card ---------- */
function WhyCard({ emoji, title, desc, color, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        bg-gradient-to-br ${color}
        rounded-2xl p-8 shadow-lg hover:shadow-xl
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        hover:-translate-y-2 hover:scale-[1.02]
        h-full flex flex-col justify-center
      `}
    >
      <div className="text-5xl mb-4 animate-bounce-slow mx-auto">
        {emoji}
      </div>

      <h4 className="text-xl font-extrabold text-gray-800 mb-3 text-center leading-tight">
        {title}
      </h4>

      <p className="text-gray-700 text-base leading-relaxed text-center text-justify px-2 flex-grow">
        {desc}
      </p>
    </div>
  );
}
