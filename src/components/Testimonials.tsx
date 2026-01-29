import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Nexus transformed how we approach R&D. We went from 18 months to 4 months on prototype development, with verified contributions from innovators worldwide.",
    author: "Sarah Chen",
    role: "VP of Innovation, Fortune 500 Manufacturing",
  },
  {
    quote: "The blockchain-based reputation system gave us confidence to collaborate with unknown innovators. Every contribution is tracked and verified.",
    author: "Marcus Rodriguez",
    role: "Enterprise Lead, Global Energy Company",
  },
  {
    quote: "As an innovator, I finally have proof of my contributions. The transparent attribution system has opened doors to partnerships I never imagined.",
    author: "Dr. Aisha Patel",
    role: "Independent Innovator & Researcher",
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
          {/* Spring-style testimonial cards */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Main green card with diagonal cutout like Spring.io */}
                <div className="relative overflow-hidden">
                  {/* Green background with diagonal */}
                  <div className="relative flex">
                    {/* Main green section */}
                    <div className="bg-primary py-12 px-10 md:px-14 flex-1 max-w-4xl">
                      <p className="text-xl md:text-2xl font-normal leading-relaxed text-primary-foreground mb-8 opacity-100">
                        "{testimonial.quote}"
                      </p>

                      <div>
                        <p className="font-semibold text-primary-foreground/90 uppercase tracking-wider text-sm">
                          {testimonial.author}, {testimonial.role}
                        </p>
                        <a href="#contact" className="text-primary-foreground/70 text-sm hover:text-primary-foreground/90 transition-colors mt-2 inline-block opacity-100">
                          Learn more →
                        </a>
                      </div>
                    </div>
                    
                    {/* Diagonal extension */}
                    <div 
                      className="hidden md:block w-48 bg-primary/70"
                      style={{
                        clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};