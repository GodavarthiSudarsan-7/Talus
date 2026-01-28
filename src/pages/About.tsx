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
            className="max-w-4xl mb-24"
          >
            {/* Green accent bar */}
            <div className="w-8 h-1 bg-primary mb-8" />
            
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 opacity-100">
              Redefining How the World{' '}
              <span className="text-primary">Innovates Together</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl">
              We're building the infrastructure for transparent, verifiable collaboration 
              between enterprises and innovators worldwide.
            </p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-12 mb-24"
          >
            <div>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target size={28} weight="light" className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4 opacity-100">Our Mission</h3>
              <p className="text-foreground/60 leading-relaxed">
                To democratize innovation by creating a trusted platform where every 
                contribution is valued, verified, and protected by blockchain technology.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye size={28} weight="light" className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4 opacity-100">Our Vision</h3>
              <p className="text-foreground/60 leading-relaxed">
                A world where the best ideas win regardless of origin, where cross-industry 
                collaboration is the norm, and where innovation is truly open.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Handshake size={28} weight="light" className="text-primary" />
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
            className="max-w-4xl"
          >
            {/* Green accent bar */}
            <div className="w-8 h-1 bg-primary mb-8" />
            
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 opacity-100">
              Why Blockchain-Based Reputation Matters
            </h2>
            
            <div className="space-y-6 text-foreground/60 leading-relaxed text-lg">
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
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;