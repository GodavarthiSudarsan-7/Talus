import { type ReactNode } from "react";
import { Link } from "react-router-dom";

type RoleCardProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  cta: string;
  to: string;
};

export function RoleCard({ title, subtitle, icon, cta, to }: RoleCardProps) {
  return (
    <div className="glass-card p-8 md:p-10 group hover:border-primary/30 transition-all duration-500">
      <div className="icon-container mb-6">{icon}</div>

      <h3 className="text-2xl font-medium tracking-tight mb-3 opacity-100">
        {title}
      </h3>
      <p className="text-foreground/60 leading-relaxed mb-8">{subtitle}</p>

      <Link
        to={to}
        className="btn-neumorphic-secondary w-full text-center block text-foreground opacity-100"
      >
        {cta}
      </Link>
    </div>
  );
}

