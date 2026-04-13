import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // In a real app, you'd fetch the post by ID
  const post = {
    title: 'আধুনিক পদ্ধতিতে সরিষা চাষের সঠিক নিয়ম',
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
    image: 'https://picsum.photos/seed/blog1/1200/600',
    date: '১০ এপ্রিল, ২০২৪',
    author: 'কৃষিবিদ মো: হাসান',
    category: 'চাষ পদ্ধতি',
  };

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
