import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { EnvelopeSimple, ArrowRight } from '@phosphor-icons/react';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-10 md:p-14 text-center glow-primary">
              <div className="icon-container mx-auto mb-6">
                <EnvelopeSimple size={28} weight="light" className="text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 opacity-100">
                Ready to Transform Innovation?
              </h2>
              <p className="text-lg text-foreground/60 mb-10 max-w-xl mx-auto">
                Whether you're an enterprise seeking solutions or an innovator ready to contribute, 
                we'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:hello@nexus.innovation"
                  className="btn-neumorphic flex items-center gap-2 text-foreground opacity-100"
                >
                  Contact Us
                  <ArrowRight size={18} weight="light" />
                </a>
                <a
                  href="#"
                  className="btn-neumorphic-secondary text-foreground opacity-100"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
