import { motion } from 'motion/react';
import { Youtube, Layers, Infinity, Smartphone, Monitor, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Thumbnail Design',
      desc: 'High-CTR, attention-grabbing thumbnails tailored for maximum engagement.',
      icon: Youtube,
      price: 'Starting from $49',
      features: ['24h Turnaround', 'A/B Testing Ready', 'Eye-Tracking Optimized'],
    },
    {
      title: 'Brand Identity',
      desc: 'Modern, minimal, and premium logos and brands that stand out.',
      icon: Palette,
      price: 'Starting from $299',
      features: ['Full Brand Kit', 'Style Guidelines', 'Source Files Included'],
    },
    {
      title: 'Social Media Management',
      desc: 'Engaging content designs for Instagram, Twitter, and LinkedIn.',
      icon: Smartphone,
      price: 'Custom Packages',
      features: ['Daily Post Assets', 'Story Templates', 'Carousel Designs'],
    },
    {
      title: 'UI/UX Concepts',
      desc: 'Stunning landing pages and dashboard concepts for creators.',
      icon: Monitor,
      price: 'Starting from $499',
      features: ['Figma Source', 'Responsive Layout', 'Interactive Prototypes'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-purple font-semibold uppercase tracking-widest text-xs mb-4">My Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-white mb-6">
            Everything You Need to <span className="text-brand-cyan">Go Viral.</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            I offer a range of creative services designed to elevate your brand and maximize your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, borderColor: 'rgba(99, 102, 241, 0.4)' }}
              className="bento-tile p-8 bg-brand-slate/20 flex flex-col h-full group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-purple/20 transition-colors">
                <service.icon size={32} className="text-brand-purple group-hover:text-brand-purple" />
              </div>
              
              <h3 className="text-brand-white font-bold text-2xl mb-4">{service.title}</h3>
              <p className="text-brand-gray text-sm mb-8 flex-grow">{service.desc}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-[10px] uppercase font-black text-brand-gray/80 tracking-widest">
                    <div className="w-1 h-1 bg-brand-cyan rounded-full" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-brand-cyan font-display font-black text-xl mb-6">{service.price}</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 px-6 bg-white text-brand-black rounded-2xl font-bold hover:bg-brand-purple hover:text-white transition-all shadow-xl"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
