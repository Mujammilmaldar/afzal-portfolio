"use client";

import ServiceCard from "@/components/ServiceCard";
import { 
  Settings2, 
  BarChart3,
  LayoutDashboard, 
  MessageSquare, 
  Video, 
  Code2 
} from 'lucide-react';
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
            icon={<Settings2 size={44} />}
            title="Healthcare SEO"
            description="A process of optimizing your medical website to appear higher in Google organic results when patients look for healthcare services online"
            benefits="Benefits"
            benefitsdesc = "Drives organic traffic, attracts targeted patients, builds credibility & trust, and delivers long-term, cost-effective growth."
          />
          <ServiceCard
            icon={<LayoutDashboard size={44} />}
            title="Google Ads"
            description="Platform to run ads on Google that appear at the top of search results when patients search for healthcare services online."
            benefits="Benefits"
            benefitsdesc = "Instant visibility on Google, targeted reach, flexible budgets, local targeting, measurable ROI, increased appointments and fast results."
          />
          <ServiceCard
            icon={<BarChart3 size={44} />}
            title="Analytics + LeadTracking"
            description="Analytics and lead tracking are done by integrating tools like GA4, GTM, call, whatsapp & form tracking through coding on websites."
            benefits="Benefits"
            benefitsdesc = "Data-driven insights, measures campaign performance, tracks patient inquiries, optimizes marketing and improves conversion rates."
          />
          <ServiceCard
            icon={<MessageSquare size={44} />}
            title="Social Media Marketing"
            description="It involves creating educational content, running ads, engaging patients, and managing profiles on platforms Social Media."
            benefits="Benefits"
            benefitsdesc = "Boosts brand awareness, educates patients, builds trust, engages audiences, promotes services, and drives traffic to healthcare websites."
          />
          <ServiceCard
            icon={<Video size={44} />}
            title="Video development"
            description="Create engaging videos to showcase your healthcare services, educate patients, and build trust through compelling visual content."
            benefits="Benefits"
            benefitsdesc = "Enhances patient education, builds trust, increases engagement, improves communication & boosts brand awareness."
          />
          <ServiceCard
            icon={<Code2 size={44} />}
            title="Website development"
            description="Create a custom website with clear navigation, mobile responsive, fast loading, quality content and easy appointment booking features."
            benefits="Benefits"
            benefitsdesc = "Builds credibility, improves patient experience, boosts online visibility, drives appointments and provides information efficiently."
          />
        </div>
      </div>
    </section>
  );
}