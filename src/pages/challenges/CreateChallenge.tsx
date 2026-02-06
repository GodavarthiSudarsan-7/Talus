import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CreateChallenge() {
  const navigate = useNavigate();
  const [corporateId, setCorporateId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    industry: "",
    successCriteria: "",
    timeline: "",
    rewards: "",
  });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        navigate("/login");
        return;
      }
      setCorporateId(data.user.id);
    });
  }, [navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!corporateId) return;

    setLoading(true);
    setError(null);

    const { error } = await supabase.from("challenges").insert({
      corporate_id: corporateId,
      title: form.title,
      description: form.description,
      industry: form.industry,
      success_criteria: form.successCriteria,
      timeline: form.timeline,
      rewards: form.rewards,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    navigate("/dashboard/corporate");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-2xl space-y-8">
          <div>
            <h1 className="text-3xl font-medium">Post a New Challenge</h1>
            <p className="text-foreground/60 mt-1">
              Describe a real-world problem and invite global solutions
            </p>
          </div>

          <div className="glass-card p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                name="title"
                placeholder="Challenge title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground"
              />

              <textarea
                name="description"
                placeholder="Problem description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground resize-none"
              />

              <input
                name="industry"
                placeholder="Industry"
                value={form.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground"
              />

              <textarea
                name="successCriteria"
                placeholder="Success criteria"
                value={form.successCriteria}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground resize-none"
              />

              <input
                name="timeline"
                placeholder="Timeline"
                value={form.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground"
              />

              <input
                name="rewards"
                placeholder="Rewards"
                value={form.rewards}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="btn-neumorphic w-full"
              >
                {loading ? "Posting..." : "Post Challenge"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
