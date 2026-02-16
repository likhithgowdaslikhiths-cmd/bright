import { useState } from "react";

export default function AdmissionsCTA() {
  const [form, setForm] = useState({
    childName: "",
    parentName: "",
    phone: "",
    email: "",
    program: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors = {};

    if (!form.childName.trim()) newErrors.childName = "Child name is required";
    if (!form.parentName.trim()) newErrors.parentName = "Parent name is required";
    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.program) newErrors.program = "Please select a program";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Prepare form data for send.php
    const formData = new FormData();
    formData.append('child_name', form.childName);
    formData.append('parent_name', form.parentName);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('program', form.program);

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          childName: "",
          parentName: "",
          phone: "",
          email: "",
          program: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
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
              Admission Open 🎒
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Start your child's fun learning with Bright Star
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Give your little one the perfect beginning in a safe, joyful environment designed to nurture confidence, creativity, and early learning success.
            </p>

            <div className="grid grid-cols-2 gap-4 text-gray-900 font-semibold mb-8">
              <Feature emoji="🧸" text="Loving Care" />
              <Feature emoji="🎨" text="Creative Learning" />
              <Feature emoji="🛝" text="Safe Play Area" />
              <Feature emoji="📚" text="Early Education" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto bg-pink-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition text-center flex items-center justify-center flex-1 h-16"
              >
                Schedule a Visit 🏫
              </a>
              <a 
                href="tel:6364259911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-indigo-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition text-center flex items-center justify-center flex-1 h-16"
              >
                Call Us 📞
              </a>
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
                    placeholder="Child Name"
                    value={form.childName}
                    onChange={(v) => setForm({ ...form, childName: v })}
                    error={errors.childName}
                  />

                  <Input
                    placeholder="Parent Name"
                    value={form.parentName}
                    onChange={(v) => setForm({ ...form, parentName: v })}
                    error={errors.parentName}
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
                    disabled={loading}
                    className="w-full bg-pink-500 text-white py-4 rounded-full text-lg font-bold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Submit Enquiry 🚀"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

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
