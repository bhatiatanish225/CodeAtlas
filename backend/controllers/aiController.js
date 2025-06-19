const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const askAI = async (req, res) => {
  const { question, file_content } = req.body;

  if (!question || !file_content) {
    return res.status(400).json({ error: "question and file_content required" });
  }

  try {
    const systemPrompt = "You are a senior developer. Given a question and source code, answer clearly.";
    const userPrompt = `${question}\n\n${file_content.slice(0, 8000)}`; // limit input

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const answer = completion.choices[0].message.content;
    return res.json({ answer });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "AI request failed" });
  }
};

module.exports = { askAI };
