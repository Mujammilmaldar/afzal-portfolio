"use client";

import ServiceCard from "@/components/ServiceCard";
import {
  FaCogs,
  FaPencilRuler,
  FaChartLine,
  FaHandsHelping,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import AnimatedFadeIn from "./AnimatedHeading";
export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="container mx-auto text-center">
        <p className="text-red-600 font-medium uppercase">Our Services</p>
      <AnimatedFadeIn direction="up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          High Quality Services
        </h2>
        </AnimatedFadeIn>
        <div className="grid md:grid-cols-3 bg-[#F9F9F9] p-10">
          <ServiceCard
            icon={<FaCogs />}
            title="Process Development"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<FaPencilRuler />}
            title="Strategy & Planning"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Business Planning"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<FaHandsHelping />}
            title="Business Support"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<FaClipboardList />}
            title="Audit & Evaluation"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<FaUsers />}
            title="Consultancy & Advice"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
        </div>
      </div>
    </section>
  );
}
