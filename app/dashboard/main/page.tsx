"use client";

import CategorySlider from "@/components/dashboard/CategorySlider";
import { BestsellerProduct } from "../shop/page";
import Image from "next/image";

export default function MainPage() {
  // Featured products
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

  // Category data
  const groceryCategory = {
    title: "Grocery & Kitchen",
    items: [
      {
        name: "Vegetables & Fruits",
        image: "/assets/dashboard/catalog/cat_01.png",
      },
      {
        name: "Atta, Dal & Rice",
        image: "/assets/dashboard/catalog/cat_02.png",
      },
      {
        name: "Oil, Ghee & Masala",
        image: "/assets/dashboard/catalog/cat_03.png",
      },
      {
        name: "Dairy, Bread & Milk",
        image: "/assets/dashboard/catalog/cat_04.png",
      },
      {
        name: "Biscuits & Snacks",
        image: "/assets/dashboard/catalog/cat_05.png",
      },
    ],
  };

  return (
    <>
      {/* Mega Diwali Sale Card */}
      <div className="mb-5">
        <div className="relative w-full h-40 overflow-hidden bg-red-500 border border-t-white border-x-red-500 py-10">
          <div className="absolute inset-0 flex flex-col justify-center px-4">
            <div className="flex items-center">
              <Image
                src="/assets/dashboard/main/diwali/diw_01.png"
                alt="Diwali"
                width={24}
                height={24}
                className="mr-2"
              />
              <h2 className="text-2xl font-bold text-white">
                Mega Diwali Sale
              </h2>
              <Image
                src="/assets/dashboard/main/diwali/diw_01.png"
                alt="Diwali"
                width={24}
                height={24}
                className="ml-2"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="bg-white p-2 rounded-lg flex flex-col items-center w-20 shadow-sm">
                <p className="text-xs font-medium">Lights, Diyas</p>
                <p className="text-xs font-medium">&amp; Candles</p>
                <div className="w-12 h-12 mt-1">
                  <Image
                    src="/assets/dashboard/main/diwali/diw_01.png"
                    alt="Lights & Diyas"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg flex flex-col items-center w-20 shadow-sm">
                <p className="text-xs font-medium">Sweets</p>
                <p className="text-xs font-medium">Gifts</p>
                <div className="w-12 h-12 mt-1">
                  <Image
                    src="/assets/dashboard/main/diwali/diw_02.png"
                    alt="Sweets"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg flex flex-col items-center w-20 shadow-sm">
                <p className="text-xs font-medium">Appliances</p>
                <p className="text-xs font-medium">&amp; Gadgets</p>
                <div className="w-12 h-12 mt-1">
                  <Image
                    src="/assets/dashboard/main/diwali/diw_03.png"
                    alt="Appliances"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg flex flex-col items-center w-20 shadow-sm">
                <p className="text-xs font-medium">Home</p>
                <p className="text-xs font-medium">&amp; Living</p>
                <div className="w-12 h-12 mt-1">
                  <Image
                    src="/assets/dashboard/main/diwali/diw_04.png"
                    alt="Home Decor"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20 p-6">
        {/* Bestsellers Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Bestsellers</h3>
          <div className="grid grid-cols-3 gap-3">
            {bestsellerProducts.map((product) => (
              <div key={product.id} className="rounded-lg overflow-hidden">
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
                    <p className="text-xs text-gray-500">
                      {product.deliveryTime} mins
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="font-bold">₹ {product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <CategorySlider
          title={groceryCategory.title}
          items={groceryCategory.items}
        />
      </div>
    </>
  );
}
