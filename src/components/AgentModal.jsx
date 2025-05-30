import React, { useState, useRef, useEffect } from "react";
import "./AgentModal.css";

export default function AgentModal({ onClose }) {
  const [input, setInput] = useState("");
  const [activeAgent, setActiveAgent] = useState("ideator");
  const [conversation, setConversation] = useState(() => {
    const saved = localStorage.getItem("agent_chat");
    return saved ? JSON.parse(saved) : [];
  });
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const responseEndRef = useRef(null);
  const [historyVisible, setHistoryVisible] = useState(false);

  useEffect(() => {
    responseEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const agentMsg = { sender: "agent", text: "" };

    setConversation((prev) => {
      const updated = [...prev, userMsg, agentMsg];
      localStorage.setItem("agent_chat", JSON.stringify(updated));
      return updated;
    });

    setIsTyping(true);
    setInput("");

    try {
      const res = await fetch("http://localhost:3001/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const reply = data.reply || "⚠️ No response";

      let i = 0;
      setDisplayedResponse("");
      const interval = setInterval(() => {
        if (i < reply.length) {
          setDisplayedResponse((prev) => prev + reply[i]);
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setConversation((prev) => {
            const updated = [...prev.slice(0, -1), { sender: "agent", text: reply }];
            localStorage.setItem("agent_chat", JSON.stringify(updated));
            return updated;
          });
        }
      }, 20);
    } catch {
      setDisplayedResponse("⚠️ Failed to contact the agent.");
      setIsTyping(false);
    }
  };

  return (
    <div className="agent-modal-backdrop" onClick={onClose}>
      <div className="agent-modal" onClick={(e) => e.stopPropagation()}>
        <button className="agent-close" onClick={onClose}>×</button>
        <h2>🧠 Talk to Agent</h2>
        <button onClick={() => setHistoryVisible(!historyVisible)} className="history-toggle">
          {historyVisible ? "Close asks?" : "See asks?"}
        </button>

        <div className="agent-selector">
          {["ideator", "coder", "reviewer"].map((role) => (
            <button
              key={role}
              className={`selector-btn ${activeAgent === role ? "active" : ""}`}
              onClick={() => setActiveAgent(role)}
            >
              {role === "ideator" && "🎨 Ideator"}
              {role === "coder" && "💻 Coder"}
              {role === "reviewer" && "🔍 Reviewer"}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="agent-send" onClick={handleSend} disabled={isTyping}>
          {isTyping ? "Typing..." : "Send"}
        </button>

        <div className="agent-response custom-scroll">
          {conversation.map((msg, i) => (
            <div key={i} className={`bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="bubble agent">
              {displayedResponse}<span className="blink">|</span>
            </div>
          )}
          <div ref={responseEndRef} />
        </div>

        {historyVisible && (
          <div className="history-panel custom-scroll">
            <h4>Latest's</h4>
            <ul>
              {conversation.filter(msg => msg.sender === "user").map((msg, i) => (
                <li key={i}>• {msg.text}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
