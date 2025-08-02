import ServicesSection from "@/components/Service";
import AboutUs from "@/components/AboutUs"
import TestimonialSection from "@/components/TestimonialSection"
import CaseStudies from "@/components/CaseStudies"
import Hero from "@/components/Hero"
import Blog from "@/components/BlogSection"
import WhatsAppButton from "@/components/Whatsappbtn";
export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <ServicesSection />
      <CaseStudies />
      <TestimonialSection />
      <WhatsAppButton />
      <Blog />
    </>
  );
}
