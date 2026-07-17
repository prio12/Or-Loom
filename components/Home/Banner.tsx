"use client";

import { playfair } from "@/lib/fonts";
import bannerImg1 from "@/public/Images/Banner/banner1.avif";
import bannerImg2 from "@/public/Images/Banner/helen-ast-wXCQCVpsRQ0-unsplash.jpg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const ctaAnimation: MotionProps = {
  whileHover: {
    y: -5,
    opacity: 0.85,
  },
  whileTap: {
    scale: 0.97,
  },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

const arrowAnimation: MotionProps = {
  whileHover: {
    x: 5,
  },
  transition: {
    type: "spring",
    stiffness: 400,
  },
};

export default function Banner() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen ">
        {/* Men's Banner */}
        <div className="relative min-h-screen ">
          <Image
            src={bannerImg1}
            alt="Menswear banner"
            fill
            className="object-cover"
            priority
          />

          <div
            className="
              absolute inset-0 z-10
              flex items-end justify-center
              pb-20 text-[#F7F5F2]
            "
          >
            <motion.div {...ctaAnimation}>
              <Link
                href="/products?gender=Men"
                className="flex items-center gap-2 uppercase tracking-[0.2em]"
              >
                Shop all menswear
                <motion.div {...arrowAnimation}>
                  <GoArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Women's Banner */}
        <div className="relative min-h-screen ">
          <Image
            src={bannerImg2}
            alt="Womenswear banner"
            fill
            className="object-cover"
            priority
          />

          <div
            className="
              absolute inset-0 z-10
              flex items-end justify-center
              pb-20 text-[#F7F5F2]
            "
          >
            <motion.div {...ctaAnimation}>
              <Link
                href="/products?gender=Women"
                className="flex items-center gap-2 uppercase tracking-[0.2em]"
              >
                Shop all womenswear
                <motion.div {...arrowAnimation}>
                  <GoArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <h3
        className={`
          absolute
          top-[80%]
          left-1/2
          -translate-x-1/2
          z-20
          hidden md:block
          text-white
          text-2xl
          uppercase
          whitespace-nowrap
          ${playfair.className}
        `}
      >
        Timeless essentials for modern living.
      </h3>
    </div>
  );
}
