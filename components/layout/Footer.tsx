import Link from "next/link";
import { playfair, fraunces } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F2] border-t border-[#8A8578]/20 px-4 md:px-10 py-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className={`${playfair.className} text-xl mb-2`}>Or & Loom</p>
          <p className="text-sm text-[#8A8578] max-w-xs">
            Timeless essentials for modern living.
          </p>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <p
              className={`${fraunces.className} text-xs uppercase tracking-widest text-[#8A8578] mb-1`}
            >
              Shop
            </p>
            <Link
              href="/products"
              className="text-sm hover:text-[#B5532C] transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/products?gender=Men"
              className="text-sm hover:text-[#B5532C] transition-colors"
            >
              Men
            </Link>
            <Link
              href="/products?gender=Women"
              className="text-sm hover:text-[#B5532C] transition-colors"
            >
              Women
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <p
              className={`${fraunces.className} text-xs uppercase tracking-widest text-[#8A8578] mb-1`}
            >
              Account
            </p>
            <Link
              href="/cart"
              className="text-sm hover:text-[#B5532C] transition-colors"
            >
              Cart
            </Link>
            <Link
              href="/wishlist"
              className="text-sm hover:text-[#B5532C] transition-colors"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#8A8578] mt-10">
        © {new Date().getFullYear()} Or & Loom. All rights reserved.
      </p>
    </footer>
  );
}
