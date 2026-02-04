import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import mockupImage from '@/assets/mockup.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/6 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm opacity-100">Blockchain-Verified Innovation Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6 opacity-100"
          >
            Turn Enterprise Challenges into{' '}
            <span className="gradient-text">Verified Prototypes</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-10"
          >
            Crowdsource solutions from a global community. Validate ideas with expert mentors. 
            Protect contributions with blockchain-based reputation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/login"
              className="btn-neumorphic flex items-center gap-2 text-foreground opacity-100"
            >
              Get Started
              <ArrowRight size={18} weight="light" />
            </Link>
            <a
              href="#features"
              className="btn-neumorphic-secondary text-foreground opacity-100"
            >
              Explore Features
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-lg border border-border/50 p-1 overflow-hidden">
            <img
              src={mockupImage}
              alt="Talus Platform Dashboard"
              className="w-full rounded-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
