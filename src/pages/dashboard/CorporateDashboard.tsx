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
        <div className="container mx-auto px-6 space-y-12">

          <div className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-medium mb-3">
                Corporate Innovation Hub
              </h1>
              <p className="text-foreground/60 max-w-xl">
                Post real-world challenges, review crowd-sourced solutions,
                and collaborate with global innovators.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/challenges/new")}
                className="btn-neumorphic"
              >
                Post New Challenge
              </button>

              <button
                onClick={handleLogout}
                className="btn-neumorphic-secondary"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <h3 className="text-3xl font-medium">{challenges.length}</h3>
              <p className="text-sm text-foreground/60 mt-1">
                Challenges Posted
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <h3 className="text-3xl font-medium">Open</h3>
              <p className="text-sm text-foreground/60 mt-1">
                Crowd Submissions Active
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <h3 className="text-3xl font-medium">Verified</h3>
              <p className="text-sm text-foreground/60 mt-1">
                Transparent Attribution
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-6">
              Your Posted Challenges
            </h2>

            {challenges.length === 0 && (
              <div className="glass-card p-10 text-center text-foreground/60">
                You haven’t posted any challenges yet.
                <div className="mt-4">
                  <button
                    onClick={() => navigate("/challenges/new")}
                    className="btn-neumorphic"
                  >
                    Create Your First Challenge
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="glass-card p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-medium">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      Posted on {new Date(challenge.created_at).toDateString()}
                    </p>
                  </div>

                  <button className="btn-neumorphic-secondary">
                    View Submissions
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
