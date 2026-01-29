import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { supabase } from "@/lib/supabaseClient";

export default function SignupContributor() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    countryOfResidence: "",
    birthdate: "",
    bio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
          role: "contributor",
          display_name: form.displayName,
          country: form.countryOfResidence,
        });

      if (profileError) {
        throw profileError;
      }

      const { error: contributorError } = await supabase
        .from("contributor_profiles")
        .insert({
          user_id: userId,
          first_name: form.firstName,
          last_name: form.lastName,
          birthdate: form.birthdate,
          bio: form.bio,
          country_of_residence: form.countryOfResidence,
        });

      if (contributorError) {
        throw contributorError;
      }

      navigate("/login/contributor");
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong while creating your account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Contributor Sign Up"
      subtitle="Create an account to join challenges, submit prototypes, and build a verified track record."
    >
      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
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

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="you@example.com"
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
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  Country of residence
                </label>
                <input
                  type="text"
                  name="countryOfResidence"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Where you live"
                  value={form.countryOfResidence}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  Birthdate
                </label>
                <input
                  type="date"
                  name="birthdate"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={form.birthdate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2">
                Short bio
              </label>
              <textarea
                name="bio"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell enterprises what you like to work on..."
                value={form.bio}
                onChange={handleChange}
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
              {isSubmitting ? "Creating account..." : "Create Contributor Account"}
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

