import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContributorDashboard() {
  const [challenges, setChallenges] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("challenges")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setChallenges(data || []));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Open Challenges</h1>
      {challenges.map((c) => (
        <div key={c.id} className="glass-card p-6 mb-4">
          <h2 className="text-xl">{c.title}</h2>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  )
}
