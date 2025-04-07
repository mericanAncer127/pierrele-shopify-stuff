'use client';

import { useLenis } from 'lenis/dist/lenis-react';
import { useRef, useState } from 'react';

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }) => {
    setScrollY(scroll);
  });

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black text-white dark:bg-white  dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-7xl">
        <div className="leading-[1.15]">
          <div className="intro-text" style={{ opacity: opacityForBlock(progress, 0) }}>
            CRO is crucial for your business, isn&apos;t it?
          </div>
          <span
            className="intro-text inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Do you have strategies in mind to increase the sales?
          </span>
          <span
            className="intro-text inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            We can do much for your store!
          </span>
          <span
            className="intro-text inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I&apos;m ready for all you want!
          </span>
        </div>
      </div>
    </div>
  );
}
