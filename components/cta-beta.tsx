import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const CTABeta = () => {
  return (
    <section className="bg-[#212121] px-4 py-16 text-white">
      <div className="container flex flex-col items-center gap-4 text-center">
        <h2 className="h2"> Hire remote developers</h2>
        <p>
          Tell us the skills you need and we&apos;ll find the best developer for
          you in days, not weeks.
        </p>
        <Link
          href="/"
          aria-label="Hire Developers"
          className={cn(
            buttonVariants({
              variant: "primary",
              size: "lg",
              className: "mt-4 w-full sm:w-max md:px-8",
            }),
          )}
        >
          Hire Developers
        </Link>
      </div>
    </section>
  );
};
