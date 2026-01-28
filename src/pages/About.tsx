import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Target, Eye, Handshake } from '@phosphor-icons/react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mt-4 mb-6 opacity-100">
              Redefining How the World{' '}
              <span className="gradient-text">Innovates Together</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              We're building the infrastructure for transparent, verifiable collaboration 
              between enterprises and innovators worldwide.
            </p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-24"
          >
            <div className="glass-card p-8 text-center">
              <div className="icon-container mx-auto mb-6">
                <Target size={28} weight="light" className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4 opacity-100">Our Mission</h3>
              <p className="text-foreground/60 leading-relaxed">
                To democratize innovation by creating a trusted platform where every 
                contribution is valued, verified, and protected by blockchain technology.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="icon-container mx-auto mb-6">
                <Eye size={28} weight="light" className="text-secondary" />
              </div>
              <h3 className="text-xl font-medium mb-4 opacity-100">Our Vision</h3>
              <p className="text-foreground/60 leading-relaxed">
                A world where the best ideas win regardless of origin, where cross-industry 
                collaboration is the norm, and where innovation is truly open.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="icon-container mx-auto mb-6">
                <Handshake size={28} weight="light" className="text-accent" />
              </div>
              <h3 className="text-xl font-medium mb-4 opacity-100">Our Values</h3>
              <p className="text-foreground/60 leading-relaxed">
                Transparency, fairness, and trust. We believe in building systems that 
                protect contributors while enabling unprecedented collaboration.
              </p>
            </div>
          </motion.div>

          {/* Why Blockchain */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-10 md:p-14">
              <h2 className="text-3xl font-medium tracking-tight mb-6 opacity-100 text-center">
                Why Blockchain-Based Reputation Matters
              </h2>
              <div className="space-y-6 text-foreground/60 leading-relaxed">
                <p>
                  In traditional innovation ecosystems, trust is built through credentials, 
                  networks, and institutional affiliations. This creates barriers that exclude 
                  brilliant minds simply because they lack the "right" connections.
                </p>
                <p>
                  Blockchain changes everything. When every contribution is cryptographically 
                  signed and timestamped, your work speaks for itself. Your reputation becomes 
                  portable, verifiable, and impossible to fake or steal.
                </p>
                <p>
                  For enterprises, this means access to a global talent pool with transparent 
                  track records. For innovators, it means protection and recognition regardless 
                  of where you're from or who you know.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
