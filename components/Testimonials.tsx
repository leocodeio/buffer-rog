"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "CEO & Founder",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "/assets/auth/auth_01.png",
  },
  {
    id: "2",
    name: "Jane Doe",
    role: "CTO",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "/assets/auth/auth_02.png",
  },
  {
    id: "3",
    name: "John Smith",
    role: "COO",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "/assets/auth/auth_03.png",
  },
  {
    id: "4",
    name: "Richard Doe",
    role: "Designer",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "/assets/auth/auth_04.png",
  },
  {
    id: "5",
    name: "Gordon Doe",
    role: "Developer",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "/assets/auth/auth_05.png",
  },
  {
    id: "6",
    name: "John Doe",
    role: "CEO & Founder",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "/assets/auth/auth_06.png",
  },
  {
    id: "7",
    name: "Jane Smith",
    role: "Product Manager",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    avatar: "/assets/auth/auth_07.png",
  },
];

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const thirdRowRef = useRef<HTMLDivElement>(null);
  // Duplicate testimonials for endless scroll effect
  const firstRowItems = [...TESTIMONIALS];
  const secondRowItems = [...TESTIMONIALS.slice().reverse()];
  const thirdRowItems = [...TESTIMONIALS];
  // Handle marquee animation
  useEffect(() => {
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;
    const thirdRow = thirdRowRef.current;
    if (!firstRow || !secondRow || !thirdRow) return;

    const animateMarquee = () => {
      if (isHovered) return;

      // First row moves from right to left (normal direction)
      if (firstRow.scrollLeft >= firstRow.scrollWidth / 2) {
        firstRow.scrollLeft = 0;
      } else {
        firstRow.scrollLeft += 1;
      }

      // Second row moves from left to right (reverse direction)
      if (secondRow.scrollLeft <= 0) {
        secondRow.scrollLeft = secondRow.scrollWidth / 2;
      } else {
        secondRow.scrollLeft -= 1;
      }

      // Third row moves from right to left (normal direction)
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
      className="w-full py-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>

      {/* First row - Left to Right */}
      <div
        ref={firstRowRef}
        className="flex gap-6 mb-6 overflow-hidden whitespace-nowrap"
      >
        {firstRowItems.map((testimonial) => (
          <TestimonialCard
            key={`row1-${testimonial.id}`}
            testimonial={testimonial}
          />
        ))}
        {firstRowItems.map((testimonial) => (
          <TestimonialCard
            key={`row1-dup-${testimonial.id}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      {/* Second row - Right to Left */}
      <div
        ref={secondRowRef}
        className="flex gap-6 overflow-hidden whitespace-nowrap mb-6"
      >
        {secondRowItems.map((testimonial) => (
          <TestimonialCard
            key={`row2-${testimonial.id}`}
            testimonial={testimonial}
          />
        ))}
        {secondRowItems.map((testimonial) => (
          <TestimonialCard
            key={`row2-dup-${testimonial.id}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      {/* Third row - Left to Right */}
      <div
        ref={thirdRowRef}
        className="flex gap-6 overflow-hidden whitespace-nowrap"
      >
        {thirdRowItems.map((testimonial) => (
          <TestimonialCard
            key={`row3-${testimonial.id}`}
            testimonial={testimonial}
          />
        ))}
        {thirdRowItems.map((testimonial) => (
          <TestimonialCard
            key={`row3-dup-${testimonial.id}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="inline-flex flex-col min-w-[280px] max-w-[350px] p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        {testimonial.avatar ? (
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={`Avatar of ${testimonial.name}`}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
    </div>
  );
}