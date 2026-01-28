import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Flag, 
  PaperPlaneTilt, 
  Users, 
  Trophy, 
  ArrowRight,
  CheckCircle
} from '@phosphor-icons/react';

const steps = [
  {
    icon: Flag,
    title: 'Challenge Posted',
    description: 'Enterprises define real-world problems with clear success criteria, timelines, and reward structures.',
    details: [
      'Structured problem statements',
      'Defined deliverables and milestones',
      'Transparent reward tiers',
      'IP terms established upfront',
    ],
  },
  {
    icon: PaperPlaneTilt,
    title: 'Solutions Submitted',
    description: 'Innovators from around the world submit and iterate on solution prototypes.',
    details: [
      'Blockchain-timestamped submissions',
      'Version history tracked',
      'Collaborative refinement',
      'Cross-industry expertise',
    ],
  },
  {
    icon: Users,
    title: 'Community Validation',
    description: 'Expert mentors and community members evaluate, score, and provide feedback.',
    details: [
      'Peer review process',
      'Mentor feedback sessions',
      'Technical feasibility checks',
      'Market viability assessment',
    ],
  },
  {
    icon: Trophy,
    title: 'Winners Selected',
    description: 'Top solutions are selected, contributors are rewarded, and reputation is permanently recorded.',
    details: [
      'Transparent scoring',
      'Blockchain-verified attribution',
      'Reward distribution',
      'Reputation boost',
    ],
  },
];

const Challenges = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              How It Works
            </span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mt-4 mb-6 opacity-100">
              From Challenge to{' '}
              <span className="gradient-text">Verified Solution</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              A transparent, blockchain-backed process that surfaces the best ideas 
              while protecting every contributor.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="glass-card p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left: Icon and Title */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                        <step.icon size={28} weight="light" className="text-primary" />
                      </div>
                      <div className="text-4xl font-light text-foreground/10">
                        0{index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-medium tracking-tight opacity-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Right: Details */}
                  <div className="flex-1 md:border-l md:border-border/50 md:pl-8">
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} weight="light" className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow to next step */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6 text-border">
                    <ArrowRight size={24} weight="light" className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <a href="/#contact" className="btn-neumorphic inline-flex items-center gap-2 text-foreground opacity-100">
              Post a Challenge
              <ArrowRight size={18} weight="light" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Challenges;
