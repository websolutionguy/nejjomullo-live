import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

import OurDestination from '@/public/images/Our History & Mission.jpg'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/seed/farm/1920/1080" alt="About Hero" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">আমাদের সম্পর্কে</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            বাংলাদেশের কৃষি খাতে বিপ্লব ঘটাতে এবং কৃষক ও বিনিয়োগকারীদের মধ্যে সেতুবন্ধন তৈরি করতে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={OurDestination} alt="Our History" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">আমাদের ইতিহাস ও লক্ষ্য</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  ন্যায্যমূল্য ইনভেস্টমেন্ট প্ল্যাটফর্মের যাত্রা শুরু হয়েছিল একটি সাধারণ কিন্তু শক্তিশালী স্বপ্ন নিয়ে - বাংলাদেশের পরিশ্রমী কৃষকদের তাদের কঠোর পরিশ্রমের সঠিক মূল্য নিশ্চিত করা। আমরা লক্ষ্য করেছি যে, মধ্যস্বত্বভোগীদের কারণে কৃষকরা প্রায়শই বঞ্চিত হন এবং বিনিয়োগকারীরা নিরাপদ ও লাভজনক কৃষি প্রকল্পের অভাব বোধ করেন।
                </p>
                <p>
                  ২০২৫ সালে প্রতিষ্ঠিত এই প্ল্যাটফর্মটি এখন হাজার হাজার কৃষকের আস্থার প্রতীক। আমরা প্রযুক্তির মাধ্যমে কৃষিকে আধুনিকায়ন করছি এবং সাধারণ মানুষকে সরাসরি কৃষি উৎপাদনে অংশগ্রহণের সুযোগ করে দিচ্ছি।
                </p>
                <p>
                  আমাদের লক্ষ্য হলো একটি টেকসই কৃষি ব্যবস্থা গড়ে তোলা যেখানে প্রতিটি কৃষক হবে স্বাবলম্বী এবং প্রতিটি বিনিয়োগকারী হবে গর্বিত অংশীদার।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">আমাদের মূল মূল্যবোধ</h2>
            <p className="text-gray-500">যে আদর্শগুলো আমাদের প্রতিদিনের কাজকে পরিচালিত করে</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="w-10 h-10 text-primary" />, title: 'স্বচ্ছতা', desc: 'প্রতিটি লেনদেন এবং প্রকল্পের অগ্রগতি সম্পূর্ণ স্বচ্ছ।' },
              { icon: <Target className="w-10 h-10 text-secondary" />, title: 'সততা', desc: 'কৃষক ও বিনিয়োগকারীদের সাথে আমাদের সম্পর্ক সততার ওপর ভিত্তি করে।' },
              { icon: <Eye className="w-10 h-10 text-primary" />, title: 'দূরদৃষ্টি', desc: 'আধুনিক প্রযুক্তির মাধ্যমে কৃষিকে বিশ্বমানে নিয়ে যাওয়া।' },
              { icon: <Heart className="w-10 h-10 text-secondary" />, title: 'সহমর্মিতা', desc: 'কৃষকদের জীবনযাত্রার মানোন্নয়নে আমরা নিবেদিত।' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center border border-gray-100">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
