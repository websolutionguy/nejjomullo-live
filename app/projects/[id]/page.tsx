'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, TrendingUp, Clock, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { motion } from 'motion/react';

import MustardOil from '@/public/images/mustard-oil.jpg';
import SundarbansNaturalHoney from '@/public/images/Sundarbans-Natural-Honey.jpg';
import OrganicSpiceProcessing from '@/public/images/Organic-Spice-Processing.jpg';
import CashewAlmondFarming from '@/public/images/Cashew & Almond Farming.jpg';
import DairyFarm from '@/public/images/Dairy Farm.jpg';
import LayerPoultryFarm from '@/public/images/Layer Poultry Farm.jpg';

const projectsData = [
  {
    id: 'mustard-oil-1',
    title: 'প্রিমিয়াম সরিষার তেল উৎপাদন প্রকল্প',
    category: 'ওয়েল এন্ড ঘী প্রজেক্ট',
    image: MustardOil,
    roi: '১৫-১৮%',
    duration: '১২ মাস',
    raised: 450000,
    goal: 600000,
    daysLeft: 15,
    description: 'আমাদের এই প্রকল্পে আমরা উন্নত মানের সরিষা থেকে কোল্ড প্রেস পদ্ধতিতে খাঁটি সরিষার তেল উৎপাদন করছি। বাজারের ভেজাল তেলের ভিড়ে আমরা দিচ্ছি শতভাগ বিশুদ্ধতার নিশ্চয়তা।',
    businessType: 'Production & Trading',
    investmentTime: '২ দিন',
    startDate: '১৪-০৪-২০২৬',
    matureDate: '১৩-০৪-২০২৭',
    minInvestment: 10000,
  },
  {
    id: 'honey-collection-1',
    title: 'সুন্দরবনের প্রাকৃতিক মধু সংগ্রহ',
    category: 'মধু প্রজেক্ট',
    image: SundarbansNaturalHoney,
    roi: '১২-১৫%',
    duration: '৮ মাস',
    raised: 800000,
    goal: 1000000,
    daysLeft: 20,
    description: 'সুন্দরবনের গহীন জঙ্গল থেকে প্রাকৃতিক উপায়ে মধু সংগ্রহ এবং তা সরাসরি ভোক্তাদের কাছে পৌঁছে দেওয়ার একটি চমৎকার উদ্যোগ।',
    businessType: 'Collection & Distribution',
    investmentTime: '৩ দিন',
    startDate: '০১-০৫-২০২৬',
    matureDate: '৩১-১২-২০২৬',
    minInvestment: 5000,
  },
  {
    id: 'organic-spice-1',
    title: 'অর্গানিক মসলা প্রক্রিয়াজাতকরণ',
    category: 'মসলা প্রজেক্ট',
    image: OrganicSpiceProcessing,
    roi: '১৪-১৭%',
    duration: '১০ মাস',
    raised: 320000,
    goal: 500000,
    daysLeft: 12,
    description: 'বাংলাদেশের অর্গানিক মসলার চাহিদা দিন দিন বাড়ছে। আমরা এই প্রকল্পে অর্গানিক হলুদ, মরিচ, ধনিয়া ইত্যাদি মসলা প্রক্রিয়াজাতকরণ করছি।',
    businessType: 'Processing & Export',
    investmentTime: '৫ দিন',
    startDate: '১৫-০৫-২০২৬',
    matureDate: '১৪-০৩-২০২৭',
    minInvestment: 15000,
  },
  {
    id: 'cashew-nuts-1',
    title: 'প্রিমিয়াম কাজু ও কাঠবাদাম চাষ',
    category: 'নাটস্ এন্ড সীডস্ প্রজেক্ট',
    image: CashewAlmondFarming,
    roi: '১৬-২০%',
    duration: '১৮ মাস',
    raised: 1200000,
    goal: 2000000,
    daysLeft: 45,
    description: 'আমরা উন্নত পদ্ধতিতে কাজু ও কাঠবাদাম চাষ করছি, যা বাজারের অনেকগুলি পণ্যের জন্য উপযুক্ত।',
    businessType: 'Agriculture & Farming',
    investmentTime: '৭ দিন',
    startDate: '০১-০৬-২০২৬',
    matureDate: '৩𝟏-١٢-٢٠٢٧',
    minInvestment: 20000,
  },
  {
    id: 'dairy-farm-1',
    title: 'উন্নত জাতের ডেইরি ফার্ম সম্প্রসারণ',
    category: 'দুধ এন্ড ডিম প্রজেক্ট',
    image: DairyFarm,
    roi: '১৩-১৬%',
    duration: '২৪ মাস',
    raised: 2500000,
    goal: 5000000,
    daysLeft: 60,
    description: 'আমাদের ডেইরি ফার্মে উন্নত জাতের গরু পালন করা হচ্ছে, যা থেকে আমরা খাঁটি দুধ এবং দুধজাত পণ্য উৎপাদন করছি।',
    businessType: 'Dairy Farming & Processing',
    investmentTime: '১০ দিন',
    startDate: '১৫-০৬-২০২৬',
    matureDate: '১৪-০৬-২০২৮',
    minInvestment: 50000,
  },
  {
    id: 'layer-chicken-1',
    title: 'অর্গানিক লেয়ার মুরগির খামার',
    category: 'দুধ এন্ড ডিম প্রজেক্ট',
    image: LayerPoultryFarm,
    roi: '১৫-১৯%',
    duration: '১২ মাস',
    raised: 600000,
    goal: 800000,
    daysLeft: 10,
    description: 'আমাদের অর্গানিক লেয়ার মুরগির খামারে আমরা উন্নত পদ্ধতিতে মুরগি পালন করছি, যা থেকে আমরা খাঁটি ডিম উৎপাদন করছি।',
    businessType: 'Poultry Farming & Egg Production',
    investmentTime: '৫ দিন',
    startDate: '০১-০৭-২০২৬',
    matureDate: '৩০-০৬-২০২৭',
    minInvestment: 15000,
   },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  const progress = Math.min((project.raised / project.goal) * 100, 100);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-10">
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Info className="text-primary" /> প্রকল্পের বিবরণ
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> কেন এই প্রকল্পে বিনিয়োগ করবেন?
                </h2>
                <ul className="space-y-4">
                  {[
                    'শতভাগ বিশুদ্ধতার নিশ্চয়তা',
                    'অভিজ্ঞ টিম দ্বারা পরিচালিত',
                    'স্বচ্ছ হিসাব এবং নিয়মিত আপডেট',
                    'নিশ্চিত লভ্যাংশ এবং মূলধন নিরাপত্তা',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar / Investment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
                <div className="mb-8">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-lg font-bold text-primary">সংগৃহীত: {Math.round(progress)}%</span>
                    <span className="text-sm font-bold text-secondary flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {project.daysLeft} দিন বাকি
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-4 text-sm">
                    <span className="text-gray-500">লক্ষ্য: ৳{project.goal.toLocaleString()}</span>
                    <span className="text-gray-900 font-bold">সংগৃহীত: ৳{project.raised.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-500">বার্ষিক রিটার্ন</span>
                    <span className="font-bold text-primary">{project.roi}</span>
                  </div>
                  <div className="flex justify-between p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-500">প্রকল্পের মেয়াদ</span>
                    <span className="font-bold text-gray-900">{project.duration}</span>
                  </div>
                </div>

                <Link href={`/projects/${project.id}/invest`}>
                  <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 mb-4 cursor-pointer">
                    এখনই বিনিয়োগ করুন
                  </button>
                </Link>
                <p className="text-center text-xs text-gray-400">
                  বিনিয়োগ করার আগে আমাদের শর্তাবলী ভালো করে পড়ে নিন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
