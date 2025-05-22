import React, { useState } from "react";
import "./AgentModal.css";

export default function AgentModal({ onClose }) {
  const [input, setInput] = useState("");
  const [activeAgent, setActiveAgent] = useState("ideator");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input) return;

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse("⚠️ Failed to contact the agent.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="agent-modal-backdrop" onClick={onClose}>
      <div className="agent-modal" onClick={(e) => e.stopPropagation()}>
        <button className="agent-close" onClick={onClose}>×</button>
        <h2>🧠 Talk to Agent <br></br> (For a better experience, hit in english!)</h2>

       <div className="agent-selector">
  <button
    className={activeAgent === "ideator" ? "active-agent" : ""}
    onClick={() => setActiveAgent("ideator")}
  >
    🎨 Ideator
  </button>

  <button
    className={activeAgent === "coder" ? "active-agent" : ""}
    onClick={() => setActiveAgent("coder")}
  >
    💻 Coder
  </button>

  <button
    className={activeAgent === "reviewer" ? "active-agent" : ""}
    onClick={() => setActiveAgent("reviewer")}
  >
    🔍 Reviewer
  </button>
</div>


        <textarea
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="agent-send" onClick={handleSend} disabled={loading}>
          {loading ? "Thinking..." : "Send"}
        </button>

        {response && <div className="agent-response"><pre>{response}</pre></div>}
      </div>
    </div>
  );
}
