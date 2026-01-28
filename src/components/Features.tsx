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
  },
  {
    icon: ChalkboardTeacher,
    title: 'Mentor Feedback',
    description: 'Connect with seasoned mentors who provide strategic guidance and technical expertise to refine solutions.',
  },
  {
    icon: Fingerprint,
    title: 'Verifiable Attribution',
    description: 'Every contribution is permanently recorded on the blockchain, ensuring transparent and immutable proof of ownership.',
  },
  {
    icon: GitBranch,
    title: 'Cross-Industry Collaboration',
    description: 'Break down silos and foster innovation by connecting expertise across industries, geographies, and disciplines.',
  },
];

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                {/* Green accent bar */}
                <div className="w-8 h-1 bg-primary mb-6" />
                
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 opacity-100">
                  {feature.title}
                </h3>

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon size={28} weight="light" className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-foreground/60 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};