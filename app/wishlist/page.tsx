"use client";
import { useWishlistStore } from "@/store/wishlistStore";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import products from "@/data/products.json";

export default function WishlistPage() {
  const wishlistItems = useWishlistStore((state) => state.items);

  const fullProducts = products.filter((p) =>
    wishlistItems.some((w) => w.id === p.id),
  );

  if (fullProducts.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#F7F5F2] px-4">
        <p className="text-lg text-[#8A8578]">Your wishlist is empty.</p>
        <Link
          href="/products"
          className="px-6 py-3 bg-[#1A1A1A] text-white text-sm uppercase tracking-widest rounded-md"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F5F2] px-4 md:px-10 py-10 min-h-screen">
      <h1 className="font-serif text-3xl mb-8">Your Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {fullProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
