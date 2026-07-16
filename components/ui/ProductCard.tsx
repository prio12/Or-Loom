// components/ui/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="relative aspect-[3/4] overflow-hidden bg-white">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </motion.div>
        {!product.inStock && (
          <span className="absolute top-2 left-2 bg-white/90 text-xs px-2 py-1 rounded">
            Sold Out
          </span>
        )}
      </div>
      <div className="mt-3">
        <p className="text-sm">{product.name}</p>
        <p className="text-sm text-[#B5532C]">${product.price}</p>
      </div>
    </Link>
  );
}
