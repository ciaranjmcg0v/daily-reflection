import useReflectionStore from "@/module/reflection/store/reflectionStore";
import { ArrowRight } from "lucide-react";

function SummaryPage() {
  const {
    emojiBefore,
    emojiBeforeType,
    emojiAfter,
    emojiAfterType,
    reflectionText,
    reset, // Optional: to reset the store after finishing
  } = useReflectionStore();

  const handleFinish = () => {
    // Reset store or navigate to another page as needed
    reset();
    // Optionally, you can redirect or show a success message here
    alert("Reflection completed!");
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-screen h-screen bg-slate-100 p-4">
      <h2 className="text-2xl font-bold mb-6 underline">Let&apos;s Reflect</h2>

      <div className="flex items-center justify-between space-x-10">
        <div className="flex flex-col items-center mb-6 space-y-6">
          <span className="text-lg">Before Reflection</span>
          <div className="text-6xl">{emojiBefore}</div>
          <span className="text-lg">{emojiBeforeType}</span>
        </div>

        {/* Arrow or Line Separator */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl">
            <ArrowRight className="w-8 h-8 text-green-600" />
          </span>
        </div>

        <div className="flex flex-col items-center mb-6 space-y-6">
          <span className="text-lg">After Reflection</span>
          <div className="text-6xl">{emojiAfter}</div>
          <span className="text-lg">{emojiAfterType}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">To summarise..</h3>
        <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md mb-6">
          <p className="text-gray-700">{reflectionText}</p>
        </div>
        <div>
          <p className="text-sm text-center font-semibold">
            Generated text will appear here once it has been implemented.
          </p>
        </div>
      </div>

      <button
        onClick={handleFinish}
        className="flex items-center justify-center w-full max-w-xs py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition duration-300"
      >
        Finish
      </button>
    </div>
  );
}

export default SummaryPage;
