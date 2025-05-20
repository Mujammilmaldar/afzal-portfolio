"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const sliderImages = [
  "/masina/m1.webp",
  "/masina/m2.webp",
  "/masina/m3.webp",
  "/masina/m4.webp",
  "/masina/m5.webp",
  "/masina/m6.webp",
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
              Masina Heart Institute
            </h1>
          </div>
        </div>

        {/* Project Overview */}
        <div className="container py-12 mx-auto mb-5">
          <h2 className="text-2xl! md:text-3xl! font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Project Overview
          </h2>
          <p className="text-lg  font-medium">
            Client: Masina Heart Institute | Location: Mumbai | Website:
            <a
              href="www.masinaheartinstitute.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.masinaheartinstitute.com
            </a>
            <br />
            Scope of Work: Google Ads, Video &amp; Social Media, SEO
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Masina Heart Institute, a newly launched cardiac unit aimed to
            position itself as a top- tier heart care center in South Mumbai. It
            lacked brand awareness, both online &amp; offline and faced stiff
            competition from an established, well-known hospital located within
            a 5- kilometer radius.
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
                No Online or Offline Presence:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The unit had no digital footprint - no website, no social media
                channels, and no Google My Business visibility.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                Tough Local Competition:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                An already popular hospital in close proximity dominated the
                local market.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                Lack of Patient Trust:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a new cardiac unit, it lacked credibility and patient trust
                which is critical in a high-risk specialty like cardiac care.
              </p>
              <h3 className="font-semibold text-xl! text-primary ">
                Urgent Need for Patient Footfall:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The hospital needed to generate consultations and admissions
                rapidly to build momentum.
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
                <h3 className="text-xl! font-bold  mb-3">
                  Google Ads for Instant Leads
                </h3>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    Executed highly targeted Google Search campaigns using
                    high-intent keywords such as “heart hospital in Mumbai”,
                    “cardiac surgeon in Mumbai”, “cardiologist in Mumbai” and
                    procedure related keywords with precise location targeting
                    focused on South Mumbai.
                  </li>
                  <li>
                    Drove immediate patient inquiries and conversions by
                    capturing users actively searching for cardiac services on
                    Google.
                  </li>
                  <li>
                    Achieved instant presence on Google through strategic Google
                    Ads, allowing the new heart unit to compete alongside
                    established hospitals and significantly boost brand
                    visibility.
                  </li>
                </ul>
              </div>

              {/* Google Ads Strategy */}
              <div className="mb-10">
                <h3 className="text-xl! font-bold  mb-3">
                  Search Engine Optimization (SEO)
                </h3>
                <ul className="list-disc pl-8 space-y-2">
                  <li>
                    On-page optimization of service keywords with a strong local
                    SEO strategy.
                  </li>
                  <li>
                    Produced high-quality videos, including an institute profile
                    and complex surgery showcases, to build visitor trust and
                    increase website dwell time—an important SEO ranking factor.
                  </li>
                  <li>
                    Implemented digital PR strategies to secure brand mentions
                    on reputable news platforms, boosting the institute’s online
                    authority and enhancing EEAT (Expertise, Experience,
                    Authoritativeness, and Trustworthiness) in the eyes of
                    Google.
                  </li>
                  <li>
                    Developed a dedicated case study section on the website to
                    highlight high-end cardiac cases, reinforcing patient trust
                    and showcasing the institute’s clinical expertise.
                  </li>
                  <li>
                    Showcased patient testimonials from individuals who
                    underwent complex cardiac surgeries and procedures,
                    enhancing trust and confidence in the institute’s advanced
                    care capabilities.
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-xl! font-bold  mb-3">
                Social Media &amp; Video Marketing
                </h3>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Leveraged video-based social media marketing to raise awareness about the
                  institute as a specialized center for high-end cardiac care.</li>
                  <li>
                  Positioned the hospital as a dedicated heart facility in the neighborhood, making
                  people aware that expert cardiac care is available nearby.
                  </li>
                  <li>
                  Executed event-driven campaigns during World Heart Day to engage the local
                  community and encourage participation in hospital-led activities.
                  </li>
                  <li>Used targeted paid advertising to amplify the reach of video content and event
                  promotions across social media platforms.</li>
                  <li>Developed the narrative: “South Mumbai’s Advanced Heart Specialist Hospital.”</li>
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
          <h3 className="text-xl font-medium text-primary mb-4"></h3>
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-primary mb-2">
              Lead Generation
              </h4>
              <p className="text-gray-700">
              70% of initial patients came through direct digital marketing efforts (Google Search &amp;
                Ads).
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-primary mb-2">
              Brand Visibility &amp; Organic Growth
              </h4>
              <p className="text-gray-700">
              Within 4 months, the website began ranking on Page 1 of Google for primary keywords
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-primary">
              Video Engagement
              </h4>
              <p className="text-gray-700">
                <ul className="list-disc p-6">
                    <li>Video content on social media significantly boosted engagement, helping to
                    position the institute as a specialized heart hospital within the neighborhood.</li>
                    <li>Increased brand recognition and recall among the local audience through consistent,
                    high-quality content.</li>
                    <li>Improved brand perception, with audiences associating the hospital with expertise in
                    advanced cardiac care.</li>
                </ul>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-primary mb-2">
              Perception Shift
              </h4>
              <p className="text-gray-700">
              Positioned Masina Heart Institute as a trustworthy, high-end heart hospital in South
Mumbai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
