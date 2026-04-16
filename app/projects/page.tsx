'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Search } from 'lucide-react';

import MustardOil from '@/public/images/mustard-oil.jpg';
import SundarbansNaturalHoney from '@/public/images/Sundarbans-Natural-Honey.jpg';
import OrganicSpiceProcessing from '@/public/images/Organic-Spice-Processing.jpg';
import CashewAlmondFarming from '@/public/images/Cashew & Almond Farming.jpg';
import DairyFarm from '@/public/images/Dairy Farm.jpg';
import LayerPoultryFarm from '@/public/images/Layer Poultry Farm.jpg';

const projects = [
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
  },
];

const categories = [
  { name: 'সবগুলো', value: 'all' },
  { name: 'ওয়েল এন্ড ঘী', value: 'ওয়েল এন্ড ঘী প্রজেক্ট' },
  { name: 'মধু', value: 'মধু প্রজেক্ট' },
  { name: 'মসলা', value: 'মসলা প্রজেক্ট' },
  { name: 'নাটস্ এন্ড সীডস্', value: 'নাটস্ এন্ড সীডস্ প্রজেক্ট' },
  { name: 'দুধ এন্ড ডিম', value: 'দুধ এন্ড ডিম প্রজেক্ট' },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">বিনিয়োগ প্রকল্পসমূহ</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            আপনার পছন্দের প্রকল্পে বিনিয়োগ করুন এবং আধুনিক কৃষির অংশীদার হোন।
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="প্রকল্প খুঁজুন..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition-all shadow-sm cursor-pointer ${
                    selectedCategory === cat.value ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">কোনো প্রকল্প পাওয়া যায়নি</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
