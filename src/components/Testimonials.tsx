import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quotes } from '@phosphor-icons/react';

const testimonials = [
  {
    quote: "Nexus transformed how we approach R&D. We went from 18 months to 4 months on prototype development, with verified contributions from innovators worldwide.",
    author: "Sarah Chen",
    role: "VP of Innovation, Fortune 500 Manufacturing",
    result: "75% faster prototyping",
  },
  {
    quote: "The blockchain-based reputation system gave us confidence to collaborate with unknown innovators. Every contribution is tracked and verified.",
    author: "Marcus Rodriguez",
    role: "Enterprise Lead, Global Energy Company",
    result: "$2.4M cost reduction",
  },
  {
    quote: "As an innovator, I finally have proof of my contributions. The transparent attribution system has opened doors to partnerships I never imagined.",
    author: "Dr. Aisha Patel",
    role: "Independent Innovator & Researcher",
    result: "12 validated partnerships",
  },
  {
    quote: "Cross-industry collaboration used to be impossible due to IP concerns. Nexus's verified attribution changed everything for our open innovation program.",
    author: "Thomas Weber",
    role: "Chief Strategy Officer, Automotive Tier-1",
    result: "40+ cross-industry projects",
  },
  {
    quote: "The community validation process surfaces the best ideas while protecting everyone's intellectual contributions. It's how innovation should work.",
    author: "Jennifer Liu",
    role: "Director of Partnerships, Tech Accelerator",
    result: "3x startup success rate",
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-16">
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-4 mb-6 opacity-100">
              Trusted by Innovators Worldwide
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              See how enterprises and innovators are transforming collaboration with 
              blockchain-verified contributions.
            </p>
          </div>
        </div>

        <div className="testimonial-carousel -mx-6 px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card glass-card p-8"
            >
              <Quotes size={32} weight="light" className="text-primary/50 mb-4" />
              
              <p className="text-lg leading-relaxed mb-6 opacity-100">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" className="text-primary" />
                ))}
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="font-medium text-foreground opacity-100 mb-1">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/50 mb-3">
                  {testimonial.role}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
