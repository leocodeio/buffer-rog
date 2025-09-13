import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PrintStorePage() {
  return (
    <div className="min-h-screen bg-amber-50 p-4 flex flex-col items-center">
      <div className="max-w-md pt-8">
        <h1 className="text-3xl font-bold mb-1 ml-2 text-center">
          Print Store
        </h1>
        <p className="text-gray-400 text-sm mb-6 ml-2 text-center">
          Blinkit ensures secure prints at every stage
        </p>

        <div className="bg-white p-4 w-full rounded-md shadow-sm flex gap-4 items-center">
          <div>
            <h2 className="font-bold mb-3">Documents</h2>
            <ul className="space-y-1 text-gray-500 text-sm mb-4">
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">◆</span>
                Price starting at rs 3/page
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">◆</span>
                Paper quality: 70 GSM
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">◆</span>
                Single side prints
              </li>
            </ul>

            <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 h-auto rounded-sm">
              Upload Files
            </Button>
          </div>
          <div className="relative w-24 h-24">
            <Image
              src="/assets/dashboard/print/print.png"
              alt="Document icon"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
