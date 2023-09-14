import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { UserReview } from "./user-review";

export const ReviewUserSection = () => {
  return (
    <section className="bg-slate-100 py-16 md:px-4">
      <div className="container space-y-8">
        {/* Heading */}
        <div className="flex flex-col gap-6 max-md:px-4 md:flex-row md:items-center md:justify-between">
          {/* # */}
          <div className="space-y-2 md:w-1/2">
            <h2 className="h2">People 💖 Turing</h2>
            <p>
              Read Turing.com reviews from developers across the world and learn
              what it&apos;s like working with top U.S. companies.
            </p>
          </div>

          {/* # */}
          <div className="flex flex-col items-start gap-2 md:h-1/3 md:items-end">
            <div className="flex items-end">
              <span className="text-3xl">⭐</span>
              <span className="text-3xl font-bold">4.7</span>
              <span className="ml-2 text-[10px] uppercase">Out of 5</span>
            </div>
            <small className="text-muted-foreground">
              based on developer reviews as of September 2023
            </small>
            <Link
              href="/"
              aria-label="View all reviews"
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "default",
                  className:
                    "hidden p-0 underline-offset-8 hover:underline md:flex",
                }),
              )}
            >
              View all reviews
            </Link>
          </div>
        </div>

        {/* Slide */}
        <UserReview />

        {/* Link */}
        <Link
          href="/"
          aria-label="View all reviews"
          className={cn(
            buttonVariants({
              variant: "link",
              size: "default",
              className:
                "flex p-0 underline-offset-8 hover:underline md:hidden",
            }),
          )}
        >
          View all reviews
        </Link>
      </div>
    </section>
  );
};
