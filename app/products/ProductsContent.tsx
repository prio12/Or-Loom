"use client";

import { fraunces, playfair } from "@/lib/fonts";
import { RiMenuFold2Fill } from "react-icons/ri";
import products from "@/data/products.json";
import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";
import ProductCard from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Drawer from "@/components/layout/Drawer";
import { useSearchParams } from "next/navigation";

export default function ProductsContent() {
  const searchParams = useSearchParams();

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All",
  );
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  const [sortOrder, setSortOrder] = useState<
    "none" | "low-to-high" | "high-to-low"
  >("none");

  const [selectedGender, setSelectedGender] = useState(
    (searchParams.get("gender") as "All" | "Men" | "Women") || "All",
  );

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesGender =
      selectedGender === "All" || p.gender === selectedGender;
    return matchesCategory && matchesGender;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0;
  });

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "filter-drawer",
    ) as HTMLInputElement;
    if (drawerCheckbox) drawerCheckbox.checked = false;
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
        <label
          htmlFor="filter-drawer"
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
        </label>

        <Drawer id="filter-drawer">
          <ul>
            <li className="mb-2 font-medium">Sort by</li>
            <li>
              <button
                onClick={() => {
                  setSortOrder("low-to-high");
                  closeDrawer();
                }}
                className={`text-sm py-2 ${sortOrder === "low-to-high" ? "font-semibold text-[#B5532C]" : ""}`}
              >
                Price: Low to High
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setSortOrder("high-to-low");
                  closeDrawer();
                }}
                className={`text-sm py-2 ${sortOrder === "high-to-low" ? "font-semibold text-[#B5532C]" : ""}`}
              >
                Price: High to Low
              </button>
            </li>
            <li className="mt-4 mb-2 font-medium">Gender</li>
            {(["All", "Men", "Women"] as const).map((g) => (
              <li key={g}>
                <button
                  onClick={() => {
                    setSelectedGender(g);
                    closeDrawer();
                  }}
                  className={`text-sm py-2 ${selectedGender === g ? "font-semibold text-[#B5532C]" : ""}`}
                >
                  {g}
                </button>
              </li>
            ))}
            <li className="mt-4 mb-2 font-medium">Category</li>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => {
                    setSelectedCategory(cat);
                    closeDrawer();
                  }}
                  className="text-sm py-2"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </Drawer>

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
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded transition-colors cursor-pointer ${
              viewMode === "grid"
                ? "bg-[#1A1A1A] text-white"
                : "hover:bg-[#B5532C1A]"
            }`}
          >
            <IoGridOutline size={20} />
          </button>

          <button
            onClick={() => setViewMode("compact")}
            className={`p-2 rounded transition-colors cursor-pointer ${
              viewMode === "compact"
                ? "bg-[#1A1A1A] text-white"
                : "hover:bg-[#B5532C1A]"
            }`}
          >
            <IoMdGrid size={20} />
          </button>
        </div>
      </div>

      <motion.div
        key={`${selectedCategory}-${selectedGender}-${viewMode}-${sortOrder}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`grid gap-6 mt-8 ${viewMode === "grid" ? "grid-cols-12" : "grid-cols-2 md:grid-cols-4"}`}
      >
        {sortedProducts.map((product, i) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className={
              viewMode === "grid"
                ? `${mobileSpanClasses[mobileSpanPattern[i % mobileSpanPattern.length]]} ${desktopSpanClasses[desktopSpanPattern[i % desktopSpanPattern.length]]}`
                : ""
            }
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
