import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { supabase } from "@/lib/supabaseClient";

export default function SignupCorporate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    companyName: "",
    displayName: "",
    email: "",
    password: "",
    countryOfOrigin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (signUpError || !authData.user) {
        throw signUpError ?? new Error("Unable to create account.");
      }

      const userId = authData.user.id;

      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: userId,
          role: "corporate",
          display_name: form.displayName,
          country: form.countryOfOrigin,
        });

      if (profileError) {
        throw profileError;
      }

      const { error: corporateError } = await supabase
        .from("corporate_profiles")
        .insert({
          user_id: userId,
          company_name: form.companyName,
          country_of_origin: form.countryOfOrigin,
          company_badge_icon: null,
        });

      if (corporateError) {
        throw corporateError;
      }

      navigate("/login/corporate");
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong while creating your account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Corporate Sign Up"
      subtitle="Create an enterprise workspace to post challenges and review verified submissions."
    >
      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                autoComplete="organization"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your organization"
                value={form.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Display name
              </label>
              <input
                type="text"
                name="displayName"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Public handle (unique)"
                value={form.displayName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Work email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="name@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Country of origin
              </label>
              <input
                type="text"
                name="countryOfOrigin"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Where your company is based"
                value={form.countryOfOrigin}
                onChange={handleChange}
                required
              />
            </div>

            {error ? (
              <p className="text-sm text-destructive-foreground bg-destructive/10 border border-destructive/40 rounded-lg px-3 py-2">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="btn-neumorphic w-full text-foreground opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating account..." : "Create Corporate Account"}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-foreground/50">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-primary/90 transition-colors opacity-100"
          >
            Log in
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}

