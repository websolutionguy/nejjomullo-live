import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsGrid from '@/components/StatsGrid';
import ProjectCard from '@/components/ProjectCard';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import LocationModal from '@/components/LocationModal';
import { ArrowRight, Star, Quote, Droplets, Leaf, Nut, Milk } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import MustardOil from '@/public/images/mustard-oil.jpg';
import SundarbansNaturalHoney from '@/public/images/Sundarbans-Natural-Honey.jpg';
import OrganicSpiceProcessing from '@/public/images/Organic-Spice-Processing.jpg';
import CashewAlmondFarming from '@/public/images/Cashew & Almond Farming.jpg';
import Ghee from '@/public/images/ghee.jpg';

const featuredProjects = [
  {
    id: 'mustard-oil-1',
    title: 'প্রিমিয়াম সরিষার তেল উৎপাদন প্রকল্প',
    category: 'ওয়েল এন্ড ঘী',
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
];

const featuredProducts = [
  { id: 'p1', title: 'খাঁটি গাওয়া ঘি (৫০০ গ্রাম)', price: 1250, image: Ghee, rating: 5, category: 'ওয়েল এন্ড ঘী' },
  { id: 'p2', title: 'লিচু ফুলের মধু (১ কেজি)', price: 950, image: SundarbansNaturalHoney, rating: 4, category: 'মধু' },
  { id: 'p3', title: 'প্রিমিয়াম কাজু বাদাম (২৫০ গ্রাম)', price: 450, image: CashewAlmondFarming, rating: 5, category: 'নাটস্ এন্ড সীডস্' },
  { id: 'p4', title: 'অর্গানিক হলুদ গুঁড়া (২০০ গ্রাম)', price: 180, image: OrganicSpiceProcessing, rating: 4, category: 'মসলা' },
];

import farmer from '@/public/images/farmer.jpg';
import investor from '@/public/images/investor.jpg';

const testimonials = [
  {
    name: 'মো: আব্দুর রহমান',
    role: 'বিনিয়োগকারী',
    text: 'ন্যায্যমূল্য প্ল্যাটফর্মে বিনিয়োগ করে আমি অত্যন্ত সন্তুষ্ট। তাদের স্বচ্ছতা এবং নিয়মিত আপডেট আমাকে মুগ্ধ করেছে।',
    image: investor,
  },
  {
    name: 'মো: করিম শেখ',
    role: 'কৃষক',
    text: 'আগে দালালের খপ্পরে পড়ে ন্যায্য দাম পেতাম না। এখন সরাসরি বিনিয়োগকারীদের সহায়তায় ভালো ফলন পাচ্ছি এবং সঠিক দাম পাচ্ছি।',
    image: farmer,
  },
];

export default function Home() {
  const categoryIcons = [Droplets, Star, Leaf, Nut, Milk];

  return (
    <main className="min-h-screen">
      <LocationModal />
      <Navbar />
      <Hero />
      <StatsGrid />

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">বিনিয়োগের সুযোগ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">চলমান বিনিয়োগ প্রকল্পসমূহ</h2>
            </div>
            <Link href="/projects" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              সবগুলো দেখুন <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">আমাদের পণ্য বিভাগসমূহ</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">সরাসরি খামার থেকে সংগৃহীত বিশুদ্ধ এবং প্রাকৃতিক পণ্যের বিশাল সমাহার</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['ওয়েল এন্ড ঘী', 'মধু', 'মসলা', 'নাটস্ এন্ড সীডস্', 'দুধ এন্ড ডিম'].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {(() => {
                    const Icon = categoryIcons[i];
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>
                <h3 className="font-bold text-gray-800">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:items-center text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">আমাদের শপ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">নির্বাচিত পণ্যসমূহ</h2>
            <p className="text-gray-500 max-w-2xl">সেরা মানের বিশুদ্ধ পণ্য এখন আপনার হাতের নাগালে</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {featuredProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-xl">
              সব পণ্য দেখুন <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">মানুষ যা বলে</h2>
            <p className="text-white/80">আমাদের কৃষক এবং বিনিয়োগকারীদের সম্প্রদায়ের কাছ থেকে শুনুন</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-100" />
                <p className="text-gray-600 text-lg mb-8 italic relative z-10">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-primary font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-secondary/20">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <Image src="https://picsum.photos/seed/pattern/1920/1080" alt="pattern" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                আপনার সম্পদ এবং পৃথিবী কি একসাথে বৃদ্ধি করতে প্রস্তুত?
              </h2>
              <p className="text-xl text-white/90 mb-12">
                হাজার হাজার বিনিয়োগকারীদের সাথে যোগ দিন এবং বাংলাদেশের কৃষি বিপ্লবের অংশ হোন।
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-secondary px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl">
                  এখনই শুরু করুন
                </button>
                <button className="bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
                  আমাদের সাথে কথা বলুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
