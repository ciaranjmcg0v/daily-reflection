import React, { useState } from "react";

export default function SlidingContainer({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleNavigate = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Match the transition duration
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className={`absolute transition-transform duration-500 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {React.cloneElement(children, { onNavigate: handleNavigate })}
      </div>
    </div>
  );
}
