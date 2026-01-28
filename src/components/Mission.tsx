import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Rocket, Shield, Globe } from '@phosphor-icons/react';

export const Mission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm text-primary uppercase tracking-wider font-medium">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-4 mb-6 opacity-100">
                Democratizing Innovation,{' '}
                <span className="gradient-text">Protecting Contributions</span>
              </h2>
            </div>

            <div className="glass-card p-10 md:p-14">
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed text-center mb-12">
                We believe the world's greatest challenges require the world's best minds—
                regardless of where they work or who they know. Our platform breaks down the 
                barriers between enterprises and innovators, creating a transparent ecosystem 
                where every contribution is valued, verified, and protected.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="icon-container mx-auto mb-4">
                    <Rocket size={24} weight="light" className="text-primary" />
                  </div>
                  <h4 className="font-medium mb-2 opacity-100">Accelerate Innovation</h4>
                  <p className="text-sm text-foreground/50">
                    Reduce prototype cycles from years to months through global collaboration.
                  </p>
                </div>

                <div className="text-center">
                  <div className="icon-container mx-auto mb-4">
                    <Shield size={24} weight="light" className="text-secondary" />
                  </div>
                  <h4 className="font-medium mb-2 opacity-100">Protect Ownership</h4>
                  <p className="text-sm text-foreground/50">
                    Blockchain verification ensures contributions are never lost or stolen.
                  </p>
                </div>

                <div className="text-center">
                  <div className="icon-container mx-auto mb-4">
                    <Globe size={24} weight="light" className="text-accent" />
                  </div>
                  <h4 className="font-medium mb-2 opacity-100">Unite Industries</h4>
                  <p className="text-sm text-foreground/50">
                    Cross-industry expertise solves problems no single company could alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
