# Daily Reflection App 🧘‍♂️

A mindful web application designed to help users reflect on their daily experiences, track emotional changes, and receive AI-powered insights.

## Features ✨

- **Personalized Experience** 👤
  - User name input for a customized journey
  - Emotion tracking before and after reflection

- **Interactive Emotion Selection** 😊
  - Searchable emoji picker
  - Wide range of emotions to choose from

- **Guided Breathing Exercise** 🫁
  - Animated breathing circle
  - Timed breathing patterns (4-4-8 technique)
  - Progress tracking

- **Reflection Journal** 📝
  - Free-form text input for daily reflections
  - AI-powered response and insights
  - Summary view comparing emotional states

## Tech Stack 🛠️

### Frontend
- **Next.js 14** (React Framework)
- **Tailwind CSS** (Styling)
- **Zustand** (State Management)
- **Lucide React** (Icons)

### Backend
- **Next.js Server Actions**
- **OpenAI API** (GPT-3.5 Turbo for reflection analysis)

### UI Components
- Custom Dialog components
- Responsive design
- SVG animations

## Getting Started 🚀

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

## Project Structure 📁

```
├── app/
│   ├── actions/
│   │   └── reflection-summary.js
│   └── page.tsx
├── module/
│   └── reflection/
│       ├── components/
│       ├── pages/
│       ├── store/
│       └── data/
```

## Contributing 🤝

Feel free to submit issues and enhancement requests!

## License 📄

[MIT License](LICENSE)

---

Made with ❤️ for mindfulness and well-being