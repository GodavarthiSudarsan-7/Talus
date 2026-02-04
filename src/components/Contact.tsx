import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from '@phosphor-icons/react';

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-4xl">
            {/* Green accent bar */}
            <div className="w-8 h-1 bg-primary mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 opacity-100">
              Ready to Transform Innovation?
            </h2>
            <p className="text-xl text-foreground/60 mb-10 max-w-2xl">
              Whether you're an enterprise seeking solutions or an innovator ready to contribute, 
              we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a 
                href="mailto:hello@Talus.innovation"
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
    </section>
  );
};