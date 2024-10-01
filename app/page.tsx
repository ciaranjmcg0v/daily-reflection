"use client";

import SlidingContainer from "@/module/reflection/components/SlidingContainer";
import Reflection from "@/module/reflection/pages/reflection";
import InitialPage from "@/module/reflection/pages/initial";
import EmotionPageOne from "@/module/reflection/pages/emotionOne"; // Adjust the import path
import EmotionPageTwo from "@/module/reflection/pages/emotionTwo"; // Adjust the import path
import SummaryPage from "@/module/reflection/pages/summary"; // Adjust the import path
import useReflectionStore from "@/module/reflection/store/reflectionStore";

export default function Home() {
  const { currentStep, nextStep } = useReflectionStore();
  const loggedIn = false; // Change this based on your authentication logic

  const steps = loggedIn
    ? [EmotionPageOne, Reflection, EmotionPageTwo, SummaryPage]
    : [InitialPage, EmotionPageOne, Reflection, EmotionPageTwo, SummaryPage];

  const CurrentComponent = steps[currentStep];

  return (
    <SlidingContainer>
      <CurrentComponent onNext={nextStep} />
    </SlidingContainer>
  );
}
