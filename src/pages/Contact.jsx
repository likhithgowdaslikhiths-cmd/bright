import { useState } from "react";
import kidsImage from "../assets/program.jpg";
import Header from "../components/Header";
import Programs from "../components/Programs";
import AdmissionsCTA from "../components/AdmissionsCTA"; 
import WhyChooseUs from "../components/WhyChooseUs";  
import Testimonials from "../components/Testimonials";  
import Footer from "../components/Footer";

export default function HomePage() {
  const [form, setForm] = useState({
    childName: "",
    parentName: "",
    phone: "",
    email: "",
    program: "",
    whatsappConsent: false,
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

    const formData = new FormData();
    formData.append("child_name", form.childName);
    formData.append("parent_name", form.parentName);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    formData.append("program", form.program);
    formData.append("whatsapp_consent", form.whatsappConsent);

    try {
      const response = await fetch("/send.php", {
        method: "POST",
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
          whatsappConsent: false,
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
   <>
    <Header />
    <section className="relative min-h-screen sm:min-h-[75vh] flex flex-col lg:flex-row items-center justify-center py-8 sm:py-12 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-rose-500 via-purple-500 to-indigo-600">
      {/* Mobile floating elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <span className="absolute top-8 left-4 text-2xl animate-bounce-slow sm:top-12 sm:left-6 sm:text-3xl">⭐</span>
        <span className="absolute top-24 right-4 text-3xl animate-pulse sm:top-32 sm:right-12 sm:text-4xl">✨</span>
        <span className="absolute bottom-24 left-4 text-2xl animate-float sm:bottom-20 sm:left-8 sm:text-3xl">🎈</span>
        <span className="absolute bottom-8 right-4 text-xl animate-bounce sm:bottom-12 sm:right-8 sm:text-2xl">🌟</span>
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center">
        {/* LEFT - Compact Hero Content */}
        <div className="space-y-6 text-white text-center lg:text-left">
          {/* Headline - Responsive */}
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              Big Dreams
              <span className="block text-lg sm:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Begin Here
              </span>
            </h1>
            <div className="absolute -bottom-3 left-0 w-12 sm:w-16 h-px bg-gradient-to-r from-yellow-400 to-orange-400 rounded shadow-md lg:relative lg:static"></div>
          </div>

          {/* Compact stats */}
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/30 hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 mx-auto lg:mx-0 w-full max-w-md lg:max-w-lg xl:max-w-xl">
  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0">
      <span className="text-2xl sm:text-3xl lg:text-4xl">⭐</span>
    </div>
    <div className="min-w-0">
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-yellow-100 leading-tight">10K+</p>
      <p className="text-base sm:text-lg lg:text-xl font-semibold text-white/90 mt-2">Happy Parents</p>
    </div>
  </div>
  <p className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-yellow-100 justify-center lg:justify-start">
    ⭐⭐⭐⭐⭐ 4.9/5
  </p>
</div>


          {/* LARGER Square image - responsive */}
          <div className="relative group w-48 h-48 sm:w-56 sm:h-56 lg:w-[220px] lg:h-[220px] xl:w-[250px] xl:h-[250px] mx-auto lg:mx-0">
            <div className="w-full h-full shadow-2xl rounded-2xl overflow-hidden border-4 border-white/20 backdrop-blur hover:shadow-4xl transition-all duration-700">
              <img
                src={kidsImage}
                alt="Happy kids"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
            </div>
          </div>
        </div>

        {/* RIGHT - Compact Form */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 lg:p-8 shadow-3xl border border-white/30 hover:shadow-4xl hover:border-white/50 transition-all duration-500">
            
            {success ? (
              <div className="text-center py-8 sm:py-10 space-y-3 sm:space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl animate-bounce">
                  <span className="text-xl sm:text-2xl">🎉</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Success!
                </h3>
                <p className="text-sm sm:text-base font-semibold text-white/90">
                  We'll contact you soon 😊
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent mb-1 sm:mb-2">
                    Block Your Seat
                  </h3>
                  <div className="w-10 h-px sm:w-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded mx-auto"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <Input
                    placeholder="Child Name *"
                    value={form.childName}
                    onChange={(v) => setForm({ ...form, childName: v })}
                    error={errors.childName}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50 bg-white/60 backdrop-blur-xl text-sm sm:text-base placeholder-white/70 shadow-lg hover:border-yellow-300 transition-all duration-300 h-12"
                  />

                  <Input
                    placeholder="Parent Name *"
                    value={form.parentName}
                    onChange={(v) => setForm({ ...form, parentName: v })}
                    error={errors.parentName}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50 bg-white/60 backdrop-blur-xl text-sm sm:text-base placeholder-white/70 shadow-lg hover:border-yellow-300 transition-all duration-300 h-12"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      placeholder="Phone *"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                      error={errors.phone}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50 bg-white/60 backdrop-blur-xl text-sm sm:text-base placeholder-white/70 shadow-lg hover:border-yellow-300 transition-all duration-300 h-12"
                    />
                    <Input
                      placeholder="Email *"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      error={errors.email}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50 bg-white/60 backdrop-blur-xl text-sm sm:text-base placeholder-white/70 shadow-lg hover:border-yellow-300 transition-all duration-300 h-12"
                    />
                  </div>

                  <div>
                    <select
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl border-2 h-12 ${
                        errors.program 
                          ? "border-red-400 focus:ring-red-300/50" 
                          : "border-white/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300/50"
                      } bg-white/60 backdrop-blur-xl text-sm sm:text-base appearance-none cursor-pointer shadow-lg hover:border-yellow-300 transition-all duration-300 focus:outline-none`}
                    >
                      <option value="">Select Program</option>
                      <option>Playgroup</option>
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>
                    </select>
                    {errors.program && <p className="text-xs text-red-300 mt-1 ml-1">{errors.program}</p>}
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 p-3 bg-white/20 rounded-xl border-2 border-white/30 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <input
                      type="checkbox"
                      id="whatsapp"
                      checked={form.whatsappConsent}
                      onChange={(e) => setForm({ ...form, whatsappConsent: e.target.checked })}
                      className="w-4 h-4 rounded text-yellow-400 focus:ring-yellow-400 border-white/50 bg-white/70 shadow-sm flex-shrink-0"
                    />
                    <label htmlFor="whatsapp" className="text-xs sm:text-sm font-medium text-white/95 cursor-pointer select-none flex-1">
                      📱 WhatsApp Updates
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-600 text-black font-bold text-sm sm:text-base py-3.5 px-5 sm:px-6 h-12 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-400 flex items-center justify-center gap-1 sm:gap-2 hover:gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-black/20 border-t-black"></span>
                        <span className="sm:inline hidden">Sending...</span>
                        <span className="sm:hidden">...</span>
                      </>
                    ) : (
                      <>
                        Enquire Now
                        <span className="text-base sm:text-lg group-hover:animate-bounce">🚀</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

        @media (max-width: 640px) {
          .space-y-6 > * + * { margin-top: 1.25rem; }
        }
      `}</style>
    </section>
    <Programs />
    <AdmissionsCTA />
    <WhyChooseUs />
    <Testimonials />
    <Footer />
    
   </>
  );
}

function Input({ placeholder, value, onChange, error, className = "" }) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full ${error ? "border-red-400 focus:ring-red-400" : ""} ${className}`}
      />
      {error && <p className="text-xs text-red-300 mt-1 font-medium">{error}</p>}
    </div>
  );
}
