"use client";

import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

export default function Navbar() {
  const iconHover: MotionProps = {
    whileHover: {
      scale: 1.11,
      backgroundColor: "#1A1A1A",
      color: "#F7F5F2",
    },
    whileTap: {
      scale: 0.95,
    },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  };
  return (
    <nav className="flex justify-between items-center px-5 md:px-10 py-5 bg-[#F7F5F2] text-[#1A1A1A]">
      <h3 className="text-sm hidden md:block tracking-wide font-semibold uppercase cursor-pointer hover:text-[#B5532C] transition-colors">
        Products
      </h3>

      <div className="font-serif text-xl tracking-wide">Or & Loom</div>

      <div className="flex items-center gap-4">
        <motion.div {...iconHover} className="p-2 rounded-full cursor-pointer">
          <CiSearch size={22} />
        </motion.div>
        <motion.div {...iconHover} className="p-2 rounded-full cursor-pointer">
          <CiHeart size={22} />
        </motion.div>
        <motion.div {...iconHover} className="p-2 rounded-full cursor-pointer">
          <CiShoppingCart size={22} />
        </motion.div>
      </div>
    </nav>
  );
}
