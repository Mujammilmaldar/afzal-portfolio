"use client";
import React, { useState } from "react";
import Image from "next/image";
import { url } from "inspector";
import AnimatedFadeIn from "./AnimatedHeading";

const slides = [
  {
    title: "Pleasurē",
    description:
      "We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. Be work with our clients ...",
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

const CaseStudies = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, description, image, pathforurl } = slides[current];

  return (
    <div
      id="casestudies"
      className="bg-[#eef5fd] py-20 flex justify-center relative"
    >
      <div className="bg-white relative max-w-5xl min-h-[550px] w-full rounded-xl shadow-lg px-12 py-16 flex items-start">
        {/* Background title */}
        <h1 className="absolute text-5xl font-serif font-semibold -top-8 left-10 z-10">
          Featured cases
        </h1>
        {/* Side Image */}
        <div className="absolute w-[440px] h-[370px] -left-24 bottom-15 shadow-xl rounded z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 340px"
          />
        </div>

        {/* Content */}
        <div className="ml-[400px] z-10 max-w-xl">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold font-sans mb-2">{title}</h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-16 h-1 bg-blue-600 rounded"></span>
              <span className="w-6 h-1 bg-blue-400 rounded"></span>
              <span className="w-3 h-1 bg-blue-300 rounded"></span>
            </div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          <button
            className="mt-8 border border-blue-600 text-blue-600 font-medium px-6 py-2 rounded-full hover:bg-blue-50 transition"
            onClick={() => window.location.href = pathforurl!}
          >
            Read More
          </button>
        </div>

        {/* Controls */}
        <div className="absolute bottom-12 left-[250px] bg-white px-6 rounded-full py-3 flex items-center gap-3 z-10">
          <button
            onClick={prevSlide}
            className="w-9 h-9 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-lg"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="w-9 h-9 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-lg"
          >
            ›
          </button>
        </div>

        {/* Slide indicator */}
        <div className="absolute bottom-10 right-12 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-[6px] rounded-full ${
                current === index ? "w-16 bg-blue-600" : "w-6 bg-blue-300"
              } transition-all duration-300`}
            />
          ))}
        </div>

        {/* "View all" */}
        <span className="absolute top-10 right-10 text-gray-500 text-sm cursor-pointer hover:underline">
          View all →
        </span>
      </div>
    </div>
  );
};

export default CaseStudies;
