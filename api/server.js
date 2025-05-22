const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/agent", async (req, res) => {
  const { message } = req.body;

  try {
   const response = await axios.post(
  "http://127.0.0.1:11434/api/generate", // ← corrigido aqui
  {
    model: "gemma:2b",
    prompt: message,
    stream: false,
  }
);


    const reply = response.data.response || "🤖 No response.";
    res.json({ reply });
  } catch (error) {
    console.error("Error from Ollama:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to contact Ollama" });
  }
});

app.listen(3001, () => {
  console.log("🔥 Agent server running at http://localhost:3001");
});
