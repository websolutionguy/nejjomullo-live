import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, BookOpen, Cookie, Shield, MessageSquare, CheckCircle, Link2, ExternalLink, AlertTriangle, Info } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">শর্তাবলী (Terms & Conditions)</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            ন্যায্যমূল্য প্ল্যাটফর্ম ব্যবহারের নিয়ম ও বিধিমালা।
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <div className="flex items-start gap-4 mb-12 bg-primary/5 p-8 rounded-3xl border border-primary/10">
                  <Info className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 m-0">ন্যায্যমূল্য-এ স্বাগতম!</h2>
                    <p className="m-0 text-gray-700">
                      এই শর্তাবলীতে ন্যায্যমূল্য-এর ওয়েবসাইট (<a href="https://nejjomullo.com/" className="text-primary hover:underline">https://nejjomullo.com/</a>) ব্যবহারের নিয়ম ও বিধিমালা বর্ণনা করা হয়েছে। এই ওয়েবসাইট ব্যবহার করার মাধ্যমে আমরা ধরে নিচ্ছি যে আপনি এই শর্তাবলীতে সম্মত হয়েছেন। যদি আপনি এই শর্তগুলো মেনে নিতে রাজি না হন, তাহলে অনুগ্রহ করে ন্যায্যমূল্য ব্যবহার করা থেকে বিরত থাকুন।
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      📘 পরিভাষা
                    </h2>
                    <p className="text-sm mb-4">এই শর্তাবলী, প্রাইভেসি পলিসি এবং অন্যান্য চুক্তিতে:</p>
                    <ul className="space-y-2 text-sm list-none p-0">
                      <li className="flex gap-2"><strong>&quot;আপনি&quot;:</strong> ওয়েবসাইট ব্যবহারকারী</li>
                      <li className="flex gap-2"><strong>&quot;আমরা&quot;:</strong> ন্যায্যমূল্য</li>
                      <li className="flex gap-2"><strong>&quot;পক্ষ&quot;:</strong> ব্যবহারকারী এবং কোম্পানি উভয়</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Cookie className="w-6 h-6 text-secondary" />
                      🍪 কুকিজ
                    </h2>
                    <p className="text-sm">
                      আমরা কুকিজ ব্যবহার করি। ন্যায্যমূল্য ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের প্রাইভেসি পলিসি অনুযায়ী কুকিজ ব্যবহারে সম্মতি দিচ্ছেন।
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    📜 লাইসেন্স (License)
                  </h2>
                  <p className="mb-6">
                    ন্যায্যমূল্য এবং/অথবা এর লাইসেন্সদাতারা ওয়েবসাইটের সকল কনটেন্টের মালিকানা রাখে। সকল মেধাস্বত্ব সংরক্ষিত। আপনি শুধুমাত্র ব্যক্তিগত ব্যবহারের জন্য এই ওয়েবসাইট ব্যবহার করতে পারবেন।
                  </p>
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <p className="font-bold text-red-700 mb-4">❌ আপনি যা করতে পারবেন না:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0 m-0">
                      {['কনটেন্ট পুনঃপ্রকাশ করা', 'বিক্রি, ভাড়া বা সাব-লাইসেন্স করা', 'কপি বা ডুপ্লিকেট করা', 'পুনর্বিতরণ করা'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-red-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                    💬 ব্যবহারকারীর মন্তব্য
                  </h2>
                  <p className="mb-4">
                    ওয়েবসাইটের কিছু অংশে ব্যবহারকারীরা মতামত প্রকাশ করতে পারবেন। ন্যায্যমূল্য মন্তব্য প্রকাশের আগে তা যাচাই করে না। মন্তব্যগুলো ব্যবহারকারীর নিজস্ব মতামত। আমরা কোনো মন্তব্যের জন্য দায়ী নই।
                  </p>
                  <p className="font-medium text-gray-800">
                    আমরা যেকোনো অনুপযুক্ত বা আপত্তিকর মন্তব্য মুছে ফেলার অধিকার রাখি।
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    ✔️ আপনার দায়িত্ব
                  </h2>
                  <ul className="space-y-3 list-none p-0">
                    {[
                      'আপনি মন্তব্য পোস্ট করার অধিকার রাখেন',
                      'কোনো তৃতীয় পক্ষের মেধাস্বত্ব লঙ্ঘন করছেন না',
                      'কোনো অবৈধ, আপত্তিকর বা মানহানিকর কনটেন্ট নেই',
                      'ব্যবসায়িক প্রচারণা বা অবৈধ কাজে ব্যবহার করা হবে না'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Link2 className="w-6 h-6 text-secondary" />
                    🔗 হাইপারলিংক (Hyperlinking)
                  </h2>
                  <p className="mb-4">নিম্নলিখিত প্রতিষ্ঠানগুলো অনুমতি ছাড়াই লিংক করতে পারবে:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {['সরকারি সংস্থা', 'সার্চ ইঞ্জিন', 'নিউজ সংস্থা', 'অনলাইন ডিরেক্টরি'].map((item, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center text-xs font-bold">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm italic">লিংক অবশ্যই বিভ্রান্তিকর হবে না এবং প্রাসঙ্গিক কনটেন্টের সাথে মানানসই হবে।</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="border border-gray-100 p-8 rounded-3xl">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-primary" /> iFrames
                    </h3>
                    <p className="text-sm">আমাদের অনুমতি ছাড়া আপনি আমাদের ওয়েবসাইটকে iframe এর মাধ্যমে পরিবর্তন বা প্রদর্শন করতে পারবেন না।</p>
                  </div>
                  <div className="border border-gray-100 p-8 rounded-3xl">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-secondary" /> কনটেন্ট দায়বদ্ধতা
                    </h3>
                    <p className="text-sm">আপনার ওয়েবসাইটে থাকা কনটেন্টের জন্য আমরা দায়ী নই। কোনো অবৈধ বা আপত্তিকর লিংক থাকা যাবে না।</p>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    🔒 অধিকার সংরক্ষণ
                  </h2>
                  <p>আমরা যেকোনো সময় লিংক অপসারণের অনুরোধ করতে পারি অথবা শর্তাবলী পরিবর্তন করতে পারি।</p>
                </div>

                <div className="bg-red-900 text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                    <AlertTriangle className="w-8 h-8 text-secondary" />
                    ⚠️ দায় অস্বীকার (Disclaimer)
                  </h2>
                  <div className="space-y-4 relative z-10 text-white/80">
                    <p>আমরা ওয়েবসাইটের তথ্যের সম্পূর্ণ সঠিকতা বা আপডেট থাকা নিশ্চিত করি না।</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>কোনো ক্ষতি বা লোকসানের জন্য আমরা দায়ী নই</li>
                      <li>ওয়েবসাইট ফ্রি থাকলে কোনো ক্ষতির দায় নেওয়া হবে না</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
