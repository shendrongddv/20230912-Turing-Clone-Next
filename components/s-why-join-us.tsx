import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { dummyWhyJoinUs } from "@/config/dummy";
import { LucideIcon } from "lucide-react";

export const WhyJoinUsSection = () => {
  const items = dummyWhyJoinUs;

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
        <div className="flex flex-col items-start gap-8 md:w-3/6">
          {/* # */}
          <h2 className="h2">
            Why are the best developers joining Turing?&nbsp;
            <span className="text-primary-foreground">
              Because they want careers, not gigs.
            </span>
          </h2>

          {/* # */}
          <ul className="grid gap-4">
            {items?.map((item) => (
              <li
                key={item.id}
                className="group flex items-center justify-start gap-2"
              >
                <ItemCard desc={item.desc} icon={item.icon} />
              </li>
            ))}
          </ul>

          <Link
            href="/"
            aria-label="Apply for jobs"
            className={cn(
              buttonVariants({
                variant: "primary",
                size: "lg",
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

// Component
type ItemCardProps = {
  desc: string;
  icon: LucideIcon;
};

const ItemCard = ({ desc, icon: Icon }: ItemCardProps) => {
  return (
    <>
      {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-primary-foreground">
        <Icon className="h-6 w-6 text-primary-foreground transition-colors duration-300 group-hover:text-white" />
      </div> */}
      <div
        className={cn(
          buttonVariants({
            variant: "default",
            size: "icon",
            className:
              "aspect-1 rounded-lg bg-slate-100 text-primary-foreground group-hover:bg-primary-foreground group-hover:text-white",
          }),
        )}
      >
        <Icon className="h-5 w-5 text-primary-foreground transition-colors duration-300 group-hover:text-white" />
      </div>
      <h3 className="font-semibold">{desc}</h3>
    </>
  );
};
