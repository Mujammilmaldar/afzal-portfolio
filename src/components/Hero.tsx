"use client";
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div id="home" className="relative w-full">
      {/* Hero Background Image */}
      <div className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 hero-img-container z-0" />
      </div>

      {/* Hero Content */}
      <div className="ml-0 md:ml-12 absolute inset-0 z-20 flex flex-col justify-end mb-22 items-start px-4 md:px-8">
        <div className="mx-0">
          <h1 className="text-3xl! w-[90%] md:text-5xl! lg:text-5xl! md:w-1/2! font-bold !text-white mb-2 uppercase">
            Healthcare Digital Marketing Consultant
          </h1>
          <p className="text-white/80! sm:text-lg md:text-2xl! font-medium italic lg:min-w-[550px]! sm:min-w-[100%]! leading-relaxed lg:w-1/2">
            13+ years of experience. Helping hospitals & doctors with proven
            digital marketing strategies
          </p>
          <div className="mt-10">
            <button
              className="bg-primary text-white hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:bg-primary hover:text-white"
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
