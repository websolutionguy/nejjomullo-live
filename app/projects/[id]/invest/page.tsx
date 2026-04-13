'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { sendEmail } from '@/lib/emailjs';

const projectsData = [
  { id: 'mustard-oil-1', title: 'প্রিমিয়াম সরিষার তেল উৎপাদন প্রকল্প' },
  { id: 'honey-collection-1', title: 'সুন্দরবনের প্রাকৃতিক মধু সংগ্রহ' },
  { id: 'organic-spice-1', title: 'অর্গানিক মসলা প্রক্রিয়াজাতকরণ' },
  { id: 'cashew-nuts-1', title: 'প্রিমিয়াম কাজু ও কাঠবাদাম চাষ' },
  { id: 'dairy-farm-1', title: 'উন্নত জাতের ডেইরি ফার্ম সম্প্রসারণ' },
  { id: 'layer-chicken-1', title: 'অর্গানিক লেয়ার মুরগির খামার' },
];

export default function InvestPage() {
  const { id } = useParams();
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      project_title: project.title,
      user_name: formData.get('user_name'),
      user_phone: formData.get('user_phone'),
      user_email: formData.get('user_email') || 'N/A',
      user_nid: formData.get('user_nid'),
      user_passport: formData.get('user_passport') || 'N/A',
      user_income: formData.get('user_income') || 'N/A',
      user_address: formData.get('user_address'),
    };

    const result = await sendEmail(data);

    if (result.success) {
      toast.success('আপনার বিনিয়োগের আবেদনটি সফলভাবে জমা হয়েছে!');
      setIsSubmitted(true);
    } else {
      toast.error('দুঃখিত, আবেদনটি জমা দেওয়া সম্ভব হয়নি। আবার চেষ্টা করুন।');
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">আবেদন সফল হয়েছে!</h1>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            আপনার বিনিয়োগের আবেদনটি আমরা পেয়েছি। আমাদের ইনভেস্টমেন্ট টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।
          </p>
          <Link href="/projects" className="inline-flex bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all">
            অন্যান্য প্রকল্প দেখুন
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
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-bold cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" /> ফিরে যান
          </button>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div className="mb-10">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">বিনিয়োগ আবেদন</span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                <p className="text-gray-500">অনুগ্রহ করে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন।</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">আপনার নাম *</label>
                    <input 
                      required 
                      name="user_name"
                      type="text" 
                      className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="পুরো নাম লিখুন"
                    />
                  </div>
                  
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">ফোন নম্বর *</label>
                    <input 
                      required 
                      name="user_phone"
                      type="tel" 
                      className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="০১৭XXXXXXXX"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">ইমেইল (ঐচ্ছিক)</label>
                    <input 
                      name="user_email"
                      type="email" 
                      className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">এনআইডি (NID) নম্বর *</label>
                    <input 
                      required 
                      name="user_nid"
                      type="text" 
                      className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="আপনার এনআইডি নম্বর"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">পাসপোর্ট নম্বর (ঐচ্ছিক)</label>
                    <input 
                      name="user_passport"
                      type="text" 
                      className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="আপনার পাসপোর্ট নম্বর"
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">মাসিক আয় (ঐচ্ছিক)</label>
                    <input 
                      name="user_income"
                      type="text" 
                      className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="যেমন: ৫০,০০০"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">পুরো ঠিকানা *</label>
                    <textarea 
                      required 
                      name="user_address"
                      rows={3}
                      className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="বাসা নম্বর, রাস্তা, এলাকা, জেলা"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'প্রক্রিয়াধীন...' : 'Invest'}
                  </button>
                </div>

                <div className="flex items-center gap-2 justify-center text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4" /> আপনার তথ্য আমাদের কাছে সম্পূর্ণ নিরাপদ
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
