"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SlideImage = {
  id: string;
  name: string;
  path: string;
};

const SLIDE_IMAGES: SlideImage[] = [
  {
    id: "1",
    name: "Image 1",
    path: "/assets/auth/auth_01.png",
  },
  {
    id: "2",
    name: "Image 2",
    path: "/assets/auth/auth_02.png",
  },
  {
    id: "3",
    name: "Image 3",
    path: "/assets/auth/auth_03.png",
  },
  {
    id: "4",
    name: "Image 4",
    path: "/assets/auth/auth_04.png",
  },
  {
    id: "5",
    name: "Image 5",
    path: "/assets/auth/auth_05.png",
  },
  {
    id: "6",
    name: "Image 6",
    path: "/assets/auth/auth_06.png",
  },
  {
    id: "7",
    name: "Image 7",
    path: "/assets/auth/auth_07.png",
  },
];

export function ImageSlideShow() {
  const [isHovered, setIsHovered] = useState(false);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const thirdRowRef = useRef<HTMLDivElement>(null);
  
  // Duplicate images for endless scroll effect
  const firstRowItems = [...SLIDE_IMAGES];
  const secondRowItems = [...SLIDE_IMAGES.slice().reverse()];
  const thirdRowItems = [...SLIDE_IMAGES];
  
  // Handle marquee animation
  useEffect(() => {
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;
    const thirdRow = thirdRowRef.current;
    if (!firstRow || !secondRow || !thirdRow) return;

    const animateMarquee = () => {
      if (isHovered) return;

      // First row moves from right to left
      if (firstRow.scrollLeft >= firstRow.scrollWidth / 2) {
        firstRow.scrollLeft = 0;
      } else {
        firstRow.scrollLeft += 1;
      }

      // Second row moves from left to right
      if (secondRow.scrollLeft <= 0) {
        secondRow.scrollLeft = secondRow.scrollWidth / 2;
      } else {
        secondRow.scrollLeft -= 1;
      }

      // Third row moves from right to left
      if (thirdRow.scrollLeft >= thirdRow.scrollWidth / 2) {
        thirdRow.scrollLeft = 0;
      } else {
        thirdRow.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(animateMarquee, 20);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section
      className="w-full py-12 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Product Gallery</h2>

      {/* First row - Left to Right */}
      <div
        ref={firstRowRef}
        className="flex gap-6 mb-6 overflow-hidden whitespace-nowrap"
      >
        {firstRowItems.map((image) => (
          <ImageCard
            key={`row1-${image.id}`}
            image={image}
          />
        ))}
        {firstRowItems.map((image) => (
          <ImageCard
            key={`row1-dup-${image.id}`}
            image={image}
          />
        ))}
      </div>

      {/* Second row - Right to Left */}
      <div
        ref={secondRowRef}
        className="flex gap-6 overflow-hidden whitespace-nowrap mb-6"
      >
        {secondRowItems.map((image) => (
          <ImageCard
            key={`row2-${image.id}`}
            image={image}
          />
        ))}
        {secondRowItems.map((image) => (
          <ImageCard
            key={`row2-dup-${image.id}`}
            image={image}
          />
        ))}
      </div>

      {/* Third row - Left to Right */}
      <div
        ref={thirdRowRef}
        className="flex gap-6 overflow-hidden whitespace-nowrap"
      >
        {thirdRowItems.map((image) => (
          <ImageCard
            key={`row3-${image.id}`}
            image={image}
          />
        ))}
        {thirdRowItems.map((image) => (
          <ImageCard
            key={`row3-dup-${image.id}`}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}

function ImageCard({ image }: { image: SlideImage }) {
  return (
    <div className="inline-flex flex-col min-w-[120px] max-w-[150px] p-3 rounded-xl bg-white shadow-sm border border-gray-100">
      <div className="relative h-[120px] w-[120px] mb-2 mx-auto">
        <Image
          src={image.path}
          alt={image.name}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-center text-sm font-medium">{image.name}</p>
    </div>
  );
}