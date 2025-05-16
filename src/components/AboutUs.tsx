"use client";
import React from "react";
import Image from "next/image";
import { MdCheckCircleOutline } from "react-icons/md";
import AnimatedFadeIn from "./AnimatedHeading";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <div
          id="about"
          className="container mx-auto px-4 md:px-10 lg:px-20 md:py-16  py-10 flex flex-col md:flex-row items-center justify-between gap-10 about-us"
        >
          {/* Left Section */}
          <div className="md:w-2/4 space-y-6">
            <div className="space-y-4">
              <AnimatedFadeIn direction="right">
                <h2 className="text-4xl font-bold">About</h2>
              </AnimatedFadeIn>
              <h5 className="text-lg font-semibold text-dark">
                With over 13 years of specialized experience in healthcare
                digital marketing, I have helped hospitals, clinics, and doctors
                build a powerful online presence — driving more patients,
                reducing lead costs, and improving conversions.
              </h5>
              <p className="text-gray-600">
                I understand the unique challenges of marketing for hospitals
                and doctors - regulations, patient trust, hyper-local targeting
                and the value of reputation. Whether it’s a surgeon looking to
                rank on Google or a multi-speciality hospital needs branding on
                digital channels, I bring healthcare specific strategy,
                creativity and execution to every project.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="flex flex-wrap pt-4">
              {[
                "Deep knowledge of healthcare marketing dynamics",
                "Specialist in patient-centric messaging ",
                "Results-driven digital campaigns for private practices and hospitals",
                "Healthcare video storytelling for reputation and lead generation",
                "CRO expert with focus on patient appointment booking journeys",
              ].map((text, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 flex items-center gap-2 text-gray-800 text-sm mb-2"
                >
                  <MdCheckCircleOutline className="text-primary w-5 h-5 flex-shrink-0" />

                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full h-auto min-h-[360px] relative lg:max-h-[440px] lg:max-w-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/aboutimg.webp"
              alt="CEO"
              width={1200} // your actual image width
              height={800} // your actual image height
              className="w-full h-auto object-cover max-h-[480px] max-w-[400px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
