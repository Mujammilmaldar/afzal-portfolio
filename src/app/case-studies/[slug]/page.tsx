"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const CaseStudies: Record<
  string,
  {
    title: string;
    description: string;
    website: string;
    location: string;
    sliderImages: string[];
    challenge: string[];
    challengeDetail: {
      awarenessText: string;
      marketingText: string;
      digitalText: string;
    };
    solution: string;
    solutionImage: string;
    results: {
      text: string[];
      metrics: string[];
    };
  }
> = {
  "endovascular-clinic": {
    title: "Endovascular Clinic",
    website: "www.endovascularclinic.in",
    location: "Mumbai",
    description:
      "Endovascular Clinic is a specialized medical center offering advanced interventional radiology procedures. The clinic needed to build a digital presence to educate patients about minimally invasive, image-guided treatments.",
    sliderImages: [
      "/endovascular-clinic/e1.webp",
      "/endovascular-clinic/e2.webp",
      "/endovascular-clinic/e3.webp",
      "/endovascular-clinic/e4.webp",
      "/endovascular-clinic/e5.webp",
      "/endovascular-clinic/e6.webp",
    ],
    challenge: [
      "Endovascular Clinic is a specialized medical center offering advanced interventional radiology procedures such as varicose veins treatment and prostate artery embolization. The clinic wanted to build a digital presence that spoke directly to patients—bypassing traditional referral-based channels—and educating them about minimally invasive, image-guided treatments.",
      "The project faced three critical challenges:",
    ],
    challengeDetail: {
      awarenessText:
        "Low Awareness of Interventional Radiology Among Patients: Interventional radiology was traditionally known as a supporting specialty. Most patients were unaware that procedures like EVLT (Endovenous Laser Treatment) or PAE (Prostate Artery Embolization) could be performed by interventional radiologists.",
      marketingText:
        "Need for Direct-to-Patient Marketing: The clinic wanted to generate awareness and inquiries directly from patients searching online, without depending on referrals from other specialists.",
      digitalText:
        "No Existing Website or Digital Footprint: There was no digital platform or patient-facing content to explain the procedures, showcase expertise, or convert visitors into leads.",
    },
    solution:
      "We developed a comprehensive digital marketing strategy focused on patient education and lead generation. This included building a fast, mobile-friendly website with dedicated landing pages for high-intent searches, launching targeted Google Ads campaigns, implementing SEO optimization for procedure-specific keywords, optimizing local listings, and integrating video content to build trust and engagement.",
    solutionImage: "/about.webp",
    results: {
      text: [
        "The digital strategy implemented for Endovascular Clinic yielded strong, measurable outcomes. By combining targeted Google Ads, search engine optimization, and patient-focused content, the clinic successfully positioned itself as a direct-to-patient provider of interventional radiology services in Mumbai.",
      ],
      metrics: [
        "The clinic received direct enquiries from patients via website forms, click-to-call, and WhatsApp, reducing dependency on referral-based networks.",
        "Key service-related keywords started ranking in the top search results,increasing visibility for procedure-specific searches",
        "The website’s organic impressions and click-through rates increased significantly due to relevant, structured content and strong internal linking.",
        "The Google Business Profile began appearing in the Top 3 local listings",
        "Embedding the clinic profile video and procedure explainer videos boosted dwell time, reduced bounce rate &amp; Higher lead conversion.",
      ],
    },
  },
  hvs: {
    title: "Heart & Vascular Superspeciality Hospitals",
    website: "www.hvshospitals.com",
    location: "Mumbai",
    description:
      "Heart & Vascular Superspeciality Hospitals, with centers in Ghatkopar and Dadar, aimed to establish a strong digital presence. The project involved building a fast, SEO-optimized website with advanced search, multilingual support, and conversion tracking, coupled with a hyper-local Google Ads strategy for immediate lead generation.",
    sliderImages: [
      "/hvs/HVS-CaseStudyNewImage.webp",
      "/hvs/h2.webp",
      "/hvs/h3.webp",
      "/hvs/h4.webp",
      "/hvs/h5.webp",
      "/hvs/h6.webp",
      "/hvs/h7.webp",
      "/hvs/h8.webp",
    ],
    challenge: [
      "Heart & Vascular Superspeciality Hospitals required a robust online presence to support local patient acquisition and establish brand authority. The project addressed multiple digital and technical challenges that spanned performance, personalization, and analytics.",
      "Key challenges included:",
    ],
    challengeDetail: {
      awarenessText:
        "Advanced Search Functionality: Patients needed to easily search for conditions, treatments, doctors, testimonials, and case studies across the site.",
      marketingText:
        "Conversion Tracking and Lead Attribution: Accurate tracking of calls, form submissions, and WhatsApp interactions was essential for campaign measurement.",
      digitalText:
        "Multi-location & Multilingual Support: The platform had to serve Ghatkopar and Dadar with region-specific content, available in English, Marathi, and Gujarati for broader accessibility.",
    },
    solution:
      "We built a high-performance website using Next.js with server-side rendering for speed and SEO, supported by a custom CMS for internal content control. Integrated Google Tag Manager and GA4 tracked all conversions. We launched hyper-local Google Ads campaigns targeting Ghatkopar and Dadar separately, focused on high-intent keywords and services. SEO implementation included schema markup and content structured for Google’s Search Generative Experience.",
    solutionImage: "/about.webp",
    results: {
      text: [
        "The digital strategy delivered measurable impact within the first six months. From immediate lead generation via Google Ads to long-term SEO-driven visibility, the project significantly elevated HVS Hospitals’ local and digital footprint.",
      ],
      metrics: [
        "Hyper-local Google Ads campaigns generated qualified appointment leads from Day 1.",
        "Website ranked for high-intent queries related to procedures, doctors, and location-based searches across Google Search and AI Overviews.",
        "Structured, multilingual content and schema markup improved visibility in rich results and AI-generated answer boxes.",
        "Organic traffic consistently increased as a result of SGE-optimized, fast-loading, mobile-first content.",
        "Conversion tracking enabled accurate measurement of patient interactions across forms, calls, and WhatsApp.",
      ],
    },
  },
  "masina-heart-institute": {
    title: "Masina Heart Institute",
    website: "www.masinaheartinstitute.com",
    location: "Mumbai",
    description:
      "Masina Heart Institute, a newly launched cardiac unit, aimed to establish itself as a leading heart care destination in South Mumbai. With no online or offline visibility and facing stiff local competition, the institute needed a strategic digital marketing push to gain patient trust and generate rapid consultations.",
    sliderImages: [
      "/masina/m1.webp",
      "/masina/m2.webp",
      "/masina/m3.webp",
      "/masina/m4.webp",
      "/masina/m5.webp",
      "/masina/m6.webp",
    ],
    challenge: [
      "Masina Heart Institute needed to build digital credibility from scratch while competing with an established hospital in close proximity. The focus was on quickly generating footfall while establishing trust in a high-risk specialty.",
      "Key challenges included:",
    ],
    challengeDetail: {
      awarenessText:
        "No Online or Offline Presence: The institute lacked a website, social media profiles, and visibility on platforms like Google My Business.",
      marketingText:
        "Tough Local Competition & Lack of Trust: An established hospital nearby dominated patient consideration. Masina Heart Institute needed to earn credibility rapidly in a specialty where trust is paramount.",
      digitalText:
        "Urgent Need for Patient Footfall: With no organic traction, the hospital needed rapid lead generation to fill appointments and admissions quickly.",
    },
    solution:
      "We launched a multi-pronged strategy involving hyper-targeted Google Ads, search engine optimization, video marketing, and social media campaigns. A local SEO strategy was implemented alongside engaging video content and digital PR. Social media platforms were used to position the hospital as 'South Mumbai’s Advanced Heart Specialist Hospital', increasing community trust and awareness.",
    solutionImage: "/about.webp",
    results: {
      text: [
        "Within 4 months, Masina Heart Institute achieved Page 1 Google rankings for key cardiac-related searches and generated 70% of its initial patients through direct digital marketing. Video-led content positioned the hospital as a trusted cardiac care center in South Mumbai.",
      ],
      metrics: [
        "70% of initial patients came from direct digital efforts including Google Search and Ads.",
        "The website ranked on Page 1 of Google for high-intent cardiac-related keywords within 4 months.",
        "Video marketing on social media significantly increased local engagement and brand recall.",
        "Event-based campaigns (e.g., World Heart Day) helped build community connections and awareness.",
        "Patient testimonials and surgery case studies enhanced online credibility and trust in the hospital’s expertise.",
      ],
    },
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!slug || !CaseStudies[slug]) {
    return <div className="text-center py-10">Case study not found.</div>;
  }

  const study = CaseStudies[slug];

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

  const chunkedSlides = chunkArray(study.sliderImages, slidesToShow);

  // Auto-advance slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === chunkedSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [chunkedSlides.length]);

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
    <div className="container mx-auto">
      <div className="px-4 md:px-8 space-y-16">
        <div className="w-full mx-auto mb-5">
          <div className="card-title bg-light p-6">
            <h1 className="text-3xl! lg:text-4xl! font-bold  text-primary text-center">
              {study.title}
            </h1>
          </div>
        </div>

        {/* Project Overview */}
        <div className="py-12 mx-auto mb-5">
          <h2 className="text-2xl! md:text-3xl! font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Project Overview
          </h2>
          <p className="text-lg text-blue-800 font-medium">
            Client: {study.title} | Location: {study.location} | Website:{" "}
            {study.website}
            <br />
            Scope of Work: Google Ads, SEO, Local Listings, Video Integration
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {study.challenge[0]}
          </p>
        </div>

        {/* Image Slider */}
        <div className="w-full bg-gray-100 py-12">
          <div className="max-w-full mx-auto px-4">
            <h2 className="text-3xl! md:text-3xl font-bold mb-8 text-left text-blue-900">
              Digital Impact: Proven Results from Our Campaigns
            </h2>

            <div className="relative overflow-hidden">
              {/* Previous Arrow */}
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
                onClick={goToPrevSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Slider Track */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {chunkedSlides.map((group, index) => (
                  <div
                    key={index}
                    className="min-w-full flex px-2 space-x-4 justify-center"
                  >
                    {group.map((img, i) => (
                      <div key={i} className="relative w-full h-64">
                        <Image
                          src={img}
                          alt={`Slide ${index * slidesToShow + i + 1}`}
                          fill
                          className="object-cover rounded-lg shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Next Arrow */}
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
                onClick={goToNextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Bullets */}
              <div className="flex justify-center mt-4 space-x-2">
                {chunkedSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl! md:text-3xl font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Challenges
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {study.challenge[1]}
          </p>
          <div className="space-y-8 mt-8 pl-2 border-l-4 border-blue-500">
            <div className="pl-6">
              <h3 className="font-semibold text-xl! text-blue-800 mb-2">
                Low Awareness of Interventional Radiology:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {study.challengeDetail.awarenessText}
              </p>
            </div>
            <div className="pl-6">
              <h3 className="font-semibold text-xl! text-blue-800 mb-2">
                Need for Direct-to-Patient Marketing:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {study.challengeDetail.marketingText}
              </p>
            </div>
            <div className="pl-6">
              <h3 className="font-semibold text-xl! text-blue-800 mb-2">
                No Existing Digital Footprint:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {study.challengeDetail.digitalText}
              </p>
            </div>
          </div>
        </div>
        {/* Strategy Section */}
        <div className="bg-gray-50">
          <div className="w-full px-4 md:px-8 py-6 ">
            <h2 className="text-3xl! md:text-3xl font-bold mb-8 text-blue-900 text-left">
              Strategy &amp; Implementation
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Column 1 */}
              <div>
                <ul className="space-y-6 text-gray-700 leading-relaxed">
                  <li>
                    <p className="font-bold text-lg">1. Website Development</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        Designed a fast, mobile-friendly website focused on
                        patient education and lead generation.
                      </li>
                      <li>
                        Created dedicated landing pages for high-intent
                        searches.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="font-bold text-lg">2. Google Ads Campaigns</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        Launched search ad campaigns for procedure-related
                        keywords.
                      </li>
                      <li>
                        Used location targeting to attract patients from Mumbai.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="font-bold text-lg">
                      3. Search Engine Optimization (SEO)
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        Identified high-intent, procedure-specific keywords.
                      </li>
                      <li>
                        Created SEO-optimized content for:
                        <ul className="list-disc list-inside ml-6">
                          <li>Conditions and treatments</li>
                          <li>Doctor bio</li>
                          <li>Blogs</li>
                        </ul>
                      </li>
                      <li>
                        Built high-quality backlinks to increase domain
                        authority.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <ul className="space-y-6 text-gray-700 leading-relaxed">
                  <li>
                    <p className="font-bold text-lg">
                      4. Local SEO &amp; Google Business Optimization
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Claimed and optimized Google Business Profile.</li>
                      <li>
                        Added clinic photos, videos, and regular updates to
                        boost local visibility.
                      </li>
                      <li>
                        Increased positive Google reviews to boost patient trust
                        and confidence.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="font-bold text-lg">
                      5. Video Integration for Trust &amp; Engagement
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Produced a clinic profile video.</li>
                      <li>
                        Added procedure videos explaining how treatments work.
                      </li>
                      <li>
                        Embedded videos on landing pages to improve engagement
                        metrics, such as:
                        <ul className="list-disc list-inside ml-6">
                          <li>Increased dwell time</li>
                          <li>Reduced bounce rate</li>
                          <li>Better conversion trust signals</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-full mx-auto mb-12">
          <h2 className="text-3xl! md:text-3xl font-bold mb-6 text-blue-900 pb-2 border-b border-gray-200">
            Results
          </h2>
          {study.results.text.map((text, idx) => (
            <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
              {text}
            </p>
          ))}
          <div className="mt-10">
            <h3 className="font-semibold text-xl! text-blue-800 mb-4">
              Key Achievements:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {study.results.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg"
                >
                  <div className="text-blue-600 font-bold text-xl">•</div>
                  <div className="text-gray-800 font-medium">{metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
