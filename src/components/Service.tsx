"use client";

import ServiceCard from "@/components/ServiceCard";
import { SlRocket , SlSocialGoogle ,SlChart , SlSocialInstagram  } from "react-icons/sl";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsBarChartLine } from "react-icons/bs";
import AnimatedFadeIn from "./AnimatedHeading";
import { LuFileCode2 } from "react-icons/lu";
export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 lg:py-16 md:py-10 py-4 px-4 md:px-12">
      <div className="container mx-auto text-center">
        <AnimatedFadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Health Care Digital Marketing
          </h2>
        </AnimatedFadeIn>
        <div className="grid md:grid-cols-3 bg-[#F9F9F9] p-4 gap-4">
          <ServiceCard
            icon={<SlRocket />}
            title="Healthcare SEO"
            description="Optimizing your medical website to rank higher in Google and AI-generated search results for healthcare related queries."
            benefits="Benefits"
            benefitsdesc = "Drives organic traffic, attracts targeted patients, builds credibility & trust, and delivers long-term, cost-effective growth."
          />
          <ServiceCard
            icon={<SlSocialGoogle />}
            title="Google Ads"
            description="Platform to run ads on Google that appear at the top of search results when patients search for healthcare services online."
            benefits="Benefits"
            benefitsdesc = "Instant visibility on Google, targeted reach, flexible budgets, local targeting, measurable ROI, increased appointments and fast results."
          />
          <ServiceCard
            icon={<BsBarChartLine />}
            // icon={<SlChart />}
            title="Analytics + LeadTracking"
            description="Analytics and lead tracking are done by integrating tools like GA4, GTM, call, whatsapp & form tracking through coding on websites."
            benefits="Benefits"
            benefitsdesc = "Data-driven insights, measures campaign performance, tracks patient inquiries, optimizes marketing and improves conversion rates."
          />
          <ServiceCard
            icon={<SlSocialInstagram />}
            title="Social Media Marketing"
            description="It involves creating educational content, running ads, engaging patients, and managing profiles on platforms Social Media."
            benefits="Benefits"
            benefitsdesc = "Boosts brand awareness, educates patients, builds trust, engages audiences, promotes services, and drives traffic to healthcare websites."
          />
          <ServiceCard
            icon={<GoDeviceCameraVideo />}
            title="Video development"
            description="Create engaging videos to showcase your healthcare services, educate patients, and build trust through compelling visual content."
            benefits="Benefits"
            benefitsdesc = "Enhances patient education, builds trust, increases engagement, improves communication & boosts brand awareness."
          />
          <ServiceCard
            icon={<LuFileCode2 />}
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