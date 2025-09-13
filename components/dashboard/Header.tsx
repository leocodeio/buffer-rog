"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const currentPath = usePathname();

  return (
    <header
      className={`bg-[#F8CB46] py-6 px-4 ${
        currentPath === "/dashboard/main" ? "bg-red-500" : ""
      }`}
    >
      <div className="flex flex-col gap-3">
        {/* Top Row: Blinkit and User Icon */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-sm">Blinkit in</h1>
            <h2 className="font-bold text-xl leading-tight">16 minutes</h2>
          </div>
          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Middle Row: Location */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold">HOME - </span>
          <span className="text-xs font-medium">
            Sujal Dave, Ratanada, Jodhpur (Raj)
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Search Bar */}
        <div className="relative my-2">
          <input
            type="text"
            placeholder='Search "ice-cream"'
            className="w-full py-2 pl-9 pr-9 bg-white rounded-lg text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
