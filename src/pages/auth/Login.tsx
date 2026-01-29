import { UsersThree, Buildings } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RoleCard } from "@/components/auth/RoleCard";

export default function Login() {
  return (
    <AuthLayout title="Continue as">
      <div className="grid md:grid-cols-2 gap-6">
        <RoleCard
          title="Contributor Login"
          subtitle="Access challenges, submit solutions, and grow your verified reputation."
          icon={<UsersThree size={28} weight="light" className="text-primary" />}
          cta="Continue"
          to="/login/contributor"
        />
        <RoleCard
          title="Corporate Login"
          subtitle="Post challenges, review submissions, and evaluate solutions at scale."
          icon={<Buildings size={28} weight="light" className="text-primary" />}
          cta="Continue"
          to="/login/corporate"
        />
      </div>

      <div className="mt-10 text-center text-sm text-foreground/50">
        If you haven’t logged in yet,{" "}
        <Link
          to="/signup"
          className="text-primary hover:text-primary/90 transition-colors opacity-100"
        >
          sign up
        </Link>
      </div>
    </AuthLayout>
  );
}

