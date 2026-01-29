import { useState } from "react";

export default function AdmissionsCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Parent name is required";
    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.program) newErrors.program = "Please select a program";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    // simulate success
    setSuccess(true);
    setForm({ name: "", phone: "", email: "", program: "" });

    setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <section className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-b from-sky-200 to-indigo-200">

      {/* ☁️ Clouds */}
      <span className="absolute top-16 left-10 text-6xl md:text-7xl opacity-70 animate-float">☁️</span>
      <span className="absolute top-28 right-10 md:right-20 text-5xl md:text-6xl opacity-70 animate-float-slow">☁️</span>

      {/* 🎈 Balloon */}
      <span className="absolute bottom-44 right-10 md:right-20 text-4xl md:text-5xl opacity-50 animate-bounce-slow">🎈</span>

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="bg-white/90 backdrop-blur rounded-[2.5rem] shadow-2xl p-8 md:p-16 grid md:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-700 mb-6 leading-tight">
              Admissions Open 🎒 <br />
              <span className="text-pink-500">Let’s Learn & Play!</span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-6">
              A joyful preschool where little explorers learn, play,
              laugh, and grow every single day.
            </p>

           <div className="grid grid-cols-2 gap-4 text-gray-900 font-semibold">
  <Feature emoji="🧸" text="Loving Care" />
  <Feature emoji="🎨" text="Creative Learning" />
  <Feature emoji="🛝" text="Safe Play Area" />
  <Feature emoji="📚" text="Early Education" />
</div>


            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-pink-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Enquire Now 📞
              </button>

              <button className="w-full sm:w-auto bg-indigo-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Book a Visit 🏫
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full bg-indigo-50 rounded-3xl p-8 shadow-inner">

            {success ? (
              <div className="text-center py-16 animate-bounce">
                <div className="text-6xl mb-4">🎉🎉🎉</div>
                <h3 className="text-2xl font-extrabold text-indigo-700 mb-2">
                  Enquiry Submitted!
                </h3>
                <p className="text-gray-700">
                  Our team will contact you shortly 😊
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-extrabold text-indigo-700 mb-6 text-center">
                  Admission Enquiry ✨
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Parent Name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    error={errors.name}
                  />

                  <Input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    error={errors.phone}
                  />

                  <Input
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    error={errors.email}
                  />

                  <select
                    value={form.program}
                    onChange={(e) =>
                      setForm({ ...form, program: e.target.value })
                    }
                    className={`w-full px-5 py-3 rounded-full border
                    ${errors.program ? "border-red-400" : "border-indigo-200"}
                    focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  >
                    <option value="">Select Program</option>
                    <option>Playgroup</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                  </select>

                  {errors.program && (
                    <p className="text-sm text-red-500">{errors.program}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-4 rounded-full text-lg font-bold hover:scale-105 transition"
                  >
                    Submit Enquiry 🚀
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 🌱 Grass */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-24 bg-green-300 rounded-t-full"></div>
    </section>
  );
}

/* ---------- Reusable Input ---------- */

function Input({ placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-5 py-3 rounded-full border
        ${error ? "border-red-400" : "border-indigo-200"}
        focus:outline-none focus:ring-2 focus:ring-indigo-400`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}

/* ---------- Feature ---------- */

function Feature({ emoji, text }) {
  return (
    <div className="flex items-center gap-3 bg-indigo-100 px-4 py-3 rounded-xl">
      <span className="text-2xl">{emoji}</span>
      <span>{text}</span>
    </div>
  );
}
