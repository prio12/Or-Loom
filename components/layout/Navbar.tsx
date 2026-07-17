/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { fraunces, playfair } from "@/lib/fonts";
import Link from "next/link";
import Drawer from "./Drawer";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useState, useEffect } from "react";

export default function Navbar() {
  const wishlistCount = useWishlistStore((state) => state.items.length);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const totalItems = useCartStore((state) => state.totalItems());

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

  const closeMobileNav = () => {
    const navCheckbox = document.getElementById(
      "mobile-nav",
    ) as HTMLInputElement;
    if (navCheckbox) navCheckbox.checked = false;
  };

  return (
    <nav className="flex justify-between items-center px-2 md:px-10 py-3 bg-[#F7F5F2] text-[#1A1A1A]">
      <Link
        href="/products"
        className={` ${fraunces.className} text-sm hidden md:block tracking-wide font-semibold 
      uppercase cursor-pointer hover:text-[#B5532C] transition-colors`}
      >
        Products
      </Link>

      <Link
        href="/"
        className={` ${playfair.className} text-xl cursor-pointer tracking-wide`}
      >
        Or & Loom
      </Link>

      <div className="flex items-center gap-2.5 md:4">
        <Link href="/products">
          <motion.div
            {...iconHover}
            className="p-2 rounded-full cursor-pointer"
          >
            <CiSearch size={22} />
          </motion.div>
        </Link>
        <Link href="/wishlist">
          <motion.div
            {...iconHover}
            className="p-2 rounded-full cursor-pointer relative"
          >
            <CiHeart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B5532C] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </motion.div>
        </Link>
        <Link href="/cart">
          <motion.div
            {...iconHover}
            className="p-2 rounded-full cursor-pointer relative"
          >
            <CiShoppingCart size={22} />
            {hasMounted && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B5532C] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </motion.div>
        </Link>
        <label
          htmlFor="mobile-nav"
          className="block md:hidden cursor-pointer p-2"
        >
          <HiMenuAlt2 size={22} />
        </label>

        <Drawer id="mobile-nav">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                onClick={closeMobileNav}
                className={`${playfair.className} text-lg py-2 block`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={closeMobileNav}
                className={`${fraunces.className} text-sm uppercase tracking-wide py-2 block`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                onClick={closeMobileNav}
                className={`${fraunces.className} text-sm uppercase tracking-wide py-2 block`}
              >
                Cart
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </nav>
  );
}
