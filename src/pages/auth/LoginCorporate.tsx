import { Link } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";

export default function LoginCorporate() {
  return (
    <AuthLayout
      title="Corporate Login"
      subtitle="Sign in to post enterprise challenges, review solutions, and manage evaluation workflows."
    >
      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Work email
              </label>
              <input
                type="email"
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="btn-neumorphic w-full text-foreground opacity-100"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-foreground/50">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:text-primary/90 transition-colors opacity-100"
          >
            Sign up
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}

