import ServicesSection from "@/components/Service";
import AboutUs from "@/components/AboutUs"
import TestimonialSection from "@/components/TestimonialSection"
import Hero from "@/components/Hero"
export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <ServicesSection />
      <TestimonialSection></TestimonialSection>
    </>
  );
}
