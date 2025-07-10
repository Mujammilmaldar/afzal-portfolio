// components/AnimatedFadeIn.tsx
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedFadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  triggerOffset?: string; // like "top 80%"
  className?: string;
}

const AnimatedFadeIn: React.FC<AnimatedFadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  triggerOffset = "top 90%",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dirMap = {
      up: { y: 50, x: 0 },
      down: { y: -50, x: 0 },
      left: { x: 50, y: 0 },
      right: { x: -50, y: 0 },
    };

    gsap.fromTo(
      ref.current,
      { opacity: 0, ...dirMap[direction] },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: triggerOffset,
        },
      }
    );
  }, [direction, delay, triggerOffset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimatedFadeIn;
