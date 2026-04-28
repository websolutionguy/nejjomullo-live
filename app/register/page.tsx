'use client';

import Link from 'next/link';
import { Mail, Lock, User, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
                  <User className="w-8 h-8 text-secondary" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">রেজিস্ট্রেশন করুন</h1>
                <p className="text-gray-500 mt-2">নতুন অ্যাকাউন্ট তৈরি করতে তথ্য দিন</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">পুরো নাম</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="আপনার নাম"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">ইমেইল ঠিকানা</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">ফোন নম্বর</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      placeholder="০১৭XXXXXXXX"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">পাসওয়ার্ড</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 ml-1 py-2">
                  <input type="checkbox" id="terms" className="mt-1 accent-secondary" />
                  <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                    আমি ন্যায্যমূল্য-এর <Link href="/terms" className="text-secondary font-bold hover:underline">শর্তাবলী</Link> এবং <Link href="/privacy" className="text-secondary font-bold hover:underline">গোপনীয়তা নীতি</Link> মেনে নিচ্ছি।
                  </label>
                </div>

                <button
                  type="button"
                  className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 cursor-pointer"
                >
                  অ্যাকাউন্ট তৈরি করুন <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="mt-10 text-center text-gray-500">
                ইতিমধ্যেই অ্যাকাউন্ট আছে?{' '}
                <Link href="/login" className="text-secondary font-bold hover:underline">
                  লগইন করুন
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
