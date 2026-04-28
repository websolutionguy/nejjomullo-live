'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

import MustardOil from '@/public/images/mustard-oil.jpg';
import SundarbansNaturalHoney from '@/public/images/Sundarbans-Natural-Honey.jpg';
import OrganicSpiceProcessing from '@/public/images/Organic-Spice-Processing.jpg';
import CashewAlmondFarming from '@/public/images/Cashew & Almond Farming.jpg';
import DairyFarm from '@/public/images/Dairy Farm.jpg';
import LayerPoultryFarm from '@/public/images/Layer Poultry Farm.jpg';
import Ghee from '@/public/images/Ghee.jpg';


const products = [
  { id: 'p1', title: 'খাঁটি গাওয়া ঘি (৫০০ গ্রাম)', price: 1250, image: Ghee, rating: 5, category: 'ওয়েল এন্ড ঘী' },
  { id: 'p2', title: 'লিচু ফুলের মধু (১ কেজি)', price: 950, image: SundarbansNaturalHoney, rating: 4, category: 'মধু' },
  { id: 'p3', title: 'প্রিমিয়াম কাজু বাদাম (২৫০ গ্রাম)', price: 450, image: CashewAlmondFarming, rating: 5, category: 'নাটস্ এন্ড সীডস্' },
  { id: 'p4', title: 'অর্গানিক হলুদ গুঁড়া (২০০ গ্রাম)', price: 180, image: OrganicSpiceProcessing, rating: 4, category: 'মসলা' },
  { id: 'p5', title: 'সরিষার তেল (১ লিটার)', price: 280, image: MustardOil, rating: 5, category: 'ওয়েল এন্ড ঘী' },
  { id: 'p6', title: 'কালোজিরা মধু (৫০০ গ্রাম)', price: 750, image: SundarbansNaturalHoney, rating: 5, category: 'মধু' },
  { id: 'p7', title: 'অর্গানিক মরিচ গুঁড়া (২০০ গ্রাম)', price: 190, image: OrganicSpiceProcessing, rating: 4, category: 'মসলা' },
  { id: 'p8', title: 'কাঠবাদাম (৫০০ গ্রাম)', price: 850, image: CashewAlmondFarming, rating: 5, category: 'নাটস্ এন্ড সীডস্' },
];

const categories = ['সবগুলো', 'ওয়েল এন্ড ঘী', 'মধু', 'মসলা', 'নাটস্ এন্ড সীডস্', 'দুধ এন্ড ডিম'];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['সবগুলো']);
  const [priceRange, setPriceRange] = useState(5000);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.includes('সবগুলো') || selectedCategories.includes(product.category);
      const matchesPrice = product.price <= priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategories, priceRange]);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'সবগুলো') {
      setSelectedCategories(['সবগুলো']);
    } else {
      setSelectedCategories((prev) => {
        const newCats = prev.filter((c) => c !== 'সবগুলো');
        if (newCats.includes(cat)) {
          const filtered = newCats.filter((c) => c !== cat);
          return filtered.length === 0 ? ['সবগুলো'] : filtered;
        } else {
          return [...newCats, cat];
        }
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">আমাদের পণ্যসমূহ</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            সরাসরি খামার থেকে সংগৃহীত ১০০% বিশুদ্ধ এবং প্রাকৃতিক পণ্য।
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <div className="flex items-center gap-2 mb-6 font-bold text-gray-900 border-b pb-4">
                  <SlidersHorizontal className="w-5 h-5" />
                  ফিল্টার করুন
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-4">ক্যাটাগরি</h4>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                          className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer" 
                        />
                        <span className="text-gray-600 group-hover:text-primary transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-4">মূল্য পরিসীমা (৳{priceRange})</h4>
                  <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full accent-primary cursor-pointer" 
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>৳১০০</span>
                    <span>৳৫০০০</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="পণ্য খুঁজুন..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} rating={5} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                  <p className="text-gray-400 text-lg">কোনো পণ্য পাওয়া যায়নি</p>
                </div>
              )}

              {/* Pagination (Visual only for now) */}
              {filteredProducts.length > 0 && (
                <div className="mt-12 flex justify-center gap-2">
                  {[1].map((page) => (
                    <button
                      key={page}
                      className={`w-12 h-12 rounded-xl font-bold transition-all bg-primary text-white shadow-lg cursor-pointer`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
