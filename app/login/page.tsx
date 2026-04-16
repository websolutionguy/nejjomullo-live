'use client';

import Link from 'next/link';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">লগইন করুন</h1>
                <p className="text-gray-500 mt-2">আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">ইমেইল ঠিকানা</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-sm font-bold text-gray-700">পাসওয়ার্ড</label>
                    <Link href="/forgot-password" title="পাসওয়ার্ড ভুলে গেছেন?" className="text-xs font-bold text-primary hover:underline">
                      পাসওয়ার্ড ভুলে গেছেন?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer"
                >
                  লগইন করুন <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 relative text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <span className="relative px-4 bg-white text-sm text-gray-400">অথবা সোশ্যাল মিডিয়া দিয়ে</span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-4 px-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all font-bold text-gray-700 cursor-pointer">
                  <Chrome className="w-5 h-5" /> গুগল
                </button>
                <button className="flex items-center justify-center gap-2 py-4 px-4 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all font-bold text-gray-700 cursor-pointer">
                  <Github className="w-5 h-5" /> গিটহাব
                </button>
              </div>

              <p className="mt-10 text-center text-gray-500">
                অ্যাকাউন্ট নেই?{' '}
                <Link href="/register" className="text-primary font-bold hover:underline">
                  রেজিস্ট্রেশন করুন
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
