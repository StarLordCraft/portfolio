'use client';

import CountUp from 'react-countup';

export default function Counter({
  start,
  end,
  duration,
  last,
  title,
}: {
  start: number;
  end: number;
  duration: number;
  last?: boolean;
  title: string;
}) {
  const divisorStyles = `after:w-[1px]
    after:h-full after:bg-black/10 dark:after:bg-white/10
    after:absolute after:top-0 after:right-0`;
  return (
    <div className={`${!last && divisorStyles} relative flex-1`}>
      <h3
        className="text-2xl xl:text-4xl font-extrabold text-indigo-500 
            dark:text-accent mb-2">
        <CountUp start={start} end={end} duration={duration} />+
      </h3>
      <div
        className="text-xs uppercase tracking-[1px] leading-[1.4]
            max-w-[100px]">
        {title}
      </div>
    </div>
  );
}
