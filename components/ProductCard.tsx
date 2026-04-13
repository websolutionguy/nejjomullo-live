'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

export default function ProductCard({ id, title, price, image, rating, category }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3">
          <button 
            onClick={() => addToCart({ id, title, price, image })}
            className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1 block">
          {category}
        </span>
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({rating}.0)</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">৳{price.toLocaleString()}</span>
          <Link href={`/products/${id}`} className="text-sm font-bold text-gray-600 hover:text-primary transition-colors cursor-pointer">
            বিস্তারিত দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
