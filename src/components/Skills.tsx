import { motion } from 'motion/react';
import { Palette, PenTool, Layout, Youtube, Share2, Award, Zap } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'Adobe Photoshop', icon: Palette, level: '95%', color: 'from-blue-500 to-blue-700' },
    { name: 'Adobe Illustrator', icon: PenTool, level: '90%', color: 'from-orange-500 to-orange-700' },
    { name: 'Figma', icon: Layout, level: '85%', color: 'from-purple-500 to-purple-700' },
    { name: 'Thumbnail Design', icon: Youtube, level: '100%', color: 'from-red-500 to-red-700' },
    { name: 'Social Media Design', icon: Share2, level: '95%', color: 'from-cyan-500 to-cyan-700' },
    { name: 'Branding', icon: Award, level: '80%', color: 'from-indigo-500 to-indigo-700' },
    { name: 'UI Design', icon: Zap, level: '75%', color: 'from-yellow-500 to-yellow-700' },
  ];

  return (
    <section id="skills" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-cyan font-semibold uppercase tracking-widest text-xs mb-4"
          >
            My Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-extrabold mb-6"
          >
            Creative <span className="text-brand-purple">Arsenal.</span>
          </motion.h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            I leverage the latest design tools and techniques to deliver visuals that don't just look good, but perform exceptionally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, borderColor: 'rgba(99, 102, 241, 0.4)' }}
              className="group bento-tile p-8 hover:bg-white/10"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="w-full h-full bg-brand-slate rounded-[calc(1rem-2px)] flex items-center justify-center">
                  <skill.icon size={28} className="text-brand-white" />
                </div>
              </div>
              
              <h3 className="text-brand-white font-bold text-xl mb-4">{skill.name}</h3>
              
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-2">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <p className="text-brand-cyan text-right text-xs font-bold font-mono tracking-widest">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
}
