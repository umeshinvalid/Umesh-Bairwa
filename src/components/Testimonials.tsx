import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Tech Creator',
      text: "Umesh's thumbnails completely changed the game for my channel. My CTR doubled in just two weeks!",
      image: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
      name: 'Marcus K.',
      role: 'SaaS Founder',
      text: "A true professional. He understood our brand identity perfectly and delivered high-end visuals on time.",
      image: 'https://i.pravatar.cc/150?u=marcus',
    },
    {
      name: 'Elena V.',
      role: 'Marketing Agency',
      text: "Working with Umesh is seamless. His designs are not just artistic but strategic and impact-driven.",
      image: 'https://i.pravatar.cc/150?u=elena',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-brand-slate relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/5 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Quote size={60} className="text-brand-purple/20 mx-auto mb-6" />
          <h2 className="font-display text-4xl font-extrabold text-brand-white">
            Client <span className="text-brand-purple">Love.</span>
          </h2>
        </div>

        <div className="relative h-[400px]">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ 
                opacity: activeIndex === idx ? 1 : 0,
                scale: activeIndex === idx ? 1 : 0.8,
                x: activeIndex === idx ? 0 : (idx < activeIndex ? -100 : 100),
                zIndex: activeIndex === idx ? 20 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute inset-0 bg-brand-black/40 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 flex flex-col items-center text-center justify-center`}
            >
              <div className="flex gap-1 mb-6 text-brand-cyan">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-brand-white text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                “{t.text}”
              </p>
              
              <img 
                src={t.image} 
                className="w-16 h-16 rounded-full border-2 border-brand-purple p-1 mb-4" 
                alt={t.name}
                referrerPolicy="no-referrer"
              />
              
              <div>
                <h4 className="text-brand-white font-bold text-lg">{t.name}</h4>
                <p className="text-brand-gray text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-brand-purple' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
