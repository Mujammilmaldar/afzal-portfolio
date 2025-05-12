"use client";

import ServiceCard from "@/components/ServiceCard";
import { TbSettings, TbRuler, TbChartLine, TbHelpOctagon, TbClipboardList, TbUsers } from 'react-icons/tb';
import AnimatedFadeIn from "./AnimatedHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 lg:py-16 md:py-10 py-4 px-4 md:px-12">
      <div className="container mx-auto text-center">
        <p className="text-red-600 font-medium uppercase">Our Services</p>
        <AnimatedFadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            High Quality Services
          </h2>
        </AnimatedFadeIn>
        <div className="grid md:grid-cols-3 bg-[#F9F9F9] md:p-1 sm:p-1 lg:p-1">
          <ServiceCard
            icon={<TbSettings size={44} strokeWidth={1.5} />}
            title="Process Development"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<TbRuler size={44} strokeWidth={1.5} />}
            title="Strategy & Planning"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<TbChartLine size={44} strokeWidth={1.5} />}
            title="Business Planning"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<TbHelpOctagon size={44} strokeWidth={1.5} />}
            title="Business Support"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<TbClipboardList size={44} strokeWidth={1.5} />}
            title="Audit & Evaluation"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
          <ServiceCard
            icon={<TbUsers size={44} strokeWidth={1.5} />}
            title="Consultancy & Advice"
            description="Sagitis himos pulvinar morb sociis laoreet posuere enim non auctor etiam pretium libero"
          />
        </div>
      </div>
    </section>
  );
}