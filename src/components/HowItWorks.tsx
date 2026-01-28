import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Buildings, Lightbulb, ShieldCheck } from '@phosphor-icons/react';

const steps = [
  {
    icon: Buildings,
    title: 'Companies Post Challenges',
    description: 'Enterprises define real-world problems with clear success criteria. Challenges are structured to attract cross-industry expertise while protecting sensitive information.',
  },
  {
    icon: Lightbulb,
    title: 'Innovators Submit Solutions',
    description: 'Global innovators submit and refine solution prototypes. Every contribution is timestamped and cryptographically verified on the blockchain.',
  },
  {
    icon: ShieldCheck,
    title: 'Community Validates & Verifies',
    description: 'Expert mentors and the community evaluate solutions. Top prototypes are surfaced through transparent scoring, with reputation permanently recorded.',
  },
];

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 opacity-100">
              From Problem to Verified Prototype
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A transparent, blockchain-backed process that protects contributions 
              while fostering genuine innovation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="group">
              {/* Green accent bar */}
              <div className="w-8 h-1 bg-primary mb-6" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <step.icon size={28} weight="light" className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium tracking-tight mb-4 opacity-100">
                {step.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};