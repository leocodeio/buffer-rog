"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";

interface CategoryItem {
  name: string;
  image: string;
}

interface CategoryProps {
  title: string;
  items: CategoryItem[];
}

export default function CategorySlider({ title, items }: CategoryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    if (!scrollContainerRef.current) return;

    setIsDragging(false);
    scrollContainerRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = "grab";
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll-speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {/* <div className="flex gap-2">
          <button 
            onClick={() => scroll("left")}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div> */}
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide cursor-grab"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="flex-shrink-0 w-[140px] md:w-[160px] bg-gray-100 rounded-lg p-3 flex flex-col items-center cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-24 mb-2">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-xs text-center font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
