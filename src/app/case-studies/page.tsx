'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
s
const caseStudies = [
  {
    title: "Pleasurē",
    description: "Unlocking insight and driving transformation for a leading pharmaceutical laboratory.",
    image: "/aboutimage.jpg",
    slug: "pleasure"
  },
  {
    title: "Innovatē",
    description: "Delivering innovative solutions that create lasting impact.",
    image: "/aboutimage.jpg",
    slug: "innovatie"
  },
  {
    title: "Elevatē",
    description: "Helping businesses reach new heights through digital experiences.",
    image: "/aboutimage.jpg",
    slug: "elevate"
  }
];

export default function CaseStudiesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-12">Case Studies</h1>
      <div className="grid md:grid-cols-3 gap-12">
        {caseStudies.map((study) => (
          <div key={study.slug} className="flex flex-col">
            <div className="w-full h-56 relative mb-6">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">{study.title}</h2>
            <p className="text-gray-700 mb-4">{study.description}</p>
            <Link
              href={`/case-studies/${study.slug}`}
              className="text-blue-600 font-medium hover:underline mt-auto"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}