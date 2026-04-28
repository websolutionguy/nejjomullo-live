'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { bangladeshData, District } from '@/lib/bangladesh-data';
import { MapPin, Check, ChevronRight, Search } from 'lucide-react';

export default function LocationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [selectedUpazila, setSelectedUpazila] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedLocation = localStorage.getItem('user-location');
    if (!savedLocation) {
      setTimeout(() => setIsOpen(true), 0);
    }
  }, []);

  const handleDistrictSelect = (district: District) => {
    setSelectedDistrict(district);
    setSearchQuery('');
    setStep(2);
  };

  const handleUpazilaSelect = (upazila: string) => {
    setSelectedUpazila(upazila);
    const locationData = {
      district: String(selectedDistrict?.name || ''),
      upazila: String(upazila),
    };
    localStorage.setItem('user-location', JSON.stringify(locationData));
    setIsOpen(false);
  };

  const filteredDistricts = bangladeshData.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUpazilas = selectedDistrict?.upazilas.filter((u) =>
    u.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        >
          <div className="bg-primary p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6" />
              <h2 className="text-2xl font-bold">আপনার অবস্থান নির্বাচন করুন</h2>
            </div>
            <p className="text-white/80 text-sm">
              ন্যায্যমূল্য প্ল্যাটফর্মে আপনাকে স্বাগতম। আপনার এলাকার সেরা অফারগুলো দেখতে আপনার অবস্থান নির্বাচন করুন।
            </p>
          </div>

          <div className="p-6">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={step === 1 ? "জেলা খুঁজুন..." : "উপজেলা খুঁজুন..."}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
              {step === 1 ? (
                <div className="grid grid-cols-1 gap-2">
                  {filteredDistricts.map((district) => (
                    <button
                      key={district.id}
                      onClick={() => handleDistrictSelect(district)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all text-left group"
                    >
                      <span className="font-medium text-gray-700">{district.name}</span>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => setStep(1)}
                    className="text-primary text-sm font-medium mb-2 hover:underline flex items-center gap-1"
                  >
                    ← জেলা পরিবর্তন করুন
                  </button>
                  {filteredUpazilas?.map((upazila) => (
                    <button
                      key={upazila}
                      onClick={() => handleUpazilaSelect(upazila)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all text-left group"
                    >
                      <span className="font-medium text-gray-700">{upazila}</span>
                      <Check className="w-5 h-5 text-transparent group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
            নিরাপদ এবং স্বচ্ছ এগ্রোটেক ইনভেস্টমেন্ট প্ল্যাটফর্ম
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
