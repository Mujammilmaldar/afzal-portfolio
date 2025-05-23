"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const sliderImages = [
  "/endovascular-clinic/e1.webp",
  "/endovascular-clinic/e2.webp",
  "/endovascular-clinic/e3.webp",
  "/endovascular-clinic/e4.webp",
  "/endovascular-clinic/e5.webp",
  "/endovascular-clinic/e6.webp",
];

export default function HVSCaseStudy() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  // Slider auto-advance logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1024; // Tailwind's lg breakpoint
  const slidesToShow = isMobile ? 1 : 3;

  // Helper to chunk images into groups of `slidesToShow`
  const chunkArray = (arr: string[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedSlides = chunkArray(sliderImages, slidesToShow);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? chunkedSlides.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === chunkedSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="">
      <div className="px-2 lg:px-0 space-y-16">
        {/* Title Section */}
        <div className="container w-full mx-auto mb-5">
          <div className="card-title bg-light p-6">
            <h1 className="text-3xl! lg:text-4xl! font-bold text-primary text-center">
              Endovascular Clinic
            </h1>
          </div>
        </div>

        {/* Project Overview */}
        <div className="container py-12 mx-auto mb-5">
          <h2 className="text-2xl! md:text-3xl! font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Project Overview
          </h2>
          <p className="text-lg  font-bold">
            Client: Endovascular Clinic | Location: Mumbai | Website: www.endovascularclinic.in
            <br />
            Scope of Work: Google Ads, SEO, Local Listings, Video Integration
          </p>
            <br />
          <p className="mb-4 text-gray-700 leading-relaxed">
            Endovascular Clinic is a specialized medical center offering
            advanced interventional radiology procedures such as varicose veins
            treatment and prostate artery embolization. The clinic wanted to
            build a digital presence that spoke directly to patients—bypassing
            traditional referral-based channels—and educating them about
            minimally invasive, image-guided treatments.
          </p>
        </div>

        {/* Image Slider */}
        <div className="max-w-full! w-[100vw]! bg-gray-100 py-8">
          <div className="max-w-full mx-auto">
            <h2 className="text-2xl! container mb-4! md:text-3xl font-bold mb-8 text-left text-blue-900 px-4">
              Digital Impact: Proven Results from Our Campaigns
            </h2>

            {/* OUTER container just for positioning (no overflow rules) */}
            <div className="relative">
              {/* Prev Arrow (outside of the clipped area) */}
              <button
                className="absolute left-7 lg:-left-4 -bottom-10 lg:top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
                onClick={goToPrevSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 100 100"
                >
                  <g id="leftArrow">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="white"
                      stroke="#e0e0e0"
                      strokeWidth="2"
                    />
                    <path
                      d="M60,30 L40,50 L60,70"
                      fill="none"
                      stroke="#333"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>

              {/* Next Arrow */}
              <button
                className="absolute right-7 lg:-right-4 -bottom-10 lg:top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
                onClick={goToNextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 100 100"
                >
                  <g id="rightArrow">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="white"
                      stroke="#e0e0e0"
                      strokeWidth="2"
                    />
                    <path
                      d="M40,30 L60,50 L40,70"
                      fill="none"
                      stroke="#333"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>

              {/* INNER wrapper *that* actually hides overflow */}
              <div className="overflow-hidden min-h-60">
                {/* Your sliding track */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {chunkedSlides.map((group, index) => (
                    <div
                      key={index}
                      className="min-w-full flex px-0 lg:px-2 space-x-4 justify-center"
                    >
                      {group.map((img, i) => (
                        <div key={i} className="relative w-full aspect-[16/13]">
                          <Image
                            src={img}
                            alt="not found"
                            fill
                            className="object-cover rounded-lg shadow-md"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* Bullets are outside the clipped area too */}
              <div className="flex justify-center mt-4 space-x-2">
                {chunkedSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Challenges Section */}
        <div className="container max-w-4xl mx-auto mb-12!">
          <h2 className="text-3xl! md:text-3xl font-bold mb-6 text-primary pb-2 border-b border-gray-200">
            Challenges
          </h2>
          <div className="space-y-8 mt-8 pl-2 border-l-4 border-primary">
            <div className="pl-6">
              <h3 className="font-semibold text-xl! text-primary ">
                Low Awareness of Interventional Radiology Among Patients
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Interventional radiology was traditionally known as a supporting
                specialty. Most patients were unaware that procedures like EVLT
                (Endovenous Laser Treatment) or PAE (Prostate Artery
                Embolization) could be performed by interventional radiologists.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                Need for Direct-to-Patient Marketing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The clinic wanted to generate awareness and inquiries directly
                from patients searching online, without depending on referrals
                from other specialists.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                No Existing Website or Digital Footprint
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                There was no digital platform or patient-facing content to
                explain the procedures, showcase expertise, or convert visitors
                into leads.
              </p>
            </div>
          </div>
        </div>
        {/* Strategy & Solution Section */}
        <div className="container bg-gray-50 mb-12!">
  <div className="w-full px-4 md:px-8 py-6">
    <h2 className="text-3xl! md:text-3xl font-bold mb-8 text-blue-900 text-left">
      Strategy &amp; Implementation
    </h2>
    <div className="grid lg:grid-cols-2 gap-5 text-gray-700">
      {/* Website Technology Stack */}
      <div className="mb-10">
        <h3 className="text-xl! font-bold  mb-3">Website Development</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li>Designed a fast, mobile-friendly website focused on patient education and lead generation.</li>
          <li>Created dedicated landing pages for high-intent searches.</li>
        </ul>
      </div>

      {/* Google Ads Strategy */}
      <div className="mb-10">
        <h3 className="text-xl! font-bold  mb-3">Google Ads Campaigns</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li>Launched search ad campaigns for procedure-related keywords.</li>
          <li>Used location targeting to attract patients from Mumbai.</li>
        </ul>
      </div>

      {/* SEO */}
      <div className="mb-10">
        <h3 className="text-xl! font-bold  mb-3">Search Engine Optimization (SEO)</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li>Identified high-intent, procedure-specific keywords.</li>
          <li>
            Created SEO-optimized content for:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Conditions and treatments</li>
              <li>Doctor bio</li>
              <li>Blogs</li>
            </ul>
          </li>
          <li>Built high-quality backlinks to increase domain authority.</li>
        </ul>
      </div>

      {/* Local SEO */}
      <div className="mb-10">
        <h3 className="text-xl! font-bold  mb-3">Local SEO &amp; Google Business Optimization</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li>Claimed and optimized Google Business Profile.</li>
          <li>Added clinic photos, videos, and regular updates to boost local visibility.</li>
          <li>Increased positive Google reviews to boost patient trust and confidence.</li>
        </ul>
      </div>

      {/* Video Integration */}
      <div className="mb-10">
        <h3 className="text-xl! font-bold  mb-3">Video Integration for Trust &amp; Engagement</h3>
        <ul className="list-disc pl-8 space-y-2">
          <li>Produced a clinic profile video.</li>
          <li>Added procedure videos explaining how treatments work.</li>
          <li>
            Embedded videos on landing pages to improve engagement metrics, such as:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Increased dwell time</li>
              <li>Reduced bounce rate</li>
              <li>Better conversion trust signals</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


        {/* Results Section */}
        <div className="container max-w-full mx-auto mb-12!">
          <h2 className="text-3xl! md:text-3xl font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Results
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            The digital strategy implemented for Endovascular Clinic yielded
            strong, measurable outcomes. By combining targeted Google Ads,
            search engine optimization, and patient- focused content, the clinic
            successfully positioned itself as a direct-to-patient provider of
            interventional radiology services in Mumbai.
          </p>
          <div className="grid gap-4 ">
            <ul className="w-full! gap-4  grid md:grid-cols-2 list-disc list-inside space-y-4 text-gray-700">
              <li className="bg-blue-100 text-gray-700 p-4 rounded-sm">
                The clinic received direct enquiries from patients via website
                forms, click-to-call, and WhatsApp, reducing dependency on
                referral-based networks.
              </li>
              <li className="bg-blue-100 text-gray-700 p-4 rounded-sm">
                Key service-related keywords started ranking in the top search
                results, increasing visibility for procedure-specific searches.
              </li>
              <li className="bg-blue-100 text-gray-700 p-4 rounded-sm">
                The website’s organic impressions and click-through rates
                increased significantly due to relevant, structured content and
                strong internal linking.
              </li>
              <li className="bg-blue-100 text-gray-700 p-4 rounded-sm">
                The Google Business Profile began appearing in the Top 3 local
                listings.
              </li>
              <li className="bg-blue-100 text-gray-700 p-4 rounded-sm">
                Embedding the clinic profile video and procedure explainer
                videos boosted dwell time, reduced bounce rate, and led to
                higher lead conversions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
