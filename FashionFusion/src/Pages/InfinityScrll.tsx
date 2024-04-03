import React, { useEffect, useRef, useState } from "react";
import { cn } from "../util/cn";

export const InfiniteMovingCards = ({
  images,
  direction = "left",
  speed = 90,
  className,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setScrollPosition((prevPos) => prevPos + 1);
      }
    }, 1000 / speed);

    return () => clearInterval(intervalId);
  }, [isHovered, speed]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-full overflow-hidden z-0", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className={cn("flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap")}>
        {images.map((imageUrl, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2 flex-shrink-0 py-6 md:w-[450px]"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal"></span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <img
                    src={imageUrl}
                    alt={`Image ${idx}`}
                    style={{   borderRadius: "10%",
                    maxWidth: '80%',
                    maxHeight: '80%',
                    objectFit: 'cover',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                  />
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
