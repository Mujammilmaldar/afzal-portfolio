"use client"
import React from 'react'
import Image from "next/image";
import { MdCheckCircleOutline } from "react-icons/md";

const AboutUs = () => {
  return (
    <>
    <div className="">
        <div className="container mx-auto px-20 py-18 flex flex-col md:flex-row items-center justify-between gap-10 about-us">
          {/* Left Section */}
          <div className="md:w-2/4 space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">About us</h2>
              <h5 className="text-lg font-semibold text-dark">
                Other tech services companies have embraced ’design thinking’, a
                problem-solving philosophy that leads to products people
                actually want to use.
              </h5>
              <p className="text-gray-600">
                Solving social problems requires leaders from foundations,
                businesses, nonprofits, and governments to reimagine the systems
                and relationships that shape our world. We strive for a deep
                understanding of how to create social change.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Customized Advice",
                "24/7 Customer Support",
                "Prompt Solution Delivery",
                "Personalized Knowledge",
                "Trusted Expertise",
                "On-Demand Assistance",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-800 text-sm"
                >
                  <MdCheckCircleOutline className="text-green-600 text-xl" />
                  {text}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h5 className="font-semibold text-gray-900">Mike Davidson</h5>
              <p className="text-gray-500 text-sm">CEO Manager</p>
            </div>

            
          </div>

          {/* Right Section */}
          <div className="md:w-[40%] relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/aboutimage.jpg"
              fill
              alt="CEO"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs