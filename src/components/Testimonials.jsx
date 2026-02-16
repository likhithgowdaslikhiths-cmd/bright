import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideRef = useRef(null);

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

  // Auto-slide functionality
  useEffect(() => {
    if (visible) {
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      }, 4000);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [visible]);

  const reviews = [
    {
      name: "Sindhu Prakash",
      role: "Bright Star Parent",
      text: "Bright Star Preschool is truly one of the best preschools in Bangalore. My child has become more confident and happy since joining. The teachers are caring, and the learning environment is safe and engaging.",
      color: "bg-pink-100",
    },
    {
      name: "Nagashree", 
      role: "Bright Star Parent",
      text: "We were searching for a good preschool in Bangalore, and choosing Bright Star was the best decision. The curriculum is well-structured, and the staff gives personal attention to every child.",
      color: "bg-yellow-100",
    },
    {
      name: "Likhitha Shetty",
      role: "Bright Star Parent", 
      text: "If you are looking for a safe and nurturing play school, Bright Star Preschool is highly recommended. The activities are fun, and my child enjoys going to school every day.",
      color: "bg-indigo-100",
    },
  ];

  const currentReview = reviews[currentSlide];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-b from-sky-200 to-indigo-200"
    >
      {/* ⭐ Floating Stars */}
      <span className="absolute top-20 left-10 text-4xl opacity-30">⭐</span>
      <span className="absolute top-28 right-20 text-5xl opacity-30">✨</span>
      <span className="absolute bottom-24 left-24 text-4xl opacity-30">⭐</span>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
            What Parents Say ⭐
          </h2>
          <p className="mt-5 text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from parents who trust us with their child's early learning journey.
          </p>
        </div>

        {/* Single Slider Container */}
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          {/* Current Testimonial Card */}
          <TestimonialCardSlider
            {...currentReview}
            visible={visible}
            className="max-w-full"
          />

          {/* Slider Controls */}
          <div className="flex gap-3 mt-12">
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-indigo-500 scale-125 shadow-md"
                      : "bg-gray-300 hover:bg-indigo-400 hover:scale-110"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2 ml-6">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % reviews.length)}
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:border-indigo-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonial Card for Slider ---------- */
function TestimonialCardSlider({ name, role, text, color, visible, className = "" }) {
  return (
    <div
      className={`
        ${color} ${className}
        rounded-[2.5rem] p-8 shadow-xl relative
        transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        max-w-full mx-auto
      `}
    >
      {/* Stars */}
      <div className="flex mb-6 text-yellow-400 text-xl justify-center">
        ⭐⭐⭐⭐⭐
      </div>

      {/* Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium text-center">
        "{text}"
      </p>

      {/* Parent Info */}
      <div className="flex items-center justify-center gap-4">
        <Avatar name={name} />
        <div className="text-center">
          <p className="font-bold text-gray-800 text-lg">{name}</p>
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
    <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
      {initial}
    </div>
  );
}
