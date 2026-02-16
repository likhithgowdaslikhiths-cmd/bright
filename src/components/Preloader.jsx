import { useEffect, useState } from "react";

export default function Preloader({ isVisible }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let value = 0;
    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }
      setProgress(value);
    }, 120);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-black transition-opacity duration-700
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="text-white text-center font-mono space-y-6">

        {/* LOADING TEXT */}
        <div className="flex justify-between text-xl tracking-widest">
          <span>LOADING...</span>
          <span>{progress}%</span>
        </div>

        {/* PIXEL BAR */}
        <div className="flex gap-1 border-4 border-white p-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`w-4 h-6 ${
                i < Math.floor(progress / 5)
                  ? "bg-white"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>

        {/* SCHOOL NAME */}
        <div className="text-sm opacity-70 tracking-widest">
          BRIGHT SCHOOL
        </div>
      </div>
    </div>
  );
}
