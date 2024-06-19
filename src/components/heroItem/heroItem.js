import React, { useState, useEffect } from "react";

export default function HeroItem({ title, icon, count, duration }) {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (currentCount < count) {
      const interval = setInterval(() => {
        setCurrentCount((prevCount) => {
          if (prevCount < count) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 5); // Adjust the speed of counting by changing the interval duration
      return () => clearInterval(interval);
    }
  }, [currentCount, count]);

  return (
    <div
      data-aos-duration={duration}
      className="hover:heroItems hover:bg-red-100 transition duration-500 ease-in-out flex flex-col items-center justify-center gap-2 heroItems"
    >
      <span className="flex gap-1 font-bold text-[#1d3557]">
        <p className="uppercase text-sm">{title}</p>
        {icon}
      </span>
      <p className="text-xl font-bold">{currentCount}</p>
    </div>
  );
}
