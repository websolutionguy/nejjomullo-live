import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'আধুনিক পদ্ধতিতে সরিষা চাষের সঠিক নিয়ম',
    excerpt: 'সরিষা চাষে লাভবান হতে হলে সঠিক জাত নির্বাচন এবং আধুনিক চাষ পদ্ধতি জানা অত্যন্ত জরুরি...',
    image: 'https://picsum.photos/seed/blog1/800/500',
    date: '১০ এপ্রিল, ২০২৪',
    author: 'কৃষিবিদ মো: হাসান',
    category: 'চাষ পদ্ধতি',
  },
  {
    id: '2',
    title: 'কেন অর্গানিক পণ্য আপনার স্বাস্থ্যের জন্য জরুরি?',
    excerpt: 'বর্তমান সময়ে রাসায়নিকযুক্ত খাবারের ভিড়ে অর্গানিক পণ্য কেন সেরা পছন্দ হওয়া উচিত তা নিয়ে বিস্তারিত...',
    image: 'https://picsum.photos/seed/blog2/800/500',
    date: '০৮ এপ্রিল, ২০২৪',
    author: 'ডা: নাজনীন আক্তার',
    category: 'স্বাস্থ্য ও পুষ্টি',
  },
  {
    id: '3',
    title: 'কৃষি খাতে বিনিয়োগের ভবিষ্যৎ ও সম্ভাবনা',
    excerpt: 'বাংলাদেশের অর্থনীতিতে কৃষি খাতের অবদান এবং কেন এটি বিনিয়োগের জন্য একটি নিরাপদ ক্ষেত্র...',
    image: 'https://picsum.photos/seed/blog3/800/500',
    date: '০৫ এপ্রিল, ২০২৪',
    author: 'অর্থনীতিবিদ ড. রহিম',
    category: 'বিনিয়োগ',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">আমাদের ব্লগ</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            কৃষি, বিনিয়োগ এবং স্বাস্থ্য বিষয়ক সর্বশেষ তথ্য ও পরামর্শ পেতে আমাদের ব্লগের সাথে থাকুন।
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-auto flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    আরও পড়ুন <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
