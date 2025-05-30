import axios from 'axios';

const agentPrompts = {
  ideator: `You are a creative idea generator. Respond as such:`,
  coder: `You are a skilled developer. Write code when needed.`,
  reviewer: `You're a UX expert. Review the following concept:`,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, agent = "ideator" } = req.body;
  const fullPrompt = `${agentPrompts[agent]}\n${message}`;

  try {
    const response = await axios.post(
      "https://ollama-railway-c2nh.onrender.com/api/generate",
      {
        model: "gemma:2b",
        prompt: fullPrompt,
        stream: false,
      }
    );

    const reply = response.data.response || "🤖 No response.";
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error from Ollama:", error.message);
    res.status(500).json({ error: "Failed to contact Ollama" });
  }
}
