"use client";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { ctaAnimation, arrowAnimation } from "@/lib/animations";

export default function FeaturedProducts() {
  const featured = [
    ...products.filter((p) => p.gender === "Women").slice(0, 2),
    ...products.filter((p) => p.gender === "Men").slice(0, 2),
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen ">
      {featured?.map((product) => (
        <div key={product.id} className="aspect-3/4">
          <div className="relative min-h-screen ">
            <Image
              src={product?.image}
              alt="featured-products"
              fill
              className="object-cover"
              priority
            />

            <div
              className="
              absolute inset-0 z-10
              flex items-end justify-end
              pb-5 text-[#F7F5F2]
            "
            >
              <motion.div {...ctaAnimation}>
                <Link
                  href="/men"
                  className="flex items-center gap-2 uppercase tracking-[0.2em]"
                >
                  {product?.category}
                  <motion.div {...arrowAnimation}>
                    <GoArrowRight size={18} />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
