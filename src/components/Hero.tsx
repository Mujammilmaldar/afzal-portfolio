"use client";
import React from 'react'
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
        {/* Hero Background Image */}
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />{" "}
          {/* Overlay for better text readability */}
          <Image
            src="/herosection.jpg"
            alt="Professional speaker inspiring audience"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center top-[30px] text-center px-4 md:px-8">
          <div className=" mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !text-white mb-6 uppercase">
              Inspire your audience to act.
            </h1>
            <h5 className="text-white font-light max-w-2xl mx-auto leading-relaxed ">
              Energize, inspire, and transform your audience&apos;s customer
              experience and marketing by adding the most influential marketer
              in the world to your agenda.
            </h5>
            <div className="mt-10">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg transition-all hover:shadow-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero