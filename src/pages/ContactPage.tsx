import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  EnvelopeSimple, 
  MapPin, 
  Buildings,
  Lightbulb,
  Handshake
} from '@phosphor-icons/react';

const contactOptions = [
  {
    icon: Buildings,
    title: 'For Enterprises',
    description: 'Post challenges, access global innovators, and accelerate your R&D pipeline.',
    cta: 'Schedule a Demo',
    href: '#',
  },
  {
    icon: Lightbulb,
    title: 'For Innovators',
    description: 'Join our community, build your verified reputation, and contribute to real challenges.',
    cta: 'Join the Community',
    href: '#',
  },
  {
    icon: Handshake,
    title: 'For Partners',
    description: 'Explore partnership opportunities, integrations, and ecosystem collaboration.',
    cta: 'Partner With Us',
    href: '#',
  },
];

const ContactPage = () => {
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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mt-4 mb-6 opacity-100">
              Let's Build the Future{' '}
              <span className="gradient-text">Together</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Whether you're an enterprise seeking solutions, an innovator ready to contribute, 
              or a potential partner, we'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500"
              >
                <div className="icon-container mx-auto mb-6">
                  <option.icon size={28} weight="light" className="text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3 opacity-100">{option.title}</h3>
                <p className="text-foreground/60 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <a
                  href={option.href}
                  className="btn-neumorphic-secondary inline-block text-foreground opacity-100"
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl font-medium tracking-tight mb-8 opacity-100 text-center">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Company or organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-foreground/70 mb-2">I am a...</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select your role</option>
                    <option value="enterprise">Enterprise / Corporate</option>
                    <option value="innovator">Innovator / Researcher</option>
                    <option value="partner">Potential Partner</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-neumorphic w-full text-foreground opacity-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 text-foreground/50"
          >
            <div className="flex items-center gap-3">
              <EnvelopeSimple size={20} weight="light" />
              <span>hello@nexus.innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} weight="light" />
              <span>San Francisco, CA</span>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
