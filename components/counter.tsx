"use client";

import CountUp from "react-countup";

export const CounterStats = () => {
  const easingFn = function (t: number, b: number, c: number, d: number) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
  };

  return (
    <div className="flex w-full justify-between gap-4 sm:w-max md:w-4/5 md:gap-16">
      {/* Col */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="h1">
          <CountUp
            start={0}
            end={15}
            enableScrollSpy
            scrollSpyOnce
            suffix=" +"
            easingFn={easingFn}
          />
        </span>
        <span className="text-sm">Job Types</span>
      </div>
      {/* Col */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="h1">
          <CountUp
            start={0}
            end={100}
            enableScrollSpy
            scrollSpyOnce
            suffix=" +"
            easingFn={easingFn}
          />
        </span>
        <span className="text-sm">Technologies</span>
      </div>
      {/* Col */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="h1">
          <CountUp
            start={0}
            end={7}
            enableScrollSpy
            scrollSpyOnce
            suffix=" +"
            easingFn={easingFn}
          />
        </span>
        <span className="text-sm">Seniority Levels</span>
      </div>
    </div>
  );
};
