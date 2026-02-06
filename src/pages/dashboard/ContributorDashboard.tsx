import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Challenge = {
  id: string;
  title: string;
  industry: string;
  rewards: string;
  description: string;
};

export default function ContributorDashboard() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase
      .from("challenges")
      .select("id,title,industry,rewards,description")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setChallenges(data || []);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-medium">Open Challenges</h1>
              <p className="text-foreground/60 mt-1">
                Solve real-world problems posted by organizations
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="btn-neumorphic-secondary"
            >
              Logout
            </button>
          </div>

          {loading && (
            <div className="glass-card p-8 text-center text-foreground/60">
              Loading challenges...
            </div>
          )}

          {!loading && challenges.length === 0 && (
            <div className="glass-card p-8 text-center text-foreground/60">
              No challenges available yet
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-medium mb-2">
                    {challenge.title}
                  </h2>
                  <p className="text-sm text-foreground/60 mb-1">
                    Industry: {challenge.industry || "General"}
                  </p>
                  <p className="text-sm text-foreground/60 mb-3">
                    Rewards: {challenge.rewards || "Not specified"}
                  </p>
                  <p className="text-sm text-foreground/70 line-clamp-3">
                    {challenge.description}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/challenges/${challenge.id}`)}
                  className="btn-neumorphic-secondary w-full mt-6"
                >
                  View & Submit Solution
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
