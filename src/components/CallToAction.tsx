"use client";
import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import AnimatedFadeIn from "./AnimatedHeading";

const CallToAction = () => {
  return (
    <section id="calltoaction" className="bg-[#1f1f1f] py-10">
      <div className="container mx-auto px-[20px] md:px-[50px] lg:px-[100px] flex flex-col-reverse md:flex-row lg:flex-row gap-3">
        {/* Contact Details */}
        <div className="bg-[#262626] rounded-lg p-8 flex-1 max-w-[350px] shadow-lg">
        <AnimatedFadeIn direction="up">
          <h3 className="text-white text-3xl font-bold mb-4 border-b border-primary pb-3">
            Contact Details
          </h3>
          </AnimatedFadeIn>
          <p className="!text-white/50 mb-6">
            Please find below contact details and contact us today!
          </p>
          <div className="flex items-center !text-white mb-4 gap-4">
            <FiPhone className="text-primary text-xl" />
            <span className="!text-white">+321 456 78 901</span>
          </div>
          <div className="flex items-center !text-white mb-4 gap-4">
            <FiMail className="text-primary text-xl" />
            <span className="!text-white">Mailus@Consultlive.com</span>
          </div>
          <div className="flex items-center text-white gap-4">
            <FiMapPin className="text-primary text-xl" />
            <span className="!text-white" >Apple Street, New York, USA</span>
          </div>
        </div>

        {/* Request For Call Back */}
        <div className="flex-1 p-8 shadow-lg">
        <AnimatedFadeIn direction="up">
          <h3 className="!text-white text-3xl font-bold mb-10 border-b border-primary pb-3">
            Request For Call Back
          </h3>
          </AnimatedFadeIn>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#1f1f1f] border border-[#444]  px-4 py-3 text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              className="bg-[#1f1f1f] border border-[#444]  px-4 py-3 text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#1f1f1f] border border-[#444]  px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
            <div className="md:col-span-3">
              <textarea
                placeholder="Your Message"
                className="bg-[#1f1f1f] border border-[#444] px-4 py-3 text-white focus:outline-none focus:border-primary w-full min-h-[120px] resize-none"
                required
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white font-semibold px-8 py-3 rounded-full mt-2 hover:bg-primary transition"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
