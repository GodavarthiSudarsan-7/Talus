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
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (signUpError || !data.user) {
        throw signUpError ?? new Error("Unable to create account");
      }

      const userId = data.user.id;

      const { error: profileError } = await supabase.rpc("create_profile", {
        p_user_id: userId,
        p_role: "corporate",
        p_display_name: form.displayName,
        p_country: form.countryOfOrigin,
      });

      if (profileError) throw profileError;

      const { error: corporateError } = await supabase
        .from("corporate_profiles")
        .insert({
          user_id: userId,
          company_name: form.companyName,
          country_of_origin: form.countryOfOrigin,
          company_badge_icon: null,
        });

      if (corporateError) throw corporateError;

      navigate("/login/corporate");
    } catch (err: any) {
      if (
        err?.code === "23505" ||
        err?.message?.includes("profiles_display_name_key")
      ) {
        setError("Display name already taken. Please choose another.");
      } else {
        setError(err?.message ?? "Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Corporate Sign Up"
      subtitle="Create an enterprise workspace to post challenges."
    >
      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              value={form.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="text"
              name="displayName"
              placeholder="Display name"
              value={form.displayName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="email"
              name="email"
              placeholder="Work email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="text"
              name="countryOfOrigin"
              placeholder="Country of origin"
              value={form.countryOfOrigin}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-neumorphic w-full"
            >
              {isSubmitting ? "Creating account..." : "Create Corporate Account"}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Log in
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
