"use client";

import { fraunces, playfair } from "@/lib/fonts";
import { RiMenuFold2Fill } from "react-icons/ri";
import products from "@/data/products.json";
import { useState } from "react";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";
import ProductCard from "@/components/ui/ProductCard";

export default function Products() {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const mobileSpanPattern = [6, 6, 4, 4, 4, 12];

  const desktopSpanPattern = [6, 6, 4, 4, 4, 12, 3, 3, 3, 3];

  const mobileSpanClasses: Record<number, string> = {
    4: "col-span-4",
    6: "col-span-6",
    12: "col-span-12",
  };

  const desktopSpanClasses: Record<number, string> = {
    3: "md:col-span-3",
    4: "md:col-span-4",
    6: "md:col-span-6",
    12: "md:col-span-12",
  };

  return (
    <div className="bg-[#F7F5F2] pt-5 px-2 md:px-10">
      <div className="flex justify-start md:justify-center mb-5">
        <h3
          className={`
            ${fraunces.className}
            text-sm
            hidden md:block
            tracking-wide
            font-bold
            uppercase
            cursor-pointer
            hover:text-[#B5532C]
            transition-colors
          `}
        >
          The Full Collection
        </h3>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div
          className={`
            ${playfair.className}
            order-1
            flex items-center gap-2
            shrink-0
            cursor-pointer
            text-sm
            tracking-wide
          `}
        >
          <RiMenuFold2Fill />
          <p>Filter & Sort</p>
        </div>

        {/* Categories */}
        <div
          className="
            carousel
            gap-3
            px-2
            w-full
            order-3
            md:order-2
            md:flex-1
            md:min-w-0
            md:w-auto
          "
        >
          {categories.map((cat) => (
            <div key={cat} className="carousel-item">
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-white text-[#1A1A1A] hover:bg-[#B5532C1A]"
                }`}
              >
                {cat}
              </button>
            </div>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 shrink-0 order-2 md:order-3">
          <button className="p-2 hover:bg-[#B5532C1A] rounded transition-colors">
            <CiGrid2H size={20} />
          </button>

          <button className="p-2 hover:bg-[#B5532C1A] rounded transition-colors">
            <CiGrid2V size={20} />
          </button>

          <button className="p-2 hover:bg-[#B5532C1A] rounded transition-colors">
            <IoGridOutline size={20} />
          </button>

          <button className="p-2 hover:bg-[#B5532C1A] rounded transition-colors">
            <IoMdGrid size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-8">
        {filteredProducts.map((product, i) => (
          <div
            key={product.id}
            className={`${mobileSpanClasses[mobileSpanPattern[i % mobileSpanPattern.length]]} ${desktopSpanClasses[desktopSpanPattern[i % desktopSpanPattern.length]]}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
