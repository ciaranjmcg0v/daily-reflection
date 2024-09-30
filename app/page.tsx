export default function Home() {
  const emojiList = [
    {
      id: 1,
      emoji: "😊",
      text: "Happy",
    },
    {
      id: 2,
      emoji: "😁",
      text: "Very Happy",
    },
    {
      id: 3,
      emoji: "😶",
      text: "Neutral",
    },
    {
      id: 4,
      emoji: "☹️",
      text: "Sad",
    },
    {
      id: 5,
      emoji: "😭",
      text: "Very Sad",
    },
    {
      id: 6,
      emoji: "😡",
      text: "Angry",
    },
    {
      id: 7,
      emoji: "😠",
      text: "Very Angry",
    },
    {
      id: 8,
      emoji: "😨",
      text: "Scared",
    },
    {
      id: 9,
      emoji: "😱",
      text: "Very Scared",
    },
    {
      id: 10,
      emoji: "😌",
      text: "Relaxed",
    },
    {
      id: 11,
      emoji: "🤔",
      text: "Thoughtful",
    },
    {
      id: 12,
      emoji: "🤗",
      text: "Excited",
    },
    {
      id: 13,
      emoji: "🤯",
      text: "Overwhelmed",
    },
    {
      id: 14,
      emoji: "🥳",
      text: "Celebratory",
    },
    {
      id: 15,
      emoji: "🤒",
      text: "Sick",
    },
    {
      id: 16,
      emoji: "😴",
      text: "Tired",
    },
  ];

  return (
    <main className="w-full flex flex-col items-center justify-center mx-auto p-4">
      <div className="w-full flex flex-col items-center">
        {/* Title and Subtitle */}
        <div className="h-36 flex flex-col items-center justify-center space-y-6">
          <h2 className="text-4xl font-extrabold">What&apos;s on your mind?</h2>
          <h4 className="text-xl font-light">
            Use this space to reflect on your day
          </h4>
        </div>
        {/* Text area */}
        <div className="w-full">
          <textarea
            className="w-full flex-1 p-2 font-light outline-none border-none bg-slate-50 rounded-md"
            rows={5}
            placeholder="Today I.."
          />
        </div>
        {/* Emoji's */}
        <div
          className="grid grid-cols-8 gap-8 py-4 px-4 mx-auto"
          style={{ gridTemplateRows: "repeat(2, auto)" }}
        >
          {emojiList.slice(0, 16).map((emoji) => (
            <div key={emoji.id} className="flex flex-col items-center">
              <span
                title={emoji.text}
                className="text-4xl hover:scale-125 transition-all delay-75 cursor-pointer"
              >
                {emoji.emoji}
              </span>
              <span className="text-[10px] font-bold">{emoji.text}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
