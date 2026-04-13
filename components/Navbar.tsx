'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

import Logo from '../public/images/nejjomullo.png';

const navLinks = [
  { name: 'মূল পাতা', href: '/' },
  { name: 'বিনিয়োগ প্রকল্প', href: '/projects' },
  { name: 'পণ্যসমূহ', href: '/products' },
  { name: 'আমাদের সম্পর্কে', href: '/about' },
  { name: 'ব্লগ', href: '/blog' },
  { name: 'যোগাযোগ', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<{ district: string; upazila: string } | null>(null);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const location = localStorage.getItem('user-location');
    if (location) {
      const parsed = JSON.parse(location);
      setTimeout(() => setUserLocation(parsed), 0);
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-primary">
              নেয্যমূল্য
            </span> */}
            <Image
              src={Logo}
              alt="Nejjomullo"
              width={210}
              height={80}
              placeholder="blur"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-secondary ${
                  pathname === link.href ? 'text-secondary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {userLocation && (
              <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>{userLocation.upazila}, {userLocation.district}</span>
              </div>
            )}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary transition-colors cursor-pointer">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="bg-secondary text-white px-6 py-2 rounded-full font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20 cursor-pointer">
              লগইন করুন
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary transition-colors cursor-pointer">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="p-2 rounded-lg text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    pathname === link.href ? 'text-secondary' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              {userLocation && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>{userLocation.upazila}, {userLocation.district}</span>
                </div>
              )}
              <button className="bg-primary text-white w-full py-3 rounded-xl font-bold">
                লগইন করুন
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
