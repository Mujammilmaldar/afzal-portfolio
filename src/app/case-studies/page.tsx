'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "Masina Heart Institute",
    description:
      "70% of initial patients came via Google Search & Ads. In 4 months, the website ranked on Page 1 for key terms. Video content boosted social media engagement, enhanced local brand recognition, and positioned the hospital as a trusted expert in advanced cardiac care in South Mumbai.",
    image: "/MasinaHeartInstitute-CaseStudy-DigitalMarketingConsultantMumbai.webp",
    pathforurl: "/masina-heart-institute",
  },
  {
    title: "HVS Hospitals",
    description:
      "Hyper-local Google Ads delivered qualified leads from Day 1. The website ranked for high-intent keywords across Google and AI Overviews, including procedures, doctors, and local queries. Optimized content drove steady organic traffic growth, enhancing visibility, credibility, and appointment bookings.",
    image: "/HVS-CaseStudy-DigitalMarketingConsultantMumbai.webp",
    pathforurl: "/hvs",
  },
  {
    title: "Endovascular Clinic",
    description:
      "The digital strategy drove direct patient enquiries via forms, calls, and WhatsApp, reducing referral dependency. SEO boosted rankings for key services, while structured content increased impressions and CTR. Video integration improved dwell time, reduced bounce rates, and enhanced mobile lead conversions. GMB ranked Top 3 locally.",
    image: "/EndovascularClinic-DigitalMarketingConsultantMumbai.webp",
    pathforurl: "/endovascular-clinic",
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="container mx-auto mb-14! px-2 ">
      <div className="card-title bg-light p-6 mb-14">
      <h1 className="text-4xl font-bold  text-primary text-center">Case Studies</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {caseStudies.map((study) => (
          <div
            key={study.pathforurl}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            <div className="relative w-full as aspect-[16/13]">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-3xl! font-semibold text-blue-800 mb-3">{study.title}</h2>
              <p className="text-gray-700 text-sm flex-1 leading-relaxed">
                {study.description}
              </p>
              <Link
                href={`/case-studies/${study.pathforurl}`}
                className="mt-5 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}