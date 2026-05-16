import { motion } from 'motion/react';
import { Mail, Instagram, MessageCircle, ArrowUpRight, AtSign } from 'lucide-react';

export default function Contact() {
  const socials = [
    { name: 'Email', icon: Mail, value: 'umeshb7865@gmail.com', href: 'mailto:umeshb7865@gmail.com' },
    { name: 'Instagram', icon: Instagram, value: '@umesh_design', href: '#' },
    { name: 'Behance', icon: AtSign, value: 'UmeshBairwa', href: '#' },
    { name: 'WhatsApp', icon: MessageCircle, value: '+91 000-000-000', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-black relative">
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-brand-purple/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bento-tile p-8 md:p-20 bg-brand-slate/40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-extrabold text-brand-white mb-8 tracking-tighter leading-tight">
                Let’s Create <br />
                Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Amazing.</span>
              </h2>
              <p className="text-brand-gray text-xl mb-12 leading-relaxed">
                Whether you're a brand, a creator, or an agency, I'm ready to bring your vision to life. Let’s talk about your next big project.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="mailto:umeshb7865@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-purple text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-brand-purple/20 group"
                >
                  Start a Project
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.4)' }}
                  className="bento-tile p-8 flex flex-col justify-between h-[200px] transition-colors group bg-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:bg-brand-purple/30 transition-colors">
                    <social.icon size={24} className="text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-brand-gray text-[10px] uppercase font-black tracking-widest mb-2">{social.name}</p>
                    <p className="text-brand-white font-bold truncate">{social.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
