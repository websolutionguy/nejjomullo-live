import type { Metadata } from 'next';
import { Anek_Bangla } from 'next/font/google';
import './globals.css';

const anekBangla = Anek_Bangla({
  subsets: ['latin', 'bengali'],
  variable: '--font-anek-bangla',
});

export const metadata: Metadata = {
  title: 'ন্যায্যমূল্য ইনভেস্টমেন্ট প্ল্যাটফর্ম | বাংলাদেশের একটি উচ্চ-ক্ষমতাসম্পন্ন এগ্রোটেক ইনভেস্টমেন্ট প্ল্যাটফর্ম।',
  description: 'বাংলাদেশের একটি উচ্চ-ক্ষমতাসম্পন্ন এগ্রোটেক ইনভেস্টমেন্ট প্ল্যাটফর্ম।',
};

import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';
import GlobalLoader from '@/components/GlobalLoader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`${anekBangla.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <GlobalLoader />
        <CartProvider>
          {children}
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
