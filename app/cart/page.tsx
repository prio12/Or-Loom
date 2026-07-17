"use client";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#F7F5F2] px-4">
        <p className="text-lg text-[#8A8578]">Your cart is empty.</p>
        <Link
          href="/products"
          className="px-6 py-3 bg-[#1A1A1A] text-white text-sm uppercase tracking-widest rounded-md"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F5F2] px-4 md:px-10 py-10 min-h-screen">
      <h1 className="font-serif text-3xl mb-8">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className="flex gap-4 items-center border-b border-[#8A8578]/30 pb-6"
          >
            <div className="relative w-24 h-32 shrink-0 bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="font-serif text-lg">{item.name}</p>
              <p className="text-sm text-[#8A8578]">
                {item.color} / {item.size}
              </p>
              <p className="text-sm text-[#B5532C] mt-1">${item.price}</p>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.color,
                      item.size,
                      Math.max(1, item.quantity - 1),
                    )
                  }
                  className="w-7 h-7 border rounded-full"
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.color,
                      item.size,
                      item.quantity + 1,
                    )
                  }
                  className="w-7 h-7 border rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeItem(item.id, item.color, item.size)}
              className="text-sm cursor-pointer text-[#8A8578] hover:text-[#B5532C]"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-2">
        <p className="text-lg">
          Total:{" "}
          <span className="text-[#B5532C] font-medium">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
        <button className="px-8 py-3 bg-[#1A1A1A] text-white text-sm uppercase tracking-widest rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
}
