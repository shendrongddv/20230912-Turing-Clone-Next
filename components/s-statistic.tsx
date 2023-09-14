import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CounterStats } from "./counter";
import Image from "next/image";

export const StatisticSection = () => {
  return (
    <section className="overflow-hidden bg-[#427BD9] px-4 py-16 text-white">
      <div className="container relative isolate flex">
        {/* Col */}
        <div className="z-10 flex flex-col justify-start gap-8 max-md:pt-20 md:w-1/2">
          {/* # */}
          <h2 className="h2 text-3xl font-normal md:text-5xl">
            <span className="font-bold">2 Million +</span>
            &nbsp;developers from&nbsp;
            <span className="font-bold">150 countries</span>&nbsp;have already
            joined Turing
          </h2>

          {/* # */}
          <CounterStats />

          {/* # */}
          <div className="mt-4 flex flex-col gap-2 md:flex-row">
            <Link
              href="/"
              aria-label="Hire Developers"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full border-white bg-white text-primary-foreground hover:text-white md:w-max md:px-8",
                }),
              )}
            >
              Hire Developers
            </Link>
            <Link
              href="/"
              aria-label="Apply for Jobs"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full border-white text-white hover:text-white md:w-max md:px-8",
                }),
              )}
            >
              Apply for Jobs
            </Link>
          </div>
        </div>

        {/* Col */}
        <div className="absolute -right-8 -top-8 z-0 w-[90dvw] md:w-3/5">
          <Image
            src="/dots-map.svg"
            alt="World Map"
            width={1600}
            height={900}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};
