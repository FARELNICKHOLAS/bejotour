# B'jo Bali Tour 🌴

A premium, neo-tropical web application for B'jo Bali Transport & Tour. This project combines stunning modern aesthetics with cutting-edge AI features to provide the ultimate Bali travel booking experience.

## ✨ Key Features

- **Premium UI/UX Design**: Built with Bootstrap 5, featuring a bespoke "neo-tropical" design language, glassmorphism elements, smooth scroll-reveal animations, and responsive bento-box layouts.
- **AI-Powered Itinerary Planner**: A dedicated planner that instantly generates a customized day-by-day Bali itinerary based on trip duration and travel vibe (Relaxing, Adventure, Culture, Romance).
- **Smart Voice-to-Text Booking**: Allows users to tap a microphone and speak their travel needs. The system uses SpeechRecognition API to transcribe the request before sending it to a WhatsApp agent.
- **Multi-Language Support (i18n)**: Fully integrated localization engine (`i18n.js`) allowing users to switch the interface instantly between English (EN), Indonesian (ID), and Chinese (ZH) with state persistence.
- **Interactive Modals**: Detailed pop-ups for exploring the VIP vehicle fleet (Avanza & HiAce) and curated local gems, complete with high-quality AI-generated imagery.
- **Direct WhatsApp Integration**: All booking requests and AI-generated itineraries format seamlessly into pre-filled WhatsApp messages to close sales instantly.

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5.3, Vanilla JavaScript.
- **Assets**: Google Fonts (Outfit), Bootstrap Icons.
- **Backend (WIP)**: Node.js / Express for connecting to local AI models (Gemma) via Ollama.

## 🛠️ Setup & Running Locally

1. Clone the repository
2. For the frontend, simply open `frontend/index.html` in any modern web browser.
3. For backend development (optional), navigate to `backend/` and run:
   ```bash
   npm install
   node server.js
   ```

## 📝 License
© 2024 B'jo Bali Transport & Tour. All rights reserved.
