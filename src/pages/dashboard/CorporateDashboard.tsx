import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Challenge = {
  id: string;
  title: string;
  created_at: string;
};

export default function CorporateDashboard() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) return;

      supabase
        .from("challenges")
        .select("id,title,created_at")
        .eq("corporate_id", data.user.id)
        .then(({ data }) => setChallenges(data || []));
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
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-medium">Your Challenges</h1>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/challenges/new")}
                className="btn-neumorphic"
              >
                Create Challenge
              </button>

              <button
                onClick={handleLogout}
                className="btn-neumorphic-secondary"
              >
                Logout
              </button>
            </div>
          </div>

          {challenges.length === 0 && (
            <div className="glass-card p-8 text-center text-foreground/60">
              You haven’t posted any challenges yet
            </div>
          )}

          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="glass-card p-6">
                <h2 className="text-xl font-medium">
                  {challenge.title}
                </h2>
                <p className="text-sm text-foreground/60">
                  Created on {new Date(challenge.created_at).toDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
