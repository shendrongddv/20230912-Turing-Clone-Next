export const CounterStats = () => {
  return (
    <div className="flex w-full justify-between gap-4 sm:w-max">
      {/* Col */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-4xl font-bold">15+</span>
        <span className="text-sm">Jon Types</span>
      </div>
      {/* Col */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-4xl font-bold">100+</span>
        <span className="text-sm">Technologies</span>
      </div>
      {/* Col */}
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-4xl font-bold">7+</span>
        <span className="text-sm">Seniority Levels</span>
      </div>
    </div>
  );
};
