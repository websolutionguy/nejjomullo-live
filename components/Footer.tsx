import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

import footerLogo from '@/public/images/nejjomullo-footer.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">নেয্যমূল্য</span> */}

              <Image
                src={footerLogo}
                alt="Nejjomullo"
                width={210}
                height={80}
                placeholder="blur"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              নেয্যমূল্য একটি আধুনিক এগ্রোটেক প্ল্যাটফর্ম যা কৃষক এবং বিনিয়োগকারীদের মধ্যে সরাসরি সংযোগ স্থাপন করে। আমরা কৃষি খাতে স্বচ্ছতা এবং সমৃদ্ধি নিশ্চিত করতে কাজ করি।
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-secondary pl-3">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">বিনিয়োগ প্রকল্প</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">পণ্যসমূহ</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">ব্লগ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-secondary pl-3">বিভাগসমূহ</h3>
            <ul className="space-y-4">
              <li><Link href="/products?cat=oil" className="text-gray-400 hover:text-white transition-colors">ওয়েল এন্ড ঘী</Link></li>
              <li><Link href="/products?cat=honey" className="text-gray-400 hover:text-white transition-colors">মধু</Link></li>
              <li><Link href="/products?cat=spice" className="text-gray-400 hover:text-white transition-colors">মসলা</Link></li>
              <li><Link href="/products?cat=nuts" className="text-gray-400 hover:text-white transition-colors">নাটস্ এন্ড সীডস্</Link></li>
              <li><Link href="/products?cat=dairy" className="text-gray-400 hover:text-white transition-colors">দুধ এন্ড ডিম</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-secondary pl-3">যোগাযোগ করুন</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-400">হাউজ ১২, লেভেল ৪, রোড ০৮, নিকুঞ্জ ২, ঢাকা - ১২২৯, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-400">+৮৮ ০১৭১১-৩৪০০৮০</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-400">info@nejjomullo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} নেয্যমূল্য ইনভেস্টমেন্ট প্ল্যাটফর্ম। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white">গোপনীয়তা নীতি</Link>
            <Link href="/terms" className="hover:text-white">শর্তাবলী</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
