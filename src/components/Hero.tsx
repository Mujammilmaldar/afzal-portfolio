"use client";
import React from 'react'
import Image from "next/image";
const Hero = () => {
  return (
    <div id='home' className="relative w-full">
        {/* Hero Background Image */}
        <div className="relative w-full h-[700px] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />{" "}
          {/* Overlay for better text readability */}
          <Image
            src="/herobg.webp"
            alt="Professional speaker inspiring audience"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="ml-12 absolute inset-0 z-20 flex flex-col justify-center items-start px-4 md:px-8">
          <div className="mx-0">
            <h1 className="text-4xl w-[70%] md:text-5xl lg:text-6xl font-bold !text-white mb-6 uppercase">
            Healthcare Digital Marketing Consultant
            </h1>
            <p className="text-white/80! text-2xl! font-medium italic min-w-[550px] max-w-1/2 leading-relaxed">
            13+ years of experience. Helping hospitals & doctors grow with proven digital marketing strategies 
            </p>
            <div className="mt-10">
              <button className="bg-primary text-white hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg transition-all hover:shadow-lg">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero