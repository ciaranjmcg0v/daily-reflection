import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogOverlay,
  DialogClose,
} from "@/components/ui/dialog";
import { emojiList } from "@/module/reflection/data/emojiList";
import useReflectionStore from "@/module/reflection/store/reflectionStore";
import { ArrowRight } from "lucide-react";

function EmotionPageOne() {
  const { name, emojiBefore, setEmojiBefore, setEmojiBeforeType, nextStep, emojiBeforeType } =
    useReflectionStore();

  const [searchQuery, setSearchQuery] = useState(""); // For searching/filtering emojis
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog open state

  // Handle emoji selection
  const handleEmojiSelect = (emoji) => {
    setEmojiBefore(emoji.emoji);
    setEmojiBeforeType(emoji.text);
    setIsDialogOpen(false); // Close the dialog after selecting the emoji
  };

  const handleNext = () => {
    nextStep();
  };

  const filteredEmojis = emojiList.filter((emoji) =>
    emoji.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-12">
        {`Hello ${name}, how are you feeling right now?`}
      </h1>

      {/* Display selected emoji and emotion */}
      <div className="flex flex-col items-center mb-6">
        <div className="text-4xl mb-2">{emojiBefore}</div>
        <div className="text-lg text-gray-600">{emojiBeforeType || 'No emotion selected'}</div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="mt-2 text-blue-600 hover:underline"
        >
          {emojiBeforeType ? 'Change Emotion' : 'Choose Emotion'}
        </button>
      </div>

      {/* Submit Button */}
      <div className="w-48 mt-6">
        <button
          onClick={handleNext}
          className="flex items-center justify-between w-full py-2 px-4 bg-blue-600 text-white hover:bg-blue-900 transition duration-300 rounded-full"
        >
          Start reflection <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Show Emojis Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/30" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-11/12 max-w-2xl">
          <DialogTitle className="text-xl font-bold mb-4">
            {emojiBeforeType ? 'Change Emotion' : 'Choose Emotion'}
          </DialogTitle>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for an emoji"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Emoji Grid */}
          <div className="grid grid-cols-5 gap-4 overflow-y-auto max-h-80">
            {filteredEmojis.map((emoji) => (
              <div key={emoji.id} className="flex flex-col items-center">
                <span
                  onClick={() => handleEmojiSelect(emoji)}
                  className="text-3xl cursor-pointer p-2 rounded-lg hover:bg-gray-200 transition"
                >
                  {emoji.emoji}
                </span>
                <span className="text-[10px] font-bold">{emoji.text}</span>
              </div>
            ))}
          </div>

          {/* Close Button */}
          <DialogClose className="mt-4 p-2 text-blue-600 hover:underline">
            Close
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EmotionPageOne;
