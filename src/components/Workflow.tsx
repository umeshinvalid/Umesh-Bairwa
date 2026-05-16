import { motion } from 'motion/react';
import { Search, Lightbulb, PenTool, CheckCircle } from 'lucide-react';

export default function Workflow() {
  const steps = [
    { title: 'Research', desc: 'Understanding your brand, target audience, and current market trends.', icon: Search },
    { title: 'Concept', desc: 'Brainstorming creative angles and psychology-driven visual structures.', icon: Lightbulb },
    { title: 'Design', desc: 'Crafting the high-fidelity visuals using industry-leading tools.', icon: PenTool },
    { title: 'Delivery', desc: 'Final review, polishing, and delivering ready-to-use high-impact assets.', icon: CheckCircle },
  ];

  return (
    <section className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-brand-purple font-semibold uppercase tracking-widest text-xs mb-4">My Workflow</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-white">
            How Magic <span className="text-brand-cyan">Happens.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical/Horizontal Line */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative bento-tile p-8 bg-white/5 hover:bg-brand-purple/5"
              >
                <div className="w-28 h-28 rounded-[32px] bg-brand-slate border border-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/30 transition-all duration-300 relative z-10">
                  <step.icon size={40} className="text-brand-purple group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-purple text-white text-xs font-black flex items-center justify-center border-4 border-brand-black">
                    0{idx + 1}
                  </div>
                </div>
                
                <h3 className="text-brand-white font-bold text-2xl mb-4 group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
