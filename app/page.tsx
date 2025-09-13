import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImageSlideShow } from "@/components/ImageSlideShow";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px]">
      <div className="w-full max-w-[1200px] mx-auto row-start-3">
        <ImageSlideShow />
      </div>

      <h3 className="text-center">India's last minute app</h3>
      
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-md overflow-hidden p-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-1">Sujal</h2>
          <p className="text-gray-400 mb-6">78277XXXX</p>
          
          <button className="w-full bg-[#ff1557] text-white py-4 px-6 rounded-full mb-4 flex items-center justify-center">
            <span className="mr-2 font-medium text-lg">Login with</span>
            <span className="font-bold text-xl">zomato</span>
          </button>
          
          <p className="text-sm text-gray-400 mb-8">Access your saved addresses from Zomato automatically!</p>
          
          <a href="#" className="text-green-500 font-medium text-lg">or login with phone number</a>
        </div>
      </div>
    </main>
  );
}
