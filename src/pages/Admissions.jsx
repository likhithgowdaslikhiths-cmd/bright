import { useState } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdmissionsCTA from "../components/AdmissionsCTA";

export default function Admissions() {
  return (
    <>
      <TopBar />
      <Header />

      {/* 🌈 STORY HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-200 via-sky-200 to-pink-200 py-32">
        <span className="absolute top-20 left-10 text-6xl opacity-30">☁️</span>
        <span className="absolute top-32 right-24 text-5xl opacity-30">⭐</span>
        <span className="absolute bottom-24 left-20 text-5xl opacity-30">🎈</span>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800 leading-tight">
            A Beautiful Beginning <br />
            <span className="text-pink-600">Starts Here 🎒</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-700">
            Admissions at Bright School are designed to be simple, joyful,
            and welcoming — just like childhood should be.
          </p>
        </div>
      </section>

      {/* 🧸 STORY FLOW (ISLAND STEPS) */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">
            <h2 className="text-4xl font-extrabold text-indigo-700">
              Your Child’s Journey 🌈
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow the path to a joyful learning experience
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">

            <JourneyCard
              emoji="📝"
              title="Say Hello"
              desc="Share a few details so we can understand your child."
              bg="bg-gradient-to-br from-pink-100 to-pink-50"
            />

            <JourneyCard
              emoji="🏫"
              title="Explore Together"
              desc="Visit the campus, meet teachers, feel the happiness."
              bg="bg-gradient-to-br from-yellow-100 to-yellow-50"
            />

            <JourneyCard
              emoji="🎉"
              title="Begin the Adventure"
              desc="Enroll and watch your child blossom every day."
              bg="bg-gradient-to-br from-indigo-100 to-indigo-50"
            />
          </div>
        </div>
      </section>

      {/* 💖 TRUST BUBBLES */}
      <section className="relative py-28 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
        <span className="absolute top-20 right-20 text-4xl opacity-20">💖</span>
        <span className="absolute bottom-24 left-24 text-4xl opacity-20">✨</span>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-16">
            Why Parents Feel Confident 💕
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            <TrustBubble emoji="🛡️" text="Safe & Secure Campus" />
            <TrustBubble emoji="👩‍🏫" text="Loving Teachers" />
            <TrustBubble emoji="🧠" text="Play-Based Learning" />
            <TrustBubble emoji="😊" text="Happy Environment" />
          </div>
        </div>
      </section>

      {/* ❓ FAQ STORY */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-16">
            Questions Parents Ask ❓
          </h2>

          <div className="space-y-6">
            <FAQ q="Is my child safe at school?" a="Absolutely. Safety is our highest priority with trained staff and secure spaces." />
            <FAQ q="What learning approach do you follow?" a="We use play-based, child-centric learning methods." />
            <FAQ q="What are the school timings?" a="Timings vary by age group and will be shared during enquiry." />
            <FAQ q="How do I start admission?" a="Fill the enquiry form below and we’ll guide you step by step." />
          </div>
        </div>
      </section>

      📝 FRIENDLY FORM
      <section className="py-32 bg-gradient-to-br from-pink-100 via-sky-100 to-indigo-100">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-700">
            Let’s Get Started ✨
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We can’t wait to meet your little one 💛
          </p>
        </div>

       
      </section>
       <AdmissionsCTA />
      <Footer />
    </>
  );
}

/* ---------- Journey Card ---------- */
function JourneyCard({ emoji, title, desc, bg }) {
  return (
    <div className={`${bg} rounded-[3rem] p-12 shadow-xl text-center hover:-translate-y-3 transition`}>
      <div className="text-6xl mb-6">{emoji}</div>
      <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
        {title}
      </h3>
      <p className="text-gray-700 text-lg">
        {desc}
      </p>
    </div>
  );
}

/* ---------- Trust Bubble ---------- */
function TrustBubble({ emoji, text }) {
  return (
    <div className="bg-white rounded-full px-10 py-6 shadow-lg text-center hover:scale-105 transition">
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="font-semibold text-gray-800">
        {text}
      </p>
    </div>
  );
}

/* ---------- FAQ ---------- */
function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-indigo-100 rounded-2xl p-6 cursor-pointer hover:shadow-md transition"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold text-indigo-700">
          {q}
        </h4>
        <span className="text-2xl text-indigo-500">
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}
