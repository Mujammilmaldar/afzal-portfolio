"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const sliderImages = [
  "/hvs/HVS-CaseStudyNewImage.webp",
  "/hvs/h2.webp",
  "/hvs/h3.webp",
  "/hvs/h4.webp",
  "/hvs/h5.webp",
  "/hvs/h6.webp",
  "/hvs/h7.webp",
  "/hvs/h8.webp",
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
              Heart &amp; Vascular Superspeciality Hospitals
            </h1>
          </div>
        </div>

        {/* Project Overview */}
        <div className="container py-12 mx-auto mb-5">
          <h2 className="text-2xl! md:text-3xl! font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Project Overview
          </h2>
          <p className="text-lg text-primary font-medium">
            Client: Heart &amp; Vascular Superspeciality Hospitals | Location:
            Mumbai | Website:
            <a
              href="www.hvshospitals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.hvshospitals.com
            </a>
            <br />
            Scope of Work: Google Ads &amp; SEO
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Heart &amp; Vascular Superspeciality Hospitals, a newly launched
            brand with centers in Ghatkopar and Dadar, needed a online presence
            to establish authority &amp; drive local patient acquisition. The
            goal was to build a high-performing, SEO-optimized platform with
            integrated conversion tracking and execute a hyper-local Google Ads
            strategy to generate appointments quickly.
          </p>
        </div>

        {/* Image Slider */}
        <div className="max-w-full! w-[100vw]! bg-gray-100 py-12">
          <div className="max-w-full mx-auto">
            <h2 className="text-2xl! md:text-3xl font-bold mb-8 text-left text-blue-900 px-4">
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
                Advanced Search Functionality on Website
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patients needed to search for conditions, treatments, doctors,
                testimonials, and case studies with ease.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                High Performance and Dynamic Content
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The platform had to load fast and dynamically deliver content
                based on user queries and location.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                Conversion Tracking and Lead Attribution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Key actions like call clicks, form submissions, and WhatsApp
                interactions needed to be tracked effectively.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                Multi-location, Multilingual Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The client required location-specific content for Ghatkopar and
                Dadar.
              </p>
              <p>
                Content had to be available in English, Marathi &amp; Gujrati
                for better regional reach.
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
            <div className="grid lg:grid-cols-2 gap-5">
            {/* Website Technology Stack */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">
                Website Technology Stack
              </h3>

              <div className="space-y-4">
                {/* Frontend */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    Frontend: Next.js and React
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>Ensured fast load times</li>
                    <li>Excellent SEO via server-side rendering (SSR)</li>
                  </ul>
                </div>

                {/* Backend/Admin */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    Backend/Admin: Custom CMS
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>
                      Enabled easy internal content management across
                      specialties, locations, and languages
                    </li>
                  </ul>
                </div>

                {/* Tracking */}
                <div>
                  <p className="font-medium text-lg text-blue-700">Tracking</p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>
                      Implemented API integrations with Google Tag Manager and
                      Google Analytics 4
                    </li>
                    <li>
                      Tracked phone calls, form submissions, and WhatsApp clicks
                      as conversion events
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Google Ads Strategy */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">
                Google Ads Strategy
              </h3>

              <div className="space-y-4">
                {/* Hyper-local Targeting */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    Hyper-local Targeting
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>Separate campaigns for Ghatkopar and Dadar</li>
                    <li>Ad groups built around high-intent keywords</li>
                  </ul>
                </div>

                {/* Doctor-Focused Campaigns */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    Service &amp; Doctor-Focused Campaigns
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>
                      Promoted individual treatments and consultants to capture
                      direct search traffic
                    </li>
                  </ul>
                </div>

                {/* Budget Optimization */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    Budget Optimization
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>
                      Used real-time data from GA4 and GTM to identify
                      top-performing keywords
                    </li>
                    <li>Optimized budget allocation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEO & Generative Search Optimization */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                SEO &amp; Generative Search Optimization
              </h3>

              <div className="space-y-4">
                {/* Content Optimization */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    Content Optimization
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>
                      Created rich, structured content around medical
                      conditions, procedures, and doctor bios
                    </li>
                    <li>
                      Ensured schema markup for doctors, procedures, conditions
                      &amp; hospital to improve visibility in rich snippets
                    </li>
                  </ul>
                </div>

                {/* SGE Optimization */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    Optimizing for Search Generative Experience (SGE)
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>
                      Created Q&amp;A-style content to align with
                      conversational, AI-powered search engines
                    </li>
                    <li>
                      Integrated structured data for inclusion in AI-generated
                      answers and snippets
                    </li>
                  </ul>
                </div>

                {/* On-Page & Technical SEO */}
                <div>
                  <p className="font-medium text-lg text-blue-700">
                    On-Page &amp; Technical SEO
                  </p>
                  <ul className="list-disc list-inside ml-5 text-gray-700 space-y-1">
                    <li>Fast load times using Next.js SSR</li>
                    <li>Mobile optimization & Core Web Vitals compliance</li>
                    <li>
                      Internal linking across conditions, treatments, and
                      doctors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>

        {/* Results Section */}
        <div className="container max-w-full mx-auto mb-12!">
          <h2 className="text-3xl! md:text-3xl font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Results
          </h2>
          <h3 className="text-xl font-medium text-primary mb-4"></h3>
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-primary mb-2">
                Instant Lead Generation
              </h4>
              <p className="text-gray-700">
                Hyper-local Google Ads campaigns began delivering qualified
                leads from Day 1, driving appointment bookings.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-primary mb-2">
                Search Visibility Across Google &amp; AI-powered Results
              </h4>
              <p className="text-gray-700">
                The website started ranking on Google organic search and AI
                Overviews results for high-intent keywords related to:
                <ul className="list-disc p-6 m-0">
                  <li>Medical procedures</li>
                  <li>Doctor names and specialties</li>
                  <li>Location-based hospital queries</li>
                </ul>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-primary mb-2">
                Organic Traffic Growth
              </h4>
              <p className="text-gray-700">
                Structured and SGE-optimized content led to a consistent rise in
                organic traffic, boosting brand visibility and patient trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
