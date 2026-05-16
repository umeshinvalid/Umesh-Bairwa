import { motion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bento-tile p-8 md:p-14 lg:col-span-8 flex flex-col justify-center bg-gradient-to-br from-brand-slate to-brand-black"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple text-xs font-semibold uppercase tracking-widest mb-6 w-fit"
            >
              <Sparkles size={14} />
              Available for Hire
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Helping Creators & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
                Brands Go Viral.
              </span>
            </h1>
            
            <p className="text-brand-gray text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              I create high-converting thumbnails, engaging visuals, and modern graphic designs 
              that capture attention and drive real results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-brand-purple text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-brand-purple/20 transition-all group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-brand-slate border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-white/5 transition-all"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content / Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bento-tile lg:col-span-4 relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-brand-slate to-brand-black"
          >
            {/* Main Portrait with Glow */}
            <div className="relative w-full h-full group p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple to-brand-cyan opacity-20 blur-[80px] rounded-full group-hover:opacity-30 transition-opacity duration-500" />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2000"
                alt="Umesh Bairwa Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-3xl z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating UI Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-10 md:-left-20 bg-brand-slate/80 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-purple/20 rounded-lg">
                  <Sparkles size={20} className="text-brand-purple" />
                </div>
                <div>
                  <p className="text-brand-white font-bold text-sm">Creative Designer</p>
                  <p className="text-brand-gray text-[10px] uppercase tracking-wider">Expertise Level</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 -right-4 md:-right-12 bg-brand-slate/80 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-cyan/20 rounded-lg">
                  <TrendingUp size={20} className="text-brand-cyan" />
                </div>
                <div>
                  <p className="text-brand-white font-bold text-sm">High CTR Visuals</p>
                  <p className="text-brand-gray text-[10px] uppercase tracking-wider">Engagement Focused</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 md:-right-16 bg-brand-slate/80 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-brand-white font-bold text-sm">100+ Designs</p>
                  <p className="text-brand-gray text-[10px] uppercase tracking-wider">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
