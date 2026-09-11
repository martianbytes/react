import { useState } from "react";

const ParyoParyoParyo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const totalCircles = 3;

  const startRandomizer = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let counter = 0;
    // Total number of flashes before picking a winner (e.g., 20 cycles)
    const totalSteps = 20 + Math.floor(Math.random() * 10); 

    const interval = setInterval(() => {
      // Cycle sequentially: 0 -> 1 -> 2 -> 0...
      setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % totalCircles));
      counter++;

      // Stop once target steps are reached
      if (counter >= totalSteps) {
        clearInterval(interval);
        
        // Pick the final winner randomly
        const finalWinner = Math.floor(Math.random() * totalCircles);
        setActiveIndex(finalWinner);
        setIsSpinning(false);
      }
    }, 100); // Speed in milliseconds between changes
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen">
      <div className="flex justify-center items-center gap-16">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`size-20 rounded-full border-4 transition-all duration-150 ${
              activeIndex === index
                ? "bg-emerald-500 border-emerald-400 scale-110 shadow-lg shadow-emerald-500/50"
                : "border-gray-400 bg-transparent"
            }`}
          />
        ))}
      </div>

      <button
        onClick={startRandomizer}
        disabled={isSpinning}
        className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50"
      >
        {isSpinning ? "Spinning..." : "Game Khelam"}
      </button>
    </div>
  );
};

export default ParyoParyoParyo;