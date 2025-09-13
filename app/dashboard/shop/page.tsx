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
  deliveryTime: number; // Delivery time in minutes
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
      deliveryTime: 10,
    },
    {
      id: 2,
      name: "Potato (Aloo)",
      price: 37,
      image: "/assets/dashboard/cart/bestsellers/bs_02.png",
      quantity: "1 KG",
      deliveryTime: 8,
    },
    {
      id: 3,
      name: "Hybrid Tomato",
      price: 37,
      image: "/assets/dashboard/cart/bestsellers/bs_03.png",
      quantity: "1 KG",
      deliveryTime: 6,
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
                className="rounded-lg overflow-hidden"
              >
                <div className="relative h-26 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <button className="bg-white text-green-500 border border-green-500 text-xs px-2 py-1 rounded absolute bottom-[-10px] right-0">
                    ADD
                  </button>
                </div>
                <div className="p-2">
                  <p className="text-xs font-medium">{product.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="relative w-4 h-4">
                      <Image
                        src="/assets/dashboard/cart/timer.png"
                        alt="Timer"
                        width={16}
                        height={16}
                      />
                    </div>
                    <p className="text-xs text-gray-500">{product.deliveryTime} mins</p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-bold">₹ {product.price}</p>
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
