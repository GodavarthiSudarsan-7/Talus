import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CorporateDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postChallenge = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;

    await supabase.from("challenges").insert({
      corporate_id: data.user.id,
      title,
      description,
    });

    alert("Challenge posted!");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Create Challenge</h1>

      <input
        className="w-full p-3 mb-4 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-3 mb-4 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="btn-neumorphic" onClick={postChallenge}>
        Post Challenge
      </button>
    </div>
  );
}
