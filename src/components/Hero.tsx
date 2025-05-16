"use client";
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div id="home" className="relative w-full">
      {/* Hero Background Image */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Mobile Image */}
        <img
          src="/heromobbg.webp"
          alt="hero"
          className="w-full max-h-[620px] h-auto lg:min-h-[720px] object-cover block md:hidden z-0"
        />

        {/* Desktop Image */}
        <img
          src="/herobg.webp"
          alt="hero"
          className="w-full h-auto lg:min-h-[720px] object-cover hidden md:block z-0"
        />
      </div>

      {/* Hero Content */}
      <div className="ml-0 lg:ml-22 absolute inset-0 z-20 flex flex-col justify-center lg:justify-center lg:items-start items-center px-4 md:px-8">
        <div className="mx-0">
          <h1 className="text-[30px]! mt-45 w-[100%] lg:w-[90%] md:text-5xl! lg:text-5xl! md:w-1/2! font-bold !text-white mb-2 uppercase text-left leading-[1.2]">
            Healthcare Digital Marketing Consultant
          </h1>
          <p className="hidden lg:block text-white/80! text-2xl! font-medium italic leading-relaxed lg:min-w-[550px] lg:w-1/2">
            13+ years of experience. Helping hospitals & doctors with proven
            digital marketing strategies
          </p>
          <div className="mt-10">
            <button
              className="hidden bg-primary lg:block text-white hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:bg-primary hover:text-white"
              onClick={() => (window.location.href = "#calltoaction")}
            >
              Consult Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
