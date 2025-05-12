"use client";
import { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  activeIndex: number;
  onActivate: (idx: number) => void;
}

export function ServiceCard({
  icon,
  title,
  description,
  index,
  activeIndex,
  onActivate,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasActivated, setHasActivated] = useState(false);

  useEffect(() => {
    if (hasActivated || index !== activeIndex) return;
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const threshold = window.innerHeight * 0.2; // 20% from top
      if (rect.top <= threshold) {
        setHasActivated(true);
        onActivate(index + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, hasActivated, index, onActivate]);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const show = isMobile && hasActivated;

  return (
    <div ref={ref} className="cards-style">
      <div
        className={`main-card-service group p-2 py-5 md:p-5 lg:p-10 relative shadow-sm transition flex gap-4 overflow-hidden cursor-pointer ${
          show ? "show-on-scroll" : ""
        }`}
      >
        <div className="text-primary text-4xl">{icon}</div>
        <div className="content px-4">
          <h3 className="text-lg font-semibold text-dark text-left mb-3">
            {title}
          </h3>
          <p className="text-gray-500 text-sm text-left mb-4">{description}</p>
        </div>
        <div className="down-side-content absolute">
          <div className="card-heading text-center">
            <h3 className="text-white!">Card Benefits for Afzal Sir</h3>
          </div>
          <div className="content text-center w-full mt-3 flex items-center justify-center">
            <p className="text-white! w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              praesentium vel laborum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceList({ cards }: { cards: { icon: ReactNode; title: string; description: string; }[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActivate = (next: number) => setActiveIndex(next);

  return (
    <>
      {cards.map((card, i) => (
        <ServiceCard
          key={i}
          icon={card.icon}
          title={card.title}
          description={card.description}
          index={i}
          activeIndex={activeIndex}
          onActivate={handleActivate}
        />
      ))}
    </>
  );
}

// CSS classes required:
// .down-side-content { /* as before */ }
// .main-card-service.show-on-scroll .down-side-content { transform: translate(-50%,