import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const skills = [
    'Thumbnail Design', 'Graphic Design', 'Branding', 'Social Media Design', 'Video Editing'
  ];

  return (
    <section id="about" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Creative Workspace Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-purple/20 blur-2xl rounded-[40px] rotate-2" />
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000"
                alt="Creative Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bento-tile p-8 md:p-12 bg-white/5"
          >
            <p className="text-brand-purple font-semibold uppercase tracking-widest text-sm mb-4">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              A Personal Story & <br />
              <span className="text-brand-cyan">Creative Philosophy.</span>
            </h2>
            
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              I’m Umesh Bairwa, a passionate graphic designer dedicated to helping brands and creators stand out in the digital noise. My philosophy is simple: design should be more than just pretty visuals—it should be a strategic tool that drives engagement and captures the essence of a brand's story.
            </p>
            
            <p className="text-brand-gray text-lg mb-10 leading-relaxed">
              With a focus on high-impact thumbnails and modern branding, I blend artistic experimentation with data-driven design to ensure every pixel serves a purpose.
            </p>

            <div className="space-y-4 mb-10">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="p-1.5 bg-brand-cyan/20 rounded-full">
                    <CheckCircle2 size={16} className="text-brand-cyan" />
                  </div>
                  <span className="text-brand-white font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="#contact" 
                className="bg-white text-brand-black px-8 py-3 rounded-full font-bold hover:bg-brand-purple hover:text-white transition-all shadow-xl shadow-brand-purple/10"
              >
                Let's Collaborate
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
