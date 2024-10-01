import useReflectionStore from "@/module/reflection/store/reflectionStore";
import Image from "next/image";
import InitialSVG from '@/module/reflection/images/undraw_meditation_re_gll0.svg';

export default function InitialPage({ onNext }) {
  const { setName } = useReflectionStore();

  const handleNextStep = () => {
    onNext(); // Move to the next step
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-screen h-screen bg-blue-300 p-4 text-center select-none">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 transition-transform duration-500 transform hover:scale-105 cursor-pointer">
        Welcome to your daily reflection
      </h1>

      {/* SVG Image */}
      <Image src={InitialSVG} alt="Meditation Image" width={300} height={300} />

      {/* Input Field */}
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="What is your name?"
        className="text-center font-medium border border-gray-300 p-2 rounded-lg mb-4 w-64 md:w-80"
      />

      {/* Button */}
      <button onClick={handleNextStep} className="bg-slate-200 hover:bg-green-800 hover:text-white text-gray-800 font-bold px-4 py-2 rounded-lg transition duration-300">
        Get started <span className="ml-2">➡️</span>
      </button>
    </div>
  );
}
