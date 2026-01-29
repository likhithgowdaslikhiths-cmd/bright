import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
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

  const reviews = [
    {
      name: "Anitha R.",
      role: "Parent of Nursery Child",
      text: "My child loves going to school every day. The teachers are very caring and the environment feels like a second home.",
      color: "bg-pink-100",
    },
    {
      name: "Ramesh K.",
      role: "Parent of LKG Child",
      text: "Excellent learning approach. I have seen a huge improvement in my child’s confidence and communication.",
      color: "bg-yellow-100",
    },
    {
      name: "Sowmya S.",
      role: "Parent of UKG Child",
      text: "Safe campus, friendly staff, and wonderful activities. I highly recommend this school to all parents.",
      color: "bg-indigo-100",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-pink-50"
    >
      {/* ⭐ Floating Stars */}
      <span className="absolute top-20 left-10 text-4xl opacity-30">⭐</span>
      <span className="absolute top-28 right-20 text-5xl opacity-30">✨</span>
      <span className="absolute bottom-24 left-24 text-4xl opacity-30">⭐</span>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
            What Parents Say ⭐
          </h2>
          <p className="mt-5 text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from parents who trust us with their child’s early learning journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
              visible={visible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonial Card ---------- */

function TestimonialCard({ name, role, text, color, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        ${color}
        rounded-[2.5rem] p-8 shadow-xl
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:-translate-y-2 hover:shadow-2xl
      `}
    >
      {/* Stars */}
      <div className="flex mb-4 text-yellow-400 text-xl">
        ⭐⭐⭐⭐⭐
      </div>

      {/* Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        “{text}”
      </p>

      {/* Parent Info */}
      <div className="flex items-center gap-4">
        <Avatar name={name} />
        <div>
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Avatar ---------- */

function Avatar({ name }) {
  const initial = name.charAt(0);
  return (
    <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
      {initial}
    </div>
  );
}
