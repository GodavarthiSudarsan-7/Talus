import { 
  LinkedinLogo, 
  XLogo, 
  GithubLogo 
} from '@phosphor-icons/react';

const footerLinks = {
  platform: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  trust: [
    { label: 'IP Policy', href: '#' },
    { label: 'Attribution Guidelines', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
  { icon: XLogo, href: '#', label: 'X (Twitter)' },
  { icon: GithubLogo, href: '#', label: 'GitHub' },
];

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4 opacity-100">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg font-semibold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-medium tracking-tight">Nexus</span>
            </a>
            <p className="text-sm text-foreground/50 leading-relaxed mb-6">
              Blockchain-verified innovation platform connecting enterprises with global innovators.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <social.icon size={20} weight="light" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/30 mb-4 opacity-100">
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/30 mb-4 opacity-100">
              Trust & Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.trust.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/30 mb-4 opacity-100">
              Stay Updated
            </h4>
            <p className="text-sm text-foreground/50 mb-4">
              Get insights on open innovation and blockchain-backed collaboration.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/30">
              © 2024 Nexus. All rights reserved.
            </p>
            <p className="text-sm text-foreground/30">
              Built with transparency. Verified by blockchain.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};