import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Mission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-4xl">
            {/* Green accent bar */}
            <div className="w-8 h-1 bg-primary mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 opacity-100">
              Democratizing Innovation, Protecting Contributions
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
              <p>
                We believe the world's greatest challenges require the world's best minds—
                regardless of where they work or who they know. Our platform breaks down the 
                barriers between enterprises and innovators, creating a transparent ecosystem 
                where every contribution is valued, verified, and protected.
              </p>
              
              <p>
                Through <a href="#features" className="text-primary hover:underline">blockchain-based reputation</a> and 
                verifiable attribution, we ensure that innovators receive credit for their work 
                while enterprises gain access to diverse, global expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};