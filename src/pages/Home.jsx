import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Programs from "../components/Programs";
import AdmissionsCTA from "../components/AdmissionsCTA";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* 🔝 Top Info Bar */}
      <TopBar />

      {/* 🧭 Header / Navigation */}
      <Header />

      {/* 🌈 Hero Section */}
      <Hero />

      {/* 🧸 About Us */}
      <AboutUs />

      {/* 🎒 Programs Preview */}
      <Programs />

      {/* 📝 Admission Enquiry CTA */}
      <AdmissionsCTA />

      {/* 💖 Why Choose Us */}
      <WhyChooseUs />

      {/* ⭐ Parent Testimonials */}
      <Testimonials />

      {/* 🛝 Footer */}
      <Footer />
    </>
  );
}
