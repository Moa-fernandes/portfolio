import React, { useState } from "react";
import "./AgentModal.css";

export default function AgentModal({ onClose }) {
  const [input, setInput] = useState("");
  const [activeAgent, setActiveAgent] = useState("ideator");
  const [response, setResponse] = useState("");

  const agents = {
    ideator: "💡 Ideator: Let's brainstorm something creative!",
    coder: "💻 Coder: Here's how you might implement it in code...",
    reviewer: "🧐 Reviewer: From a UX perspective, this could be improved by..."
  };

 const handleSend = () => {
  if (!input) return;

  let agentReply = "";

  if (activeAgent === "ideator") {
    agentReply = `Let's explore some creative ideas related to "${input}". What if we made it interactive or animated?`;
  } else if (activeAgent === "coder") {
    agentReply = `Here's a basic implementation idea for "${input}":\n\nfunction example() {\n  console.log("Hello from ${input}");\n}`;
  } else if (activeAgent === "reviewer") {
    agentReply = `From a UX perspective, "${input}" could be improved with more clarity and accessibility. Try simplifying language or adding spacing.`;
  }

  setResponse(agentReply);
};



  return (
    <div className="agent-modal-backdrop" onClick={onClose}>
      <div className="agent-modal" onClick={e => e.stopPropagation()}>
        <button className="agent-close" onClick={onClose}>×</button>
        <h2>🧠 Talk to Agent</h2>

        <div className="agent-selector">
          <button onClick={() => setActiveAgent("ideator")}>🎨 Ideator</button>
          <button onClick={() => setActiveAgent("coder")}>💻 Coder</button>
          <button onClick={() => setActiveAgent("reviewer")}>🔍 Reviewer</button>
        </div>

        <textarea
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="agent-send" onClick={handleSend}>Send</button>

        {response && <div className="agent-response"><pre>{response}</pre></div>}
      </div>
    </div>
  );
}
