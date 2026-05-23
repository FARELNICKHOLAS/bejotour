const express = require('express');
const axios = require('axios');
const router = express.Router();

// Placeholder route for fetching tour packages
router.get('/tours', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: 'Ubud Cultural Escape', price: 650000 },
      { id: 2, title: 'Nusa Penida Explorer', price: 850000 }
    ]
  });
});

// Placeholder route for handling smart bookings
router.post('/book', (req, res) => {
  const { name, pax, plan } = req.body;
  res.json({ success: true, message: 'Booking request received', data: { name, pax } });
});

// Integration with LM Studio (Local LLM)
router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body; // Expecting an array of message objects: [{ role: 'user', content: 'hello' }]
    
    // LM Studio default inference endpoint
    const lmStudioUrl = 'http://127.0.0.1:1234/v1/chat/completions';
    
    const response = await axios.post(lmStudioUrl, {
      model: "google/gemma-4-e4b",
      messages: [
        { role: "system", content: "You are a helpful, enthusiastic, and knowledgeable customer service assistant for B'jo Bali Tour, a premium travel agency in Bali. Answer questions about Bali, tour packages, and travel tips clearly and concisely." },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    // Extract the AI's reply
    const reply = response.data.choices[0].message.content;
    
    res.json({ success: true, reply });
  } catch (error) {
    console.error("Error communicating with LM Studio:", error.message);
    res.status(500).json({ success: false, error: "Failed to connect to Local AI. Make sure LM Studio inference server is running on port 1234." });
  }
});

module.exports = router;
