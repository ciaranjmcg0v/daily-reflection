import useReflectionStore from "@/module/reflection/store/reflectionStore";
import useAiSummaryStore from "@/module/reflection/store/aiSummaryStore";
import { ArrowRight } from "lucide-react";

function SummaryPage() {
  const {
    emojiBefore,
    emojiBeforeType,
    emojiAfter,
    emojiAfterType,
    reflectionText,
    reset,
  } = useReflectionStore();
  const { aiSummary, isLoading, reset: resetAiSummary } = useAiSummaryStore();

  const handleFinish = () => {
    reset();
    resetAiSummary();
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-screen h-screen bg-slate-100 p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 underline">Let&apos;s Reflect</h2>

      <div className="flex items-center justify-between space-x-10">
        <div className="flex flex-col items-center mb-6 space-y-6">
          <span className="text-lg">Before Reflection</span>
          <div className="text-4xl">{emojiBefore}</div>
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
          <div className="text-4xl">{emojiAfter}</div>
          <span className="text-lg">{emojiAfterType}</span>
        </div>
      </div>

      <div className="w-full max-w-6xl">
        <div className={`grid grid-cols-1 ${aiSummary ? 'md:grid-cols-2' : ''} gap-6`}>
          {/* Your Reflection - will be centered if no AI summary */}
          <div className={aiSummary ? '' : 'md:col-span-2 md:max-w-2xl md:mx-auto'}>
            <h3 className="text-lg font-semibold mb-2">Your Reflection</h3>
            <div className="bg-white p-4 rounded-md shadow-md w-full">
              <p className="text-gray-700 max-h-[200px] overflow-y-auto">{reflectionText}</p>
            </div>
          </div>

          {/* AI Response */}
          {aiSummary && (
            <div>
              <h3 className="text-lg font-semibold mb-2">AI Response</h3>
              <div className="bg-white p-4 rounded-md shadow-md w-full">
                <div className="max-h-[200px] overflow-y-auto">
                  {isLoading ? (
                    <p className="text-gray-500">Generating response...</p>
                  ) : (
                    <p className="text-gray-700">{aiSummary}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleFinish}
        className="flex items-center justify-center w-full max-w-xs py-2 my-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition duration-300"
      >
        Finish
      </button>
    </div>
  );
}

export default SummaryPage;
