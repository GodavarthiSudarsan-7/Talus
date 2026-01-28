import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  UsersThree, 
  ChalkboardTeacher, 
  Fingerprint, 
  GitBranch 
} from '@phosphor-icons/react';

const features = [
  {
    icon: UsersThree,
    title: 'Community Validation',
    description: 'Crowdsource expert feedback from a diverse community of innovators, engineers, and industry specialists.',
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: ChalkboardTeacher,
    title: 'Mentor Feedback',
    description: 'Connect with seasoned mentors who provide strategic guidance and technical expertise to refine solutions.',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: Fingerprint,
    title: 'Verifiable Attribution',
    description: 'Every contribution is permanently recorded on the blockchain, ensuring transparent and immutable proof of ownership.',
    gradient: 'from-accent to-accent/50',
  },
  {
    icon: GitBranch,
    title: 'Cross-Industry Collaboration',
    description: 'Break down silos and foster innovation by connecting expertise across industries, geographies, and disciplines.',
    gradient: 'from-primary to-secondary',
  },
];

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-16">
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-4 mb-6 opacity-100">
              Everything You Need to Innovate
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A complete platform for transparent, blockchain-verified innovation 
              and cross-industry collaboration.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20 absolute inset-0`} />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center relative">
                    <feature.icon size={28} weight="light" className="text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-medium tracking-tight mb-3 opacity-100">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
