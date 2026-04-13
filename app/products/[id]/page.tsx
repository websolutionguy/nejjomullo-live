'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Star, ShoppingCart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'motion/react';

const productsData = [
  { id: 'p1', title: 'খাঁটি গাওয়া ঘি (৫০০ গ্রাম)', price: 1250, image: 'https://picsum.photos/seed/p1/800/800', rating: 5, category: 'ওয়েল এন্ড ঘী', description: 'আমাদের এই গাওয়া ঘি সম্পূর্ণ প্রাকৃতিক উপায়ে তৈরি। কোনো প্রকার প্রিজারভেটিভ বা কৃত্রিম রং ব্যবহার করা হয়নি।' },
  { id: 'p2', title: 'লিচু ফুলের মধু (১ কেজি)', price: 950, image: 'https://picsum.photos/seed/p2/800/800', rating: 4, category: 'মধু', description: 'লিচু বাগান থেকে সরাসরি সংগৃহীত ১০০% খাঁটি মধু। এতে রয়েছে প্রচুর পরিমাণে অ্যান্টি-অক্সিডেন্ট।' },
  { id: 'p3', title: 'প্রিমিয়াম কাজু বাদাম (২৫০ গ্রাম)', price: 450, image: 'https://picsum.photos/seed/p3/800/800', rating: 5, category: 'নাটস্ এন্ড সীডস্', description: 'উন্নত মানের রোস্টেড কাজু বাদাম। স্বাস্থ্যকর স্ন্যাকস হিসেবে এটি অতুলনীয়।' },
  { id: 'p4', title: 'অর্গানিক হলুদ গুঁড়া (২০০ গ্রাম)', price: 180, image: 'https://picsum.photos/seed/p4/800/800', rating: 4, category: 'মসলা', description: 'নিজেদের তত্ত্বাবধানে শুকানো এবং ভাঙানো খাঁটি হলুদ গুঁড়া।' },
  { id: 'p5', title: 'সরিষার তেল (১ লিটার)', price: 280, image: 'https://picsum.photos/seed/p5/800/800', rating: 5, category: 'ওয়েল এন্ড ঘী', description: 'ঘানি ভাঙা খাঁটি সরিষার তেল। ঝাঁঝ এবং স্বাদে অতুলনীয়।' },
  { id: 'p6', title: 'কালোজিরা মধু (৫০০ গ্রাম)', price: 750, image: 'https://picsum.photos/seed/p6/800/800', rating: 5, category: 'মধু', description: 'কালোজিরা ফুলের মধু। এটি অত্যন্ত পুষ্টিকর এবং ঔষধি গুণসম্পন্ন।' },
  { id: 'p7', title: 'অর্গানিক মরিচ গুঁড়া (২০০ গ্রাম)', price: 190, image: 'https://picsum.photos/seed/p7/800/800', rating: 4, category: 'মসলা', description: 'উন্নত মানের মরিচ থেকে তৈরি খাঁটি মরিচ গুঁড়া।' },
  { id: 'p8', title: 'কাঠবাদাম (৫০০ গ্রাম)', price: 850, image: 'https://picsum.photos/seed/p8/800/800', rating: 5, category: 'নাটস্ এন্ড সীডস্', description: 'প্রিমিয়াম কোয়ালিটির কাঠবাদাম। সরাসরি আমদানি করা।' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find((p) => p.id === id) || productsData[0];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 border border-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 font-medium">({product.rating}.0 রিভিউ)</span>
                </div>
              </div>

              <div className="text-4xl font-bold text-primary">
                ৳{product.price.toLocaleString()}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-grow md:flex-none bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer"
                >
                  <ShoppingCart className="w-6 h-6" /> কার্টে যোগ করুন
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">১০০% খাঁটি</div>
                    <div className="text-gray-500">বিশুদ্ধতার নিশ্চয়তা</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">দ্রুত ডেলিভারি</div>
                    <div className="text-gray-500">সারা বাংলাদেশে</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">রিটার্ন পলিসি</div>
                    <div className="text-gray-500">৭ দিনের মধ্যে</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
