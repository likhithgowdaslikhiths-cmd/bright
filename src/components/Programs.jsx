import { useEffect, useRef, useState } from "react";
import programImage from "../assets/program.jpg";

export default function Programs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const programs = [
    {
      id: 1,
      title: "🌼 Nursery (1.5 – 3 Years)",
      desc: "Our Nursery program introduces toddlers to a joyful world of learning through play, music, storytelling, and sensory activities that build social and motor skills.",
      color: "bg-blue-500",
      image: programImage,
    },
    {
      id: 2,
      title: "🌟 Preschool (3 – 4 Years)",
      desc: "In Preschool, children begin structured early learning with fun activities that develop language, basic numeracy, creativity, and confidence.",
      color: "bg-red-500",
      image: programImage,
    },
    {
      id: 3,
      title: "📚 LKG (4 – 5 Years)",
      desc: "The LKG program strengthens foundational skills in reading, writing, and numbers through interactive and play-based learning methods.",
      color: "bg-yellow-500",
      image: programImage,
    },
    {
      id: 4,
      title: "🎓 UKG (5 – 6 Years)",
      desc: "Our UKG program prepares children for primary school with advanced early academics, problem-solving skills, and overall personality development.",
      color: "bg-purple-500",
      image: programImage,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 pb-32 bg-gradient-to-r from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify">
            At Bright Star Preschool, we offer age-appropriate early learning programs designed to support every stage of your child's development in a safe and nurturing environment.
          </p>
        </div>

        {/* ONE ROW - FOUR COLUMNS - Perfectly Justified */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
        }`}>
          {programs.map((program, index) => (
            <FeatureCard
              key={program.id}
              {...program}
              image={program.image}
              visible={visible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Screenshot-Exact Feature Card with Perfect Justification ---------- */
function FeatureCard({ title, desc, color, image, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        ${color} relative overflow-hidden group cursor-pointer h-full min-h-[320px]
        rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500
        hover:scale-[1.02] hover:-translate-y-1
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        flex flex-col
      `}
    >
      {/* Image Section */}
      <div className="relative flex-shrink-0 h-44 lg:h-48 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Content Section - Perfectly Justified */}
      <div className="p-6 flex-1 flex flex-col justify-between text-white relative z-10">
        {/* Title */}
        <h3 className="text-lg lg:text-xl font-black mb-3 leading-tight text-white drop-shadow-2xl">
          {title}
        </h3>
        
        {/* Description - Fully Justified */}
        <p className="text-white/95 text-xs lg:text-sm leading-relaxed flex-grow text-justify hyphens-auto">
          {desc}
        </p>
      </div>

      {/* Bottom Gradient Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-20 bg-gradient-to-t from-blue-100/30 to-transparent pointer-events-none rounded-b-3xl"></div>
    </div>
  );
}
