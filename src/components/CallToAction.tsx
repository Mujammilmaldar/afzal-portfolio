"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiPhone, FiMail } from "react-icons/fi";
import dynamic from 'next/dynamic';
const AnimatedFadeIn = dynamic(() => import('./AnimatedHeading'), { ssr: false });

const CallToAction = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/thank-you");
    } else {
      alert("Error sending message.");
    }
  };

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
            <Link
              href="tel:+91 7303216569"
              className="hover:text-gray-300 flex gap-2 transition-colors duration-300"
            >
              <FiPhone className="text-white text-xl" />
              <span className="!text-white">+91 7303216569</span>
            </Link>
          </div>
          <div className="flex items-center !text-white mb-4 gap-4">
            <Link
              href="mailto:afzal82khan@gmail.com"
              className="hover:text-gray-300 flex gap-2 transition-colors duration-300"
            >
              <FiMail className="text-white text-xl" />
              <span className="!text-white">afzal82khan@gmail.com</span>
            </Link>
          </div>
        </div>

        {/* Request For Call Back */}
        <div className="flex-1 p-8 shadow-lg">
          <AnimatedFadeIn direction="up">
            <h3 className="!text-white text-3xl font-bold mb-10 border-b border-primary pb-3">
              Request For Call Back
            </h3>
          </AnimatedFadeIn>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#1f1f1f] border border-[#444] px-4 py-3 text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#1f1f1f] border border-[#444] px-4 py-3 text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#1f1f1f] border border-[#444] px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
            <div className="md:col-span-3">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
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
