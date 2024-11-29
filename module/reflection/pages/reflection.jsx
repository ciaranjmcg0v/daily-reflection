import useReflectionStore from "@/module/reflection/store/reflectionStore";
import useAiSummaryStore from "@/module/reflection/store/aiSummaryStore";
import { ArrowRight } from "lucide-react";
import { generateReflectionSummary } from "@/app/actions/reflection-summary";

function Reflection() {
  const { setReflectionText, nextStep, reflectionText } = useReflectionStore();
  const { setAiSummary, setLoading, setError } = useAiSummaryStore();

  const handleNext = async () => {
    try {
      setLoading(true);
      const { summary } = await generateReflectionSummary(reflectionText);
      setAiSummary(summary);
      nextStep();
    } catch (error) {
      setError(error.message);
      console.error('Failed to generate summary:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-slate-100">
      <div className="flex flex-col items-center w-1/2 p-8">
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
            className="w-full flex-1 p-2 font-light outline-none border border-gray-300 bg-white text-black rounded-md"
            rows={12}
            placeholder="Today I.."
            onChange={(e) => setReflectionText(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="w-48 mt-6">
          <button
            onClick={handleNext}
            className="flex items-center justify-between w-full py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-900 transition duration-300"
          >
            Continue <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Reflection;
