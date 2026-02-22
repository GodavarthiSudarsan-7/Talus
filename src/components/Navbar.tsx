import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Mission', href: '#mission' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'nav-blur bg-background/90 border-b border-border/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 opacity-100">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg font-semibold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-medium tracking-tight">Talus</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                Contact
              </a>
              <Link to="/login" className="btn-neumorphic text-foreground opacity-100">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 text-foreground opacity-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} weight="light" />
              ) : (
                <List size={24} weight="light" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-card border-l border-border/30 md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-xl font-medium tracking-tight opacity-100">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 text-foreground opacity-100"
                    aria-label="Close menu"
                  >
                    <X size={24} weight="light" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="py-4 px-4 text-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="py-4 px-4 text-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="btn-neumorphic w-full text-center block text-foreground opacity-100"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}