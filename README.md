<div align="center">
  <img src="./frontend/img/logo_modern.png" alt="B'jo Bali Tour Logo" width="150" height="150" />
  <h1>🌴 Bejo Bali Trip 🌴</h1>
  <p><strong>A premium, neo-tropical web application for B'jo Bali Transport & Tour.</strong></p>
  <p><em>Where stunning modern aesthetics meet cutting-edge Local AI to provide the ultimate Bali travel booking experience.</em></p>
</div>

<hr />

## ✨ Key Features

- 🎨 **Premium UI/UX Design**: Built with Bootstrap 5, featuring a bespoke "neo-tropical" design language, premium glassmorphism elements (`glass-card`), smooth scroll-reveal animations, and responsive Bento Box layouts.
- 🤖 **AI Tour Matchmaker**: A fully local AI-powered assistant (via LM Studio) that acts as a highly persuasive travel advisor. It intelligently matches users to the perfect 1-day tour package based on their vibe, companions, and activity level.
- 🎤 **Smart Voice-to-Text Booking**: Tap the microphone to speak your travel needs! The system uses the SpeechRecognition API to transcribe your voice instantly.
- 🌍 **Multi-Language Support (i18n)**: Instantly switch the entire interface between English (EN), Indonesian (ID), and Chinese (ZH).
- 📲 **Seamless WhatsApp Integration**: Automatically formats booking requests and AI-recommended itineraries into pre-filled WhatsApp messages for instant closing.

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5.3, Vanilla JavaScript.
- **Assets**: Google Fonts (Outfit), Bootstrap Icons, Unsplash API.
- **Backend Services**: Node.js & Supabase integration for backend database seeding.
- **Local AI**: LM Studio integration for offline, privacy-first AI matching inferences.

## 🛠️ Setup & Running Locally

### 1. Frontend Web App
No build tools required! Just open the application in your browser:
```bash
git clone https://github.com/yourusername/bejotour.git
cd bejotour/frontend
# Open index.html in your browser
```

### 2. Local AI Matchmaker (LM Studio)
To power the AI Tour Matchmaker locally without API costs:
1. Download and install [LM Studio](https://lmstudio.ai/).
2. Download a fast instruct model (e.g., Llama-3-8B-Instruct or Mistral).
3. Start the **Local Server** in LM Studio on port `1234`.
4. Make sure **CORS** is enabled in the LM Studio server settings.

### 3. Backend Database (Optional)
Navigate to the `backend/` directory to manage database seeders:
```bash
cd backend
npm install
node seedSupabase.js # Seeds the Tour Packages to Supabase
```

## 📝 License
&copy; 2024-2026 B'jo Bali Transport & Tour. All rights reserved. Premium Experience.
