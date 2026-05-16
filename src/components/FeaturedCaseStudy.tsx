import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

export default function FeaturedCaseStudy() {
  const steps = [
    { title: 'The Challenge', desc: 'A major gaming creator needed to revitalize their brand and increase CTR on a dwindling series.' },
    { title: 'The Strategy', desc: 'Applied high-contrast focal points and emotional framing to test psychological triggers.' },
    { title: 'The Result', desc: 'Average view duration increased by 22% and CTR soared to a record-breaking 14.8%.' }
  ];

  return (
    <section className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bento-tile p-8 md:p-20 relative overflow-hidden bg-brand-slate/30">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/10 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-widest rounded-full mb-8">
                Featured Case Study
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold text-brand-white mb-8 tracking-tighter leading-tight">
                Breaking the <br />
                <span className="italic text-brand-purple">CTR Limit.</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={step.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-brand-cyan">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-brand-white font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-brand-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-brand-purple text-white px-10 py-4 rounded-2xl font-bold shadow-2xl shadow-brand-purple/30 group"
              >
                Read Full Story
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative rounded-[40px] overflow-hidden group shadow-[0_0_100px_rgba(99,102,241,0.2)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200" 
                alt="Case Study Visual" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-brand-black/90 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-brand-gray text-[10px] uppercase font-black mb-1">Impact Delivered</p>
                    <p className="text-white font-bold text-lg">+14.8% Click-Through Rate</p>
                  </div>
                  <div className="bg-brand-cyan/20 p-2 rounded-xl">
                    <CheckCircle className="text-brand-cyan" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
