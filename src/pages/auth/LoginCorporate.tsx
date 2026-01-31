import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { supabase } from "@/lib/supabaseClient";

export default function LoginCorporate() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      setError("Invalid email or password");
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profile?.role !== "corporate") {
      setError("This is not a corporate account");
      return;
    }

    navigate("/dashboard/corporate");
  };

  return (
    <AuthLayout
      title="Corporate Login"
      subtitle="Sign in to post challenges and review solutions."
    >
      <div className="max-w-xl mx-auto">
        <div className="glass-card p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Work email"
              className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500">{error}</p>}

            <button className="btn-neumorphic w-full">Sign In</button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary">
            Sign up
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
