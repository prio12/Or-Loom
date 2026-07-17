"use client";
import products from "@/data/products.json";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id));

  if (!product) notFound();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-[#F7F5F2] px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-white">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT: info */}
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-[#8A8578]">
            {product.category}
          </p>

          <h1 className="font-serif text-3xl">{product.name}</h1>

          <p className="text-lg text-[#B5532C]">${product.price}</p>

          <p className="text-sm text-[#8A8578]">★ {product.rating}</p>

          <p className="text-sm leading-relaxed">{product.description}</p>

          <div>
            <p className="text-sm font-medium mb-2">Color</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    selectedColor === color
                      ? "bg-[#1A1A1A] text-white"
                      : "bg-white"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    selectedSize === size
                      ? "bg-[#1A1A1A] text-white"
                      : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            disabled={!product.inStock}
            className={`mt-4 py-3 rounded-md text-sm uppercase tracking-widest transition-colors ${
              product.inStock
                ? "bg-[#B5532C] text-white hover:opacity-90 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
