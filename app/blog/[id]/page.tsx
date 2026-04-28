import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';

import MasterdFood from '@/public/images/mustard-cultivation.jpg';
import Organic from '@/public/images/organic-products.jpg';
import Invest from '@/public/images/investment-in-agricultural.jpg';

const blogPosts = [
  {
    id: '1',
    title: 'আধুনিক পদ্ধতিতে সরিষা চাষের সঠিক নিয়ম',
    slug: 'modern-mustard-cultivation',
    excerpt: 'সরিষা চাষে লাভবান হতে হলে সঠিক জাত নির্বাচন এবং আধুনিক চাষ পদ্ধতি জানা অত্যন্ত জরুরি...',
    image: MasterdFood,
    date: '১০ এপ্রিল, ২০২৪',
    author: 'কৃষিবিদ মো: হাসান',
    category: 'চাষ পদ্ধতি',
    content: `
      <p>সরিষা বাংলাদেশের একটি প্রধান ভোজ্য তেলবীজ ফসল। সরিষা চাষে লাভবান হতে হলে সঠিক জাত নির্বাচন এবং আধুনিক চাষ পদ্ধতি জানা অত্যন্ত জরুরি।</p>
      <h3>১. জমি তৈরি</h3>
      <p>সরিষা চাষের জন্য দো-আঁশ বা বেলে দো-আঁশ মাটি সবচেয়ে উপযোগী। জমি ৪-৫টি আড়াআড়ি চাষ ও মই দিয়ে ঝুরঝুরে করে তৈরি করতে হবে।</p>
      <h3>২. বপনের সময়</h3>
      <p>কার্তিক মাস (অক্টোবরের মাঝামাঝি থেকে নভেম্বরের মাঝামাঝি) সরিষা বপনের উপযুক্ত সময়।</p>
      <h3>৩. সার ব্যবস্থাপনা</h3>
      <p>ইউরিয়া, টিএসপি, এমওপি এবং জিপসাম সার সঠিক পরিমাণে প্রয়োগ করতে হবে। জৈব সার ব্যবহার করলে ফলন আরও ভালো হয়।</p>
      <h3>৪. সেচ ও নিড়ানি</h3>
      <p>ফুল আসার সময় এবং ফল ধরার সময় হালকা সেচ দিতে হবে। আগাছা পরিষ্কার রাখা অত্যন্ত জরুরি।</p>
    `,
  },
  {
    id: '2',
    title: 'কেন অর্গানিক পণ্য আপনার স্বাস্থ্যের জন্য জরুরি?',
    slug: 'why-organic-products-are-essential-for-your-health',
    excerpt: 'বর্তমান সময়ে রাসায়নিকযুক্ত খাবারের ভিড়ে অর্গানিক পণ্য কেন সেরা পছন্দ হওয়া উচিত তা নিয়ে বিস্তারিত...',
    image: Organic,
    date: '০৮ এপ্রিল, ২০২৪',
    author: 'ডা: নাজনীন আক্তার',
    category: 'স্বাস্থ্য ও পুষ্টি',
    content: `
      <p>রাসায়নিক মুক্ত অর্গানিক পণ্য গ্রহণ করলে শরীরের রোগ প্রতিরোধ ক্ষমতা বেড়ে যায় এবং দীর্ঘস্থায়ী রোগের ঝুঁকি কমে।</p>
      <h3>১. কীভাবে অর্গানিক সনাক্ত করবেন</h3>
      <p>লেবেল পড়ুন, উৎপাদনের পদ্ধতি দেখুন, এবং বিশ্বস্ত সরবরাহকারীর কাছ থেকে ক্রয় করুন।</p>
      <h3>২. আপনার খাদ্যাভাসে অর্গানিক পণ্যের ভূমিকা</h3>
      <p>অর্গানিক ফল এবং সবজি অ্যাডিটিভ মুক্ত এবং পুষ্টিতে সমৃদ্ধ।</p>
      <h3>৩. পরিবেশবান্ধব চাষ</h3>
      <p>অর্গানিক চাষ পানির দুষণ কমায় এবং মাটি উর্বর রাখে।</p>
    `,
  },
  {
    id: '3',
    title: 'কৃষি খাতে বিনিয়োগের ভবিষ্যৎ ও সম্ভাবনা',
    slug: 'future-and-potential-of-investing-in-agriculture',
    excerpt: 'বাংলাদেশের অর্থনীতিতে কৃষি খাতের অবদান এবং কেন এটি বিনিয়োগের জন্য একটি নিরাপদ ক্ষেত্র...',
    image: Invest,
    date: '০৫ এপ্রিল, ২০২৪',
    author: 'অর্থনীতিবিদ ড. রহিম',
    category: 'বিনিয়োগ',
    content: `
      <p>কৃষি খাত বাংলাদেশের অর্থনৈতিক প্রবৃদ্ধিতে গুরুত্বপূর্ণ ভূমিকা রাখে। এটি স্থিতিশীল রিটার্ন এবং কর্মসংস্থান তৈরি করে।</p>
      <h3>১. কৃষি বিনিয়োগের সুবিধা</h3>
      <p>উচ্চ চাহিদা, বাজার সাপোর্ট, এবং সরকারী প্রণোদনা কৃষি বিনিয়োগকে লাভজনক করে তোলে।</p>
      <h3>২. ঝুঁকি ব্যবস্থাপনা</h3>
      <p>বিভিন্ন ফসল ও প্রকল্পে বিনিয়োগ করলে ঝুঁকি কমে যায় এবং স্থিতিশীল আয় আসে।</p>
      <h3>৩. টেকসই কৃষি</h3>
      <p>সঠিক প্রযুক্তি ও পরিবেশবান্ধব চাষপদ্ধতি দীর্ঘমেয়াদে লাভ বাড়ায়।</p>
    `,
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((item) => item.slug === params.id);
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <User className="w-5 h-5 text-primary" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">{post.date}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase">শেয়ার করুন:</span>
                <button className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></button>
                <button className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></button>
                <button className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image src={post.image} alt={post.title} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>

          <div 
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 pt-12 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <Tag className="w-5 h-5 text-primary" />
              <div className="flex gap-2">
                {['কৃষি', 'সরিষা', 'চাষ পদ্ধতি', 'বিনিয়োগ'].map((tag) => (
                  <span key={tag} className="bg-gray-50 text-gray-500 px-4 py-1 rounded-lg text-sm hover:bg-primary hover:text-white transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
