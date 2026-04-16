'use client';

import Link from 'next/link';
import { Mail, ArrowLeft, Send, ShieldQuestion } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <ShieldQuestion className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">পাসওয়ার্ড পুনরুদ্ধার</h1>
                <p className="text-gray-500 mt-2">আপনার ইমেইল দিন, আমরা একটি রিসেট লিঙ্ক পাঠাবো</p>
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

                <button
                  type="button"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 cursor-pointer"
                >
                  লিঙ্ক পাঠান <Send className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-10 text-center">
                <Link href="/login" className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-primary transition-colors">
                  <ArrowLeft className="w-4 h-4" /> লগইন পেজে ফিরে যান
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
