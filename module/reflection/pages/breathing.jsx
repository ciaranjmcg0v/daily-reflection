import { useEffect, useState } from "react";
import useReflectionStore from "../store/reflectionStore";
import { useBreathingStore } from "../stores/breathingStore";

const BreathingCircle = () => {
  const [scale, setScale] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [instruction, setInstruction] = useState("");
  const { completedExercises, isComplete, addCompletedExercise } =
    useBreathingStore();
  const { nextStep } = useReflectionStore();

  const handleNext = () => {
    nextStep();
  };

  useEffect(() => {
    let animationFrameId;

    if (isActive) {
      const breathCycle = () => {
        let startTime = null;
        const baseSize = 80;
        const maxSize = 350;
        const scaleFactor = maxSize / baseSize;

        const animateBreath = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;

          // Inhale phase (4 seconds)
          if (progress < 4000) {
            setInstruction("Breathe in");
            const inhaleProgress = progress / 4000;
            setScale(1 + inhaleProgress * (scaleFactor - 1));
            animationFrameId = requestAnimationFrame(animateBreath);
          }
          // Hold phase (4 seconds)
          else if (progress < 8000) {
            setInstruction("Hold for 4 seconds");
            setScale(scaleFactor);
            animationFrameId = requestAnimationFrame(animateBreath);
          }
          // Exhale phase (8 seconds)
          else if (progress < 16000) {
            setInstruction("Breathe out slowly");
            const exhaleProgress = (progress - 8000) / 8000;
            setScale(scaleFactor - exhaleProgress * (scaleFactor - 1));
            animationFrameId = requestAnimationFrame(animateBreath);
          }
          // Restart cycle
          else {
            setScale(1);
            setIsActive(false);
            setInstruction("");
            addCompletedExercise();
          }
        };

        animationFrameId = requestAnimationFrame(animateBreath);
      };

      breathCycle();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isActive, addCompletedExercise]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen relative">
      <h1 className="fixed top-12 text-4xl font-bold text-center">
        Let&apos;s take a moment to breathe before we continue
      </h1>
      <div className="text-xl text-center mb-8">
        {completedExercises < 2
          ? `Completed: ${completedExercises}/2`
          : "All exercises completed!"}
      </div>
      <div
        className="bg-blue-500 rounded-full transition-transform ease-linear flex items-center justify-center relative"
        style={{
          width: "80px",
          height: "80px",
          transform: `scale(${scale})`,
        }}
      >
        <span className="text-white text-center text-sm whitespace-nowrap absolute">
          {instruction}
        </span>
      </div>
      {!isComplete ? (
        <button
          onClick={() => setIsActive(true)}
          disabled={isActive}
          className="px-6 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50 fixed bottom-5"
        >
          {isActive ? "Breathing..." : "Start Breathing Exercise"}
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-green-500 text-white rounded-full fixed bottom-5"
        >
          Continue to Next Step
        </button>
      )}
    </div>
  );
};

export default BreathingCircle;
