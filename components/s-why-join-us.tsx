import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const WhyJoinUsSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="md:w-2/6">
          <Image
            src="/why-are-the-best-developers-joining-turing.svg"
            alt="why-are-the-best-developers-joining-turing"
            width={400}
            height={400}
            className="h-auto w-full"
          />
        </div>

        {/* Col */}
        <div className="flex flex-col items-start gap-4 md:w-3/6">
          <h2 className="h2">
            Why are the best developers joining Turing?&nbsp;
            <span className="text-destructive">
              Because they want careers, not gigs.
            </span>
          </h2>
          <p className="text-lg">
            Use Turing to imagine, deliver, and run solutions to your toughest
            business problems. Discover quality, speed, and cost efficiency from
            our internal industry experts and the fully managed teams they build
            for you.
          </p>
          <Link
            href="/"
            aria-label="Apply for jobs"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "default",
                className: "mt-4 w-full sm:w-max md:px-8",
              }),
            )}
          >
            Apply for jobs
          </Link>
        </div>
      </div>
    </section>
  );
};
