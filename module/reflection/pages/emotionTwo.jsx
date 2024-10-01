import { emojiList } from "@/module/reflection/data/emojiList";
import useReflectionStore from "@/module/reflection/store/reflectionStore";
import { ArrowRight } from "lucide-react";

function EmotionPageOne() {
  const { emojiAfter, setEmojiAfter, setEmojiAfterType, nextStep } =
    useReflectionStore();

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-12">
        After some reflection, how do you feel now?
      </h1>

      <div
        className="grid grid-cols-8 gap-8 py-4 px-4 mx-auto"
        style={{ gridTemplateRows: "repeat(2, auto)" }}
      >
        {emojiList.slice(0, 16).map((emoji) => (
          <div key={emoji.id} className="flex flex-col items-center">
            <span
              title={emoji.text}
              className={`text-4xl transition-all delay-75 cursor-pointer p-2 rounded-lg ${
                emojiAfter === emoji.emoji
                  ? "bg-blue-400 scale-105 rounded-full"
                  : ""
              }`} // Conditional styles for selected emoji
              onClick={() => {
                setEmojiAfter(emoji.emoji);
                setEmojiAfterType(emoji.text);
              }} // Set emoji on click
            >
              {emoji.emoji}
            </span>
            <span className="text-[10px] font-bold">{emoji.text}</span>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="w-48 mt-6">
        <button
          onClick={handleNext}
          className="flex items-center justify-between w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-900 transition duration-300"
        >
          Go to summary <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

export default EmotionPageOne;
