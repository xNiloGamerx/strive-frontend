import { MultiToggleOption } from "@/libs/types";
import { useEffect, useRef, useState } from "react";

interface MultiToggleProps {
  options: MultiToggleOption[];
}

export default function MultiToggle({ options }: MultiToggleProps) {
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const [toggleWidth, setToggleWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const el = toggleRef.current;
    if (!el) return;

    const update = () => setToggleWidth(el.clientWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={toggleRef}
      className="relative w-full flex border bg-gray-100 border-gray-300 rounded-md"
    >
      {options.map((option, index) => (
        <button
          key={option.label}
          type="button"
          className="flex items-center justify-center h-6 cursor-pointer"
          style={{ width: toggleWidth / options.length }}
          onClick={() => setCurrentIndex(index)}
        >
          {option.icon}
        </button>
      ))}
      <div
        className="absolute flex items-center justify-center bg-white h-6 rounded-md border border-gray-100 transition-all duration-300"
        style={{
          width: toggleWidth / options.length,
          left: (toggleWidth / options.length) * currentIndex,
        }}
      >
        {options[currentIndex].icon ? (
          options[currentIndex].icon
        ) : (
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
        )}
      </div>
    </div>
  );
}
