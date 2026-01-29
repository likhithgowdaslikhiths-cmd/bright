import { useEffect, useState } from "react";

import Preloader from "../components/Preloader";
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

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1800); // 1.8 sec (sweet spot UX)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ⏳ Preloader */}
      <Preloader isVisible={showLoader} />

      {/* Main Content */}
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <Programs />
      <AdmissionsCTA />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}
