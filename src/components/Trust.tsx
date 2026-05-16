import { motion } from 'motion/react';

export default function Trust() {
  const stats = [
    { label: 'Projects Completed', value: '250+' },
    { label: 'Clients Worldwide', value: '80+' },
    { label: 'Avg. CTR Increase', value: '45%' },
    { label: 'Hours of Design', value: '5,000+' },
  ];

  const tools = [
    'Adobe Photoshop', 'Adobe Illustrator', 'YouTube Thumbnails', 'Social Media Branding', 
    'Figma', 'UI Design', 'Logo Design', 'Motion Graphics', 'Marketing Visuals'
  ];

  return (
    <section className="py-20 bg-brand-slate overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="bento-tile p-8 flex flex-col items-center justify-center gap-2 text-center"
            >
              <h3 className="font-display text-4xl md:text-5xl font-extrabold text-brand-white">
                {stat.value}
              </h3>
              <p className="text-brand-gray text-[10px] uppercase tracking-[0.2em] font-black">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee Effect */}
        <div className="relative">
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex whitespace-nowrap gap-12 py-4"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...tools, ...tools].map((tool, idx) => (
                <span 
                  key={idx} 
                  className="text-3xl md:text-5xl font-display font-black text-brand-white/10 uppercase italic tracking-tighter"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
          {/* Faded Edges */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-brand-slate to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-brand-slate to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
