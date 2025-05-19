"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedFadeIn from "./AnimatedHeading";

const slides = [
  {
    title: "Masina Heart Institute",
    description:
      "70% of initial patients came via Google Search & Ads. In 4 months, the website ranked on Page 1 for key terms. Video content boosted social media engagement, enhanced local brand recognition, and positioned the hospital as a trusted expert in advanced cardiac care in South Mumbai.",
    image: "/MasinaHeartInstitute-CaseStudy-DigitalMarketingConsultantMumbai.webp",
    pathforurl: "case-studies/masina-heart-institute",
  },
  {
    title: "HVS Hospitals",
    description:
      "Hyper-local Google Ads delivered qualified leads from Day 1. The website ranked for high-intent keywords across Google and AI Overviews, including procedures, doctors, and local queries. Optimized content drove steady organic traffic growth, enhancing visibility, credibility, and appointment bookings.",
    image: "/HVS-CaseStudy-DigitalMarketingConsultantMumbai.webp",
    pathforurl: "case-studies/hvs-hospitals",
  },
  {
    title: "Endovascular Clinic",
    description:
      "The digital strategy drove direct patient enquiries via forms, calls, and WhatsApp, reducing referral dependency. SEO boosted rankings for key services, while structured content increased impressions and CTR. Video integration improved dwell time, reduced bounce rates, and enhanced mobile lead conversions. GMB ranked Top 3 locally.",
    image: "/EndovascularClinic-DigitalMarketingConsultantMumbai.webp",
    pathforurl: "case-studies/endovascular-clinic",
  },
];

const CaseStudies: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const { title, description, image, pathforurl } = slides[current];

  return (
    <section id="casestudies" className="bg-[#eef5fd] py-12 px-4 md:py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg flex flex-col gap-2">
        {/* Image */}
        <div className="heading -mt-[20px] ml-7">
        <AnimatedFadeIn direction="right">
          <h2 className="text-xl!">Featured Cases</h2>
        </AnimatedFadeIn>
        </div>
        <div className="single-row mt-10 flex lg:flex-row md:flex-col flex-col">
        <div className="relative w-[80%] lg:w-1/2 h-58 lg:h-[350px]! md:h-auto md:w-1/2 mx-auto md:mx-0">
          <Image
            src={image}
            alt={title}
            fill
            className="absolute object-cover left-1/2 lg:-left-[7%]! top-[7%] md:left-0 md:translate-x-0 lg:-left-[10%] lg:-top-[7%] md:-top-0"
            sizes="(max-width: 768px) 80vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
          <div>
          <div className="flex items-center justify-between gap-4 -mx-10 -my-4 lg:hidden">
              <button
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-primary text-primary text-[31px]!"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-primary text-primary text-[31px]!"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
            <h2 className="text-2xl! text-primary! sm:text-3xl md:text-4xl font-semibold mb-2 leading-[1.2]">
              {title}
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-1 bg-primary rounded"></span>
              <span className="w-6 h-1 bg-blue-400 rounded"></span>
              <span className="w-3 h-1 bg-blue-300 rounded"></span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              className="border border-primary text-primary font-medium px-5 py-2 rounded-full hover:bg-blue-50 transition"
              onClick={() => (window.location.href = pathforurl!)}
            >
              Read More
            </button>

            <div className="items-center hidden lg:flex gap-3">
              <button
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-primary text-primary text-[31px]!"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-primary text-primary text-[31px]!"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-2 mt-4">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 
                  ${current === idx ? "w-8 bg-primary" : "w-4 bg-blue-300"}`}
              />
            ))}
          </div>

          <div className="mt-4 text-right">
            <a
              href="/case-studies"
              className="text-gray-500 text-sm hover:underline"
            >
              View all →
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;