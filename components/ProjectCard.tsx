import Image from 'next/image';
import Link from 'next/link';
import { Calendar, TrendingUp, Clock, ArrowRight } from 'lucide-react';

import type { StaticImageData } from 'next/image';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string | StaticImageData;
  roi: string;
  duration: string;
  raised: number;
  goal: number;
  daysLeft: number;
  businessType?: string;
  investmentTime?: string;
  startDate?: string;
  matureDate?: string;
  minInvestment?: number;
  inWaiting?: number;
  status?: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  image,
  roi,
  duration,
  raised,
  goal,
  daysLeft,
  businessType = 'Production & Trading',
  investmentTime = '2 Days',
  startDate = '14-04-2026',
  matureDate = '13-06-2026',
  minInvestment = 25700,
  inWaiting = 226.76,
  status = 'Collecting Investment',
}: ProjectCardProps) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-6 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Detailed Info Grid */}
        <div className="space-y-3 mb-8 text-[13px]">
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="font-bold text-[#4a148c]">ব্যবসার ধরন</span>
            <span className="font-bold text-[#4a148c]">{businessType}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <div className="flex flex-col">
              <span className="text-gray-500">বিনিয়োগের সময়:</span>
              <span className="font-bold text-[#4a148c]">{investmentTime}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">প্রকল্পের মেয়াদ:</span>
              <span className="font-bold text-gray-700">{duration}</span>
            </div>
            
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">শুরুর তারিখ:</span>
              <span className="font-bold text-gray-700">{startDate}</span>
            </div>
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">শেষ তারিখ:</span>
              <span className="font-bold text-gray-700">{matureDate}</span>
            </div>
            
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">বিনিয়োগের লক্ষ্য:</span>
              <span className="font-bold text-gray-700">৳{goal.toLocaleString()}.০০/=</span>
            </div>
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">সর্বনিম্ন বিনিয়োগ:</span>
              <span className="font-bold text-gray-700">৳{minInvestment.toLocaleString()}.০০/=</span>
            </div>
            
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">সংগৃহীত:</span>
              <span className="font-bold text-gray-700">৳{raised.toLocaleString()}.২৪/=</span>
            </div>
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">অপেক্ষমান:</span>
              <span className="font-bold text-gray-700">৳{inWaiting.toLocaleString()}/=</span>
            </div>
            
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">লভ্যাংশ (ROI):</span>
              <span className="font-bold text-gray-700">বার্ষিক {roi}</span>
            </div>
            <div className="flex flex-col border-t border-gray-50 pt-2">
              <span className="text-gray-500">প্রকল্পের অবস্থা:</span>
              <span className="font-bold text-blue-600">{status}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-gray-500">সংগৃহীত: {Math.round(progress)}%</span>
            <span className="text-xs font-bold text-secondary flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {daysLeft} দিন বাকি
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <Link href={`/projects/${id}`} className="flex-1">
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all cursor-pointer">
              বিস্তারিত
            </button>
          </Link>
          <Link href={`/projects/${id}/invest`} className="flex-[2]">
            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all group/btn cursor-pointer">
              এখনই বিনিয়োগ করুন
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
