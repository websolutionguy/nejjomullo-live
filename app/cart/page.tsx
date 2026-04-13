'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-40 pb-20 container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <ShoppingBag className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">আপনার কার্টটি খালি</h1>
          <p className="text-gray-500 mb-8">আমাদের পণ্যসমূহ থেকে আপনার পছন্দের পণ্যটি বেছে নিন।</p>
          <Link href="/products" className="inline-flex bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all">
            পণ্যসমূহ দেখুন
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">শপিং কার্ট ({totalItems})</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <div className="text-primary font-bold">৳{item.price.toLocaleString()}</div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
                <h2 className="text-xl font-bold text-gray-900 mb-6">অর্ডার সামারি</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500">
                    <span>সাবটোটাল</span>
                    <span>৳{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>ডেলিভারি চার্জ</span>
                    <span className="text-xs italic">চেকআউট পেজে হিসাব করা হবে</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold text-xl text-gray-900">
                    <span>মোট</span>
                    <span>৳{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
                
                <Link href="/checkout" className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer">
                  চেকআউট করুন <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
