'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('EmailJS কনফিগারেশন অনুপস্থিত। অনুগ্রহ করে পরে আবার চেষ্টা করুন।');
      setIsSubmitting(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          form_type: 'Contact Form',
          user_name: formData.get('user_name'),
          user_email: formData.get('user_email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        },
        PUBLIC_KEY
      );

      toast.success('আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে!');
      form.reset();
      return { success: true, text: result.text };
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('দুঃখিত, মেসেজটি পাঠানো সম্ভব হয়নি। আবার চেষ্টা করুন।');
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">যোগাযোগ করুন</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            আপনার যেকোনো প্রশ্ন বা মতামতের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনাকে সাহায্য করতে প্রস্তুত।
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ফোন করুন</h3>
                <p className="text-gray-500 mb-4">আমাদের কাস্টমার কেয়ার প্রতিনিধিরা আপনার কলের অপেক্ষায় আছেন।</p>
                <p className="text-lg font-bold text-primary">+৮৮ ০১৭১১-৩৪০০৮০</p>
                {/* <p className="text-lg font-bold text-primary">+৮৮০ ১৮০০-০০০০০০</p> */}
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ইমেইল করুন</h3>
                <p className="text-gray-500 mb-4">যেকোনো তথ্যের জন্য আমাদের ইমেইল করতে পারেন।</p>
                <p className="text-lg font-bold text-secondary">info@nejjomullo.com</p>
                {/* <p className="text-lg font-bold text-secondary">support@nejjomullo.com</p> */}
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">অফিসের সময়</h3>
                <p className="text-gray-500 mb-2">শনিবার - বৃহস্পতিবার</p>
                <p className="text-lg font-bold text-gray-900">সকাল ৯:০০ - সন্ধ্যা ৬:০০</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  আমাদের মেসেজ পাঠান
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">আপনার নাম</label>
                      <input
                        required
                        name="user_name"
                        type="text"
                        placeholder="নাম লিখুন"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">ইমেইল ঠিকানা</label>
                      <input
                        required
                        name="user_email"
                        type="email"
                        placeholder="ইমেইল লিখুন"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">বিষয়</label>
                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder="মেসেজের বিষয়"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">মেসেজ</label>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="আপনার মেসেজটি এখানে লিখুন..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 transition-all resize-none outline-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? 'পাঠানো হচ্ছে...' : 'মেসেজ পাঠান'} <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-[2.5rem] overflow-hidden h-[400px] shadow-lg border border-gray-100 relative">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 flex-col gap-4">
                  <MapPin className="w-12 h-12" />
                  <p className="font-bold">গুগল ম্যাপ এখানে লোড হবে</p>
                  <p className="text-sm">হাউজ ১২, লেভেল ৪, রোড ০৮, নিকুঞ্জ ২, ঢাকা - ১২২৯, বাংলাদেশ</p>
                </div>
                {/* Real Google Map iframe would go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
