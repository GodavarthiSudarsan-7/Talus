import { UsersThree, Buildings } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RoleCard } from "@/components/auth/RoleCard";

export default function Signup() {
  return (
    <AuthLayout title="Create your account">
      <div className="grid md:grid-cols-2 gap-6">
        <RoleCard
          title="Contributor Sign Up"
          subtitle="Join challenges, build credibility, and earn on-chain reputation for your work."
          icon={<UsersThree size={28} weight="light" className="text-primary" />}
          cta="Create account"
          to="/signup/contributor"
        />
        <RoleCard
          title="Corporate Sign Up"
          subtitle="Create an enterprise workspace to post challenges and review verified solutions."
          icon={<Buildings size={28} weight="light" className="text-primary" />}
          cta="Create account"
          to="/signup/corporate"
        />
      </div>

      <div className="mt-10 text-center text-sm text-foreground/50">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary hover:text-primary/90 transition-colors opacity-100"
        >
          Log in
        </Link>
      </div>
    </AuthLayout>
  );
}

