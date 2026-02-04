import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does blockchain protect my intellectual property?',
    answer: 'Every contribution you make is timestamped and cryptographically signed on the blockchain before being visible to others. This creates an immutable, verifiable record of your work that can be used to prove ownership in any dispute. The blockchain acts as a neutral, permanent ledger that neither Talus nor any other party can alter.',
  },
  {
    question: 'Who owns the solutions submitted on the platform?',
    answer: 'Innovators retain ownership of their contributions. When enterprises select a solution, terms are negotiated directly between parties with full transparency. The blockchain record ensures that original contributors are always credited and compensated according to agreed terms.',
  },
  {
    question: 'How does the reputation system work?',
    answer: 'Reputation is earned through validated contributions, peer reviews, and successful collaborations. Each action is weighted and recorded on the blockchain, creating a portable, verifiable reputation score. High reputation unlocks access to premium challenges and higher compensation tiers.',
  },
  {
    question: 'Can enterprises trust anonymous innovators?',
    answer: 'While innovators can choose to remain pseudonymous, their blockchain-verified reputation speaks for itself. Every past contribution, validation, and collaboration is transparently recorded. Enterprises can review this history before engaging, providing trust without requiring identity disclosure.',
  },
  {
    question: 'How are partnerships and licensing agreements handled?',
    answer: 'Once a solution is selected, our platform facilitates direct negotiation between parties using smart contract templates. These contracts can specify licensing terms, revenue sharing, attribution requirements, and more—all enforced transparently on the blockchain.',
  },
  {
    question: 'What types of challenges can be posted?',
    answer: 'Enterprises can post challenges ranging from technical R&D problems to business model innovation, sustainability initiatives, and process optimization. We support structured challenges with clear deliverables as well as open-ended exploration with community-driven milestones.',
  },
];

export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <div className="mb-16">
            {/* Green accent bar */}
            <div className="w-8 h-1 bg-primary mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 opacity-100">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Everything you need to know about intellectual property, reputation, 
              and blockchain verification.
            </p>
          </div>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/30 px-0"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6 opacity-100">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/60 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};