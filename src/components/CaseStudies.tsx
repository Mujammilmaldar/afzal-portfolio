"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedFadeIn from "./AnimatedHeading";

const slides = [
  {
    title: "Pleasurē",
    description:
      "We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation.",
    image: "/aboutimage.jpg",
    pathforurl: "case-studies/pleasure",
  },
  {
    title: "Innovatē",
    description:
      "We create solutions that drive innovation and unlock potential. With creativity and strategy combined, we deliver lasting impact.",
    image: "/aboutimage.jpg",
    pathforurl: "case-studies/innovatie",
  },
  {
    title: "Elevatē",
    description:
      "Helping businesses reach new heights through transformative digital experiences and powerful design thinking.",
    image: "/aboutimage.jpg",
    pathforurl: "case-studies/elevate",
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
          <h2 className="text-4xl">Featured Cases</h2>
        </AnimatedFadeIn>
        </div>
        <div className="single-row mt-10 flex lg:flex-row md:flex-col flex-col">
        <div className="relative w-full h-64 md:h-auto md:w-1/2">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover -left-[10%]! -top-[10%]! md:-left-0 md:-top-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              {title}
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-1 bg-blue-600 rounded"></span>
              <span className="w-6 h-1 bg-blue-400 rounded"></span>
              <span className="w-3 h-1 bg-blue-300 rounded"></span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              className="border border-blue-600 text-blue-600 font-medium px-5 py-2 rounded-full hover:bg-blue-50 transition"
              onClick={() => (window.location.href = pathforurl!)}
            >
              Read More
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 text-[31px]!"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 text-[31px]!"
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
                  ${current === idx ? "w-8 bg-blue-600" : "w-4 bg-blue-300"}`}
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