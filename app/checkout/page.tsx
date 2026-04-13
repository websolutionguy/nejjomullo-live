'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { ShieldCheck, Truck, CreditCard, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { sendEmail } from '@/lib/emailjs';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [deliveryLocation, setDeliveryLocation] = useState<'inside' | 'outside'>('inside');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const deliveryCharge = deliveryLocation === 'inside' ? 80 : 120;
  const finalTotal = totalPrice + deliveryCharge;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const cartItemsText = cart.map(item => `${item.title} (x${item.quantity}) - ৳${(item.price * item.quantity).toLocaleString()}`).join('\n');
    
    const data = {
      form_type: 'Order Checkout',
      user_name: formData.get('user_name'),
      user_phone: formData.get('user_phone'),
      user_email: formData.get('user_email') || 'N/A',
      user_address: formData.get('user_address'),
      delivery_location: deliveryLocation === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka',
      cart_items: cartItemsText,
      total_price: `৳${finalTotal.toLocaleString()}`,
    };

    const result = await sendEmail(data);

    if (result.success) {
      toast.success('অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!');
      setIsSubmitted(true);
      clearCart();
    } else {
      toast.error('দুঃখিত, অর্ডারটি সম্পন্ন করা সম্ভব হয়নি। আবার চেষ্টা করুন।');
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-40 pb-20 container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            আপনার অর্ডারের জন্য ধন্যবাদ। আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
          </p>
          <Link href="/" className="inline-flex bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all">
            হোম পেজে ফিরে যান
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-40 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">আপনার কার্টটি খালি</h1>
          <Link href="/products" className="text-primary font-bold hover:underline">পণ্যসমূহ দেখুন</Link>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-10">চেকআউট</h1>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form Fields */}
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Truck className="text-primary w-5 h-5" /> শিপিং তথ্য
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">আপনার নাম *</label>
                    <input 
                      required 
                      name="user_name"
                      type="text" 
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="পুরো নাম লিখুন"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ফোন নম্বর *</label>
                    <input 
                      required 
                      name="user_phone"
                      type="tel" 
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="০১৭XXXXXXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">ইমেইল (ঐচ্ছিক)</label>
                    <input 
                      name="user_email"
                      type="email" 
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="example@mail.com"
                    />
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">পুরো ঠিকানা *</label>
                    <textarea 
                      required 
                      name="user_address"
                      rows={3}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="বাসা নম্বর, রাস্তা, এলাকা, জেলা"
                    />
                  </div>
                </div>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="text-primary w-5 h-5" /> পেমেন্ট পদ্ধতি
                </h2>
                
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-4 border-primary bg-white" />
                  <div>
                    <div className="font-bold text-gray-900">ক্যাশ অন ডেলিভারি (Cash on Delivery)</div>
                    <div className="text-sm text-gray-500">পণ্য হাতে পেয়ে টাকা পরিশোধ করুন।</div>
                  </div>
                </div>
              </section>
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
                  
                  <div className="space-y-3 pt-2">
                    <label className="block text-sm font-bold text-gray-700">ডেলিভারি লোকেশন</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        type="button"
                        onClick={() => setDeliveryLocation('inside')}
                        className={`p-3 rounded-xl text-sm font-bold transition-all border ${deliveryLocation === 'inside' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200'}`}
                      >
                        ঢাকার ভিতরে (৳৮০)
                      </button>
                      <button 
                        type="button"
                        onClick={() => setDeliveryLocation('outside')}
                        className={`p-3 rounded-xl text-sm font-bold transition-all border ${deliveryLocation === 'outside' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200'}`}
                      >
                        ঢাকার বাইরে (৳১২০)
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-4 flex justify-between font-bold text-xl text-gray-900">
                    <span>মোট</span>
                    <span>৳{finalTotal.toLocaleString()}</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'প্রক্রিয়াধীন...' : 'অর্ডার কনফার্ম করুন'}
                </button>
                
                <div className="mt-6 flex items-center gap-2 justify-center text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4" /> নিরাপদ পেমেন্ট এবং ১০০% বিশুদ্ধতার নিশ্চয়তা
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
