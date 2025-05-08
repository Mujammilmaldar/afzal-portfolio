"use client";
import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const CallToAction = () => {
  return (
    <section className="bg-[#1f1f1f] py-10">
      <div className="container mx-auto px-[100px] flex flex-col md:flex-row gap-3">
        {/* Contact Details */}
        <div className="bg-[#262626] rounded-lg p-8 flex-1 max-w-[350px] shadow-lg">
          <h3 className="text-white text-3xl font-bold mb-4 border-b border-cyan-500 pb-3">
            Contact Details
          </h3>
          <p className="!text-white/50 mb-6">
            Please find below contact details and contact us today!
          </p>
          <div className="flex items-center !text-white mb-4 gap-4">
            <FiPhone className="text-cyan-400 text-xl" />
            <span className="!text-white">+321 456 78 901</span>
          </div>
          <div className="flex items-center !text-white mb-4 gap-4">
            <FiMail className="text-cyan-400 text-xl" />
            <span className="!text-white">Mailus@Consultlive.com</span>
          </div>
          <div className="flex items-center text-white gap-4">
            <FiMapPin className="text-cyan-400 text-xl" />
            <span className="!text-white" >Apple Street, New York, USA</span>
          </div>
        </div>

        {/* Request For Call Back */}
        <div className="flex-1 p-8 shadow-lg">
          <h3 className="!text-white text-3xl font-bold mb-10 pb-3">
            Request For Call Back
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <input
              type="text"
              placeholder="Name *"
              className="bg-[#1f1f1f] border border-[#444]  px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              required
            />
            <input
              type="email"
              placeholder="Email *"
              className="bg-[#1f1f1f] border border-[#444]  px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[#1f1f1f] border border-[#444]  px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            />
            <select
              className="bg-[#1f1f1f] border border-[#444]  px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              defaultValue=""
            >
              <option value="" disabled>
                Enquiry About
              </option>
              <option value="service1">Consulting</option>
              <option value="service2">Support</option>
              <option value="other">Other</option>
            </select>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-cyan-400 text-white font-semibold px-8 py-3 rounded-full mt-2 hover:bg-cyan-500 transition"
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
