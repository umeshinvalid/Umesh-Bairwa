import { motion } from 'motion/react';
import { ExternalLink, Play, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Thumbnails', 'Branding', 'Social Media', 'UI Design'];

  const projects = [
    {
      id: 1,
      title: 'Viral Tech Thumbnail',
      category: 'Thumbnails',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000',
      description: 'Increased CTR by 15% for a top tech YouTuber.',
    },
    {
      id: 2,
      title: 'Neon Brand Identity',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1634942537034-31b01777bc54?q=80&w=1000',
      description: 'Full identity design for a futuristic startup.',
    },
    {
      id: 3,
      title: 'Creator Social Assets',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611605650171-d4198083833d?q=80&w=1000',
      description: 'Instagram & Twitter kit for multi-platform reach.',
    },
    {
      id: 4,
      title: 'Web3 Dashboard UI',
      category: 'UI Design',
      image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000',
      description: 'Modern interface design for crypto analysts.',
    },
    {
      id: 5,
      title: 'Gaming Channel Overlays',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000',
      description: 'High-energy stream assets for competitive gaming.',
    },
    {
      id: 6,
      title: 'Storytelling Storyboards',
      category: 'Thumbnails',
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000',
      description: 'Narrative-driven visual layouts for long-form video.',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-brand-slate/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-brand-purple font-semibold uppercase tracking-widest text-xs mb-4">My Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-white leading-tight">
              Crafted with <br />
              <span className="text-brand-cyan">Impact & Intent.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-brand-purple border-brand-purple text-white shadow-lg shadow-brand-purple/20' 
                    : 'bg-white/5 border-white/10 text-brand-gray hover:bg-white/10 hover:text-brand-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, borderColor: 'rgba(99, 102, 241, 0.4)' }}
              className="group relative bento-tile flex flex-col h-full bg-brand-black/40 shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-4 bg-brand-purple text-white rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye size={24} />
                  </button>
                  <button className="p-4 bg-white text-brand-black rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <ExternalLink size={24} />
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-[10px] uppercase font-black tracking-widest">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-brand-white font-bold text-2xl mb-3 tracking-tight">{project.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <motion.a
            href="https://behance.net"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-brand-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all group"
          >
            Explore Full Portfolio on Behance
            <ExternalLink size={18} className="text-brand-cyan group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
