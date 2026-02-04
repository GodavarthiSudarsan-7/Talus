import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function AuthLayout({
  children,
  title,
  subtitle,
}: PropsWithChildren<{ title: string; subtitle?: string }>) {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background gradient orbs (matches homepage Hero) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/6 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Minimal header */}
        <div className="pt-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 opacity-100">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-lg font-semibold text-primary-foreground">N</span>
            </div>
            <span className="text-xl font-medium tracking-tight">Talus</span>
          </Link>

          <Link
            to="/"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200 opacity-100"
          >
            Back to home
          </Link>
        </div>

        <main className="pt-20 pb-20 flex items-center justify-center">
          <motion.div
            {...pageTransition}
            className="w-full max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 opacity-100">
                {title}
              </h1>
              {subtitle ? (
                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              ) : null}
            </div>

            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

