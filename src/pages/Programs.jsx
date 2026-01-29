import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdmissionsCTA from "../components/AdmissionsCTA";

export default function Programs() {
  const programs = [
    {
      emoji: "🧸",
      title: "Playgroup",
      age: "1.5 – 2.5 Years",
      desc:
        "A gentle introduction to school life through play, music, stories, and bonding activities that make children feel safe and happy.",
      color: "bg-yellow-100",
    },
    {
      emoji: "🎈",
      title: "Nursery",
      age: "2.5 – 3.5 Years",
      desc:
        "Encourages curiosity, communication, and social interaction through fun activities, rhymes, and creative play.",
      color: "bg-pink-100",
    },
    {
      emoji: "📘",
      title: "LKG",
      age: "3.5 – 4.5 Years",
      desc:
        "Focuses on early literacy, numeracy, creativity, and confidence-building in a joyful learning environment.",
      color: "bg-green-100",
    },
    {
      emoji: "🎓",
      title: "UKG",
      age: "4.5 – 5.5 Years",
      desc:
        "Prepares children for formal schooling with structured learning, problem-solving, and independent thinking.",
      color: "bg-indigo-100",
    },
  ];

  return (
    <>
      {/* TOP BAR + HEADER */}
      <TopBar />
      <Header />

      {/* 🌈 PROGRAMS HERO */}
      <section className="relative py-28 bg-gradient-to-b from-sky-200 to-indigo-200 overflow-hidden">
        <span className="absolute top-16 left-10 text-6xl opacity-70">☁️</span>
        <span className="absolute top-24 right-20 text-5xl opacity-70">☁️</span>
        <span className="absolute bottom-24 right-20 text-5xl opacity-50">🎈</span>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700">
            Our Programs 🎒
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Age-appropriate programs designed to help your child learn,
            play, explore, and grow with confidence.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-green-300 rounded-t-full"></div>
      </section>

      {/* 🎒 PROGRAMS LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-indigo-700">
              Learning Programs 🌈
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Each program is carefully designed to match your child’s
              developmental stage and learning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((p, index) => (
              <div
                key={index}
                className={`${p.color} rounded-[3rem] p-10 shadow-xl hover:-translate-y-2 transition`}
              >
                <div className="text-6xl mb-6">{p.emoji}</div>

                <h3 className="text-3xl font-extrabold text-gray-800 mb-2">
                  {p.title}
                </h3>

                <p className="text-indigo-600 font-semibold mb-4">
                  Age Group: {p.age}
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 CTA */}
      <AdmissionsCTA />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
