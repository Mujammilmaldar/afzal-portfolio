import ServicesSection from "@/components/Service";
import AboutUs from "@/components/AboutUs"
import TestimonialSection from "@/components/TestimonialSection"
import CallToAction from "@/components/CallToAction";
import CaseStudies from "@/components/CaseStudies"
import Hero from "@/components/Hero"
export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <ServicesSection />
      <CaseStudies />
      <TestimonialSection />
      <CallToAction />
    </>
  );
}
