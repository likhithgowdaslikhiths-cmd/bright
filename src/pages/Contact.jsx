import { useState } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <TopBar />
      <Header />

      {/* 🌈 HERO */}
      <section className="relative py-32 bg-gradient-to-br from-sky-200 via-pink-200 to-indigo-200 overflow-hidden">
        <span className="absolute top-16 left-10 text-6xl opacity-30">☁️</span>
        <span className="absolute top-28 right-20 text-5xl opacity-30">⭐</span>
        <span className="absolute bottom-20 left-24 text-5xl opacity-30">🎈</span>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800">
            Let’s Talk 💬
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We’d love to hear from you and answer all your questions about
            your child’s happy learning journey.
          </p>
        </div>
      </section>

      {/* 📞 CONTACT CARDS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ContactCard
              emoji="📞"
              title="Call Us"
              text="+91 98765 43210"
            />
            <ContactCard
              emoji="📍"
              title="Visit Us"
              text="Bangalore, Karnataka"
            />
            <ContactCard
              emoji="✉️"
              title="Email Us"
              text="admissions@brightschool.com"
            />
          </div>
        </div>
      </section>

      {/* 📝 CONTACT FORM */}
      <section className="py-32 bg-gradient-to-br from-indigo-50 via-sky-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-indigo-700">
              Send Us a Message ✨
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Our team will get back to you as soon as possible
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* 🗺️ MAP PLACEHOLDER */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-6">
            Find Us Here 🗺️
          </h2>

          <div className="w-full h-80 rounded-3xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl font-semibold">
            Google Map Embed Goes Here
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ---------- Contact Card ---------- */
function ContactCard({ emoji, title, text }) {
  return (
    <div className="bg-white rounded-[2.5rem] p-10 shadow-xl text-center hover:-translate-y-2 transition">
      <div className="text-6xl mb-6">{emoji}</div>
      <h3 className="text-2xl font-extrabold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-lg text-gray-700">
        {text}
      </p>
    </div>
  );
}

/* ---------- Contact Form ---------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! We’ll contact you soon 😊");
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[3rem] p-12 shadow-2xl space-y-6"
    >
      <input
        type="text"
        placeholder="Parent Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-6 py-4 rounded-full border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full px-6 py-4 rounded-full border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      <textarea
        rows="4"
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-6 py-4 rounded-3xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-4 rounded-full text-lg font-bold hover:scale-105 transition"
      >
        Send Message 🚀
      </button>
    </form>
  );
}
