"use client";

import { ImageSlideShow } from "@/components/landing/ImageSlideShow";
import { LandingImgLogo } from "@/components/landing/LandingImgLogo";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-3">
      <div className="w-full max-w-[1200px] mx-auto">
        <ImageSlideShow />
      </div>

      <LandingImgLogo className="w-auto h-[100px] mx-auto" />

      <p className="text-center text-lg font-bold">India's last minute app</p>

      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg shadow-gray-300 overflow-hidden p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-1">xxxx</h2>
        <p className="text-gray-400 mb-6">xxxxxxxxx</p>

        <Button
          onClick={() => router.push("/dashboard/main")}
          className="w-full h-12 bg-[#ff1557] text-white py-4 px-6 rounded-lg mb-4 flex items-center justify-center"
        >
          <span className="mr-2 font-medium text-lg">Login with</span>
          <span className="font-bold text-xl">zomato</span>
        </Button>

        <p className="text-sm text-gray-400 mb-8">
          Access your saved addresses from Zomato automatically!
        </p>

        <a href="#" className="text-green-600 text-lg">
          or login with phone number
        </a>
      </div>
    </main>
  );
}
