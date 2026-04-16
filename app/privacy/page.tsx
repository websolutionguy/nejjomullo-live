import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Lock, Eye, FileText, Info } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">গোপনীয়তা নীতি</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            নেয্যমূল্য প্ল্যাটফর্মে আপনার তথ্যের সুরক্ষা আমাদের প্রধান অগ্রাধিকার।
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <div className="flex items-start gap-4 mb-8 bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="m-0 text-gray-700">
                    <strong>নেয্যমূল্য</strong>, আমাদের ওয়েবসাইট (<a href="https://nejjomullo.com/" className="text-primary hover:underline">https://nejjomullo.com/</a>) এ আগত ভিজিটরদের গোপনীয়তা রক্ষা করা আমাদের প্রধান অগ্রাধিকারগুলোর একটি। এই প্রাইভেসি পলিসি ডকুমেন্টে বর্ণনা করা হয়েছে—নেয্যমূল্য কী ধরনের তথ্য সংগ্রহ করে এবং সেগুলো কীভাবে ব্যবহার করা হয়।
                  </p>
                </div>

                <p className="mb-8">
                  আপনার যদি আমাদের প্রাইভেসি পলিসি সম্পর্কে অতিরিক্ত কোনো প্রশ্ন থাকে বা আরও তথ্য প্রয়োজন হয়, তাহলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
                </p>

                <p className="mb-12">
                  এই প্রাইভেসি পলিসি শুধুমাত্র আমাদের ওয়েবসাইটের অনলাইন কার্যক্রমের ক্ষেত্রে প্রযোজ্য এবং ভিজিটরদের দ্বারা শেয়ারকৃত বা সংগ্রহকৃত তথ্যের জন্য প্রযোজ্য। এই নীতিমালা অফলাইন বা এই ওয়েবসাইটের বাইরের কোনো মাধ্যমে সংগৃহীত তথ্যের ক্ষেত্রে প্রযোজ্য নয়।
                </p>

                <hr className="my-12 border-gray-100" />

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    ✅ সম্মতি (Consent)
                  </h2>
                  <p>
                    আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের প্রাইভেসি পলিসির সাথে সম্মতি প্রদান করছেন এবং এর শর্তাবলীতে সম্মত হচ্ছেন।
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    📊 আমরা কী তথ্য সংগ্রহ করি
                  </h2>
                  <p className="mb-4">
                    আপনার কাছ থেকে যে ব্যক্তিগত তথ্য চাওয়া হয় এবং কেন চাওয়া হয়—তা তথ্য প্রদানের সময়ই স্পষ্টভাবে জানানো হবে।
                  </p>
                  <p className="mb-4">
                    আপনি যদি সরাসরি আমাদের সাথে যোগাযোগ করেন, তাহলে আমরা আপনার নাম, ইমেইল, ফোন নম্বর, মেসেজের বিষয়বস্তু, সংযুক্ত ফাইলসহ অন্যান্য তথ্য পেতে পারি যা আপনি প্রদান করেন।
                  </p>
                  <p>
                    আপনি যখন একটি অ্যাকাউন্ট রেজিস্টার করেন, তখন আমরা আপনার যোগাযোগ সংক্রান্ত তথ্য যেমন—নাম, কোম্পানির নাম, ঠিকানা, ইমেইল এবং ফোন নম্বর সংগ্রহ করতে পারি।
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Lock className="w-5 h-5 text-secondary" />
                    </div>
                    ⚙️ আমরা কীভাবে আপনার তথ্য ব্যবহার করি
                  </h2>
                  <p className="mb-4 text-gray-800 font-medium">আমরা আপনার তথ্য বিভিন্নভাবে ব্যবহার করি, যেমন:</p>
                  <ul className="space-y-3 list-none p-0">
                    {[
                      'আমাদের ওয়েবসাইট পরিচালনা ও রক্ষণাবেক্ষণ করা',
                      'ওয়েবসাইট উন্নত, ব্যক্তিগতকরণ এবং সম্প্রসারণ করা',
                      'ব্যবহারকারীর আচরণ বিশ্লেষণ করা',
                      'নতুন প্রোডাক্ট, সার্ভিস ও ফিচার তৈরি করা',
                      'আপনার সাথে যোগাযোগ করা (কাস্টমার সার্ভিস, আপডেট, মার্কেটিং ইত্যাদি)',
                      'ইমেইল পাঠানো',
                      'জালিয়াতি শনাক্ত ও প্রতিরোধ করা'
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
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    📁 লগ ফাইল (Log Files)
                  </h2>
                  <p className="mb-6">
                    নেয্যমূল্য একটি স্ট্যান্ডার্ড প্রক্রিয়া অনুসরণ করে লগ ফাইল ব্যবহার করে। এই ফাইলগুলো ভিজিটরদের ওয়েবসাইট ভিজিট করার সময় লগ করে। সব হোস্টিং কোম্পানি এই পদ্ধতি ব্যবহার করে।
                  </p>
                  <p className="mb-4 text-gray-800 font-medium">এই লগ ফাইলের মাধ্যমে সংগ্রহকৃত তথ্যের মধ্যে থাকতে পারে:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {['IP Address', 'ব্রাউজারের ধরন', 'Internet Service Provider (ISP)', 'তারিখ ও সময়', 'রেফারিং/এক্সিট পেজ', 'ক্লিক সংখ্যা'].map((item, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm font-medium">
                        • {item}
                      </div>
                    ))}
                  </div>
                  <p>
                    এই তথ্যগুলো কোনো ব্যক্তিগত পরিচয়ের সাথে সরাসরি সংযুক্ত নয়। এগুলো ব্যবহার করা হয় ট্রেন্ড বিশ্লেষণ, সাইট পরিচালনা, ব্যবহারকারীর গতিবিধি ট্র্যাকিং এবং ডেমোগ্রাফিক তথ্য সংগ্রহের জন্য।
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                    </div>
                    🔄 প্রাইভেসি পলিসির পরিবর্তন
                  </h2>
                  <p className="mb-4">
                    আমরা সময় সময় আমাদের প্রাইভেসি পলিসি আপডেট করতে পারি। তাই নিয়মিত এই পেজটি পর্যালোচনা করার জন্য অনুরোধ করা হচ্ছে।
                  </p>
                  <p>
                    যেকোনো পরিবর্তন এই পেজে প্রকাশ করার সাথে সাথে কার্যকর হবে।
                  </p>
                </div>

                <div className="bg-gray-900 text-white p-8 md:p-10 rounded-3xl text-center">
                  <h2 className="text-2xl font-bold mb-4">📞 যোগাযোগ করুন</h2>
                  <p className="text-white/70 mb-8">
                    আমাদের প্রাইভেসি পলিসি সম্পর্কে কোনো প্রশ্ন বা পরামর্শ থাকলে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                  >
                    যোগাযোগ পেজ
                  </a>
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
