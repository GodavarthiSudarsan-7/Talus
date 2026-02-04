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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        p_role: "contributor",
        p_display_name: form.displayName,
        p_country: form.countryOfResidence,
      });

      if (profileError) throw profileError;

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

      if (contributorError) throw contributorError;

      navigate("/login/contributor");
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
      title="Contributor Sign Up"
      subtitle="Create an account to join challenges and submit solutions."
    >
      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <input
              type="text"
              name="displayName"
              placeholder="Display name"
              value={form.displayName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
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
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="countryOfResidence"
                placeholder="Country"
                value={form.countryOfResidence}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="date"
                name="birthdate"
                value={form.birthdate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <textarea
              name="bio"
              rows={4}
              placeholder="Short bio"
              value={form.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-neumorphic w-full"
            >
              {isSubmitting ? "Creating account..." : "Create Contributor Account"}
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
