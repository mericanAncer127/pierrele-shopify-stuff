'use client';

import { useState, useRef } from 'react';
import { WorkContainer } from './work-container';
import { WorkRight } from './work-right';
import { WorkTile } from './workTiles';

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, video } = work;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [offset, setOffset] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;

    const { left, width } = videoRef.current.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const percent = mouseX / width;
    const translateX = (percent - 0.5) * -100; // Moves left/right based on cursor position

    setOffset(translateX);
  };

  return (
    <WorkContainer>
      <WorkRight progress={progress}>
        <div
          className="drop-shadow-2xl sm:mt-10 md:mt-24 overflow-hidden relative"
          onMouseMove={handleMouseMove}
        >
          <div
            className="p-20 font-serif font-bold tracking-tight md:text-4xl xl:text-3xl z-10 absolute md:text-left lg:text-left lg:ml-4 md:ml-4 text-center w-full"
            style={{
              color: '#88ff8888',
              top: '12%',
              textTransform: 'capitalize',
              mixBlendMode: 'difference',
            }}
          >
            {title}
            <span className="text-1xl font-medium md:text-2xl xl:text-1xl ml-5">{description}</span>
          </div>
          <video
            ref={videoRef}
            src={`/resources/${video.src}`}
            autoPlay
            controls
            loop
            muted
            className="object-cover p-20 w-full h-auto"
            style={{ transform: `translateX(${offset}%)`, transition: 'transform 0.1s ease-out' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <div className="text-2xl font-medium md:text-3xl xl:text-4xl">
          {description}
        </div> */}
      </WorkRight>
    </WorkContainer>
  );
}
