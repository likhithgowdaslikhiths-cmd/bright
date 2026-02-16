import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Programs from "../components/Programs";
import AdmissionsCTA from "../components/AdmissionsCTA";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <Programs />
      <AdmissionsCTA />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
