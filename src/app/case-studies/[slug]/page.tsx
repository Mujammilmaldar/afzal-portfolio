"use client";

import { useParams } from "next/navigation";
import HVSCaseStudy from "@/components/HVSCaseStudy";
import EndovascularClinic from "@/components/EndovascularClinic";
import MasinaHeartCaseStudy from "@/components/MasinaHeartCaseStudy";

export default function CaseStudyPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (slug === "hvs") {
    return (
      <HVSCaseStudy />
    )
  }
  else if (slug == "endovascular-clinic"){
    return (
      <EndovascularClinic />
    )
  }
  else if (slug == "masina-heart-institute"){
    return (
      <MasinaHeartCaseStudy />
    )
  }
  else {
    return (
      <div>
        <h1>Case Study Not Found</h1>
      </div>
    )
  }
}
