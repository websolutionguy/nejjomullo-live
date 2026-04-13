import { Users, TrendingUp, Wallet, Sprout } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    value: '৫,০০০+',
    label: 'সক্রিয় কৃষক',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-secondary" />,
    value: '১২-১৮%',
    label: 'বিনিয়োগকারীর রিটার্ন',
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    value: '৳২.৫এম+',
    label: 'সংগৃহীত তহবিল',
  },
  {
    icon: <Sprout className="w-8 h-8 text-secondary" />,
    value: '১০,০০০+',
    label: 'চাষকৃত জমি (একর)',
  },
];

export default function StatsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
