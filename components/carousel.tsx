"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function Carousel({ children, className = "" }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % children.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, children.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % children.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + children.length) % children.length);
    setIsAutoPlay(false);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children.map((child, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        size="icon"
        variant="outline"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setIsAutoPlay(false);
            }}
            className={`h-2 rounded-full transition-all ${idx === current ? "bg-primary w-8" : "bg-muted w-2"}`}
          />
        ))}
      </div>
    </div>
  );
}
