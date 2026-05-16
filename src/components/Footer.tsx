import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="#" className="font-display text-3xl font-bold tracking-tighter text-brand-white">
            UMESH<span className="text-brand-purple">.</span>
          </a>

          <div className="flex gap-8">
            <a href="#about" className="text-brand-gray hover:text-brand-white text-sm transition-colors uppercase tracking-widest font-black">About</a>
            <a href="#portfolio" className="text-brand-gray hover:text-brand-white text-sm transition-colors uppercase tracking-widest font-black">Work</a>
            <a href="#services" className="text-brand-gray hover:text-brand-white text-sm transition-colors uppercase tracking-widest font-black">Services</a>
            <a href="#contact" className="text-brand-gray hover:text-brand-white text-sm transition-colors uppercase tracking-widest font-black">Hire</a>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-brand-purple hover:border-brand-purple transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-gray text-[10px] sm:text-xs uppercase font-black tracking-widest">
          <p>© {currentYear} UMESH BAIRWA. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-purple fill-current" /> for Viral Creators.
          </p>
          <p>Portfolio v2.0</p>
        </div>
      </div>
    </footer>
  );
}
