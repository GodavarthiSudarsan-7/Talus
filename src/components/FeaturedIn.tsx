import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const logos = [
  { name: 'TechCrunch', width: 140 },
  { name: 'Forbes', width: 100 },
  { name: 'Wired', width: 90 },
  { name: 'MIT Tech Review', width: 150 },
  { name: 'Fast Company', width: 140 },
  { name: 'Bloomberg', width: 130 },
];

export const FeaturedIn = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <p className="text-center text-sm text-muted-foreground mb-10 tracking-wide uppercase">
            Featured in leading publications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center h-8 opacity-40 hover:opacity-70 transition-opacity duration-300"
                style={{ width: logo.width }}
              >
                <span className="text-xl font-medium tracking-tight text-foreground">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
