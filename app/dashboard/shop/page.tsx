"use client";

import Image from "next/image";
import { useState } from "react";

// Bestseller product type definition
type BestsellerProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: string;
};

export default function CartPage() {
  // Bestseller products data
  const bestsellerProducts: BestsellerProduct[] = [
    {
      id: 1,
      name: "Milk",
      price: 27,
      image: "/assets/dashboard/cart/bestsellers/bs_01.png",
      quantity: "500 ML",
    },
    {
      id: 2,
      name: "Potato",
      price: 37,
      image: "/assets/dashboard/cart/bestsellers/bs_02.png",
      quantity: "1 KG",
    },
    {
      id: 3,
      name: "Tomato",
      price: 37,
      image: "/assets/dashboard/cart/bestsellers/bs_03.png",
      quantity: "1 KG",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 px-4 py-6">
      {/* Main content */}
      <div className="flex-1 px-4 py-6">
        {/* Empty cart illustration */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-48 h-48">
            <Image
              src="/assets/dashboard/cart/cart.png"
              alt="Empty cart"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h3 className="font-bold text-xl mt-3">Reordering will be easy</h3>
          <p className="text-center text-gray-600 text-sm">
            Items you order will show up here so you can buy them again easily.
          </p>
        </div>

        {/* Bestsellers section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Bestsellers</h3>
          <div className="grid grid-cols-3 gap-3">
            {bestsellerProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden"
              >
                <div className="relative h-24 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute bottom-0 right-0 bg-white text-xs p-1 rounded-tl-md">
                    96 × 108
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-xs font-medium">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.quantity}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-bold">₹ {product.price}</p>
                    <button className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
