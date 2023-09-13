import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { ChevronsRight, LucideIcon, PlayCircle } from "lucide-react";

import { dummyTalentCloud } from "@/config/dummy";

export const GlobalReactSection = () => {
  const items = dummyTalentCloud;

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="container flex flex-col gap-8">
        {/* # */}
        <h2 className="h2">
          Turing combines global reach and AI to deliver your ideal remote
          developers
        </h2>

        {/* # */}
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:justify-evenly md:gap-12">
          {/* Col */}
          <div className="flex flex-col items-start gap-4 rounded-xl bg-background px-4 py-8 transition duration-300 hover:shadow-lg md:w-3/12 md:px-4">
            <Image
              src="/image-5.webp"
              alt=""
              width={400}
              height={400}
              className="h-auto w-1/2 md:w-3/5"
            />

            <h3 className="text-lg font-bold">Tailored to your requirements</h3>

            <ul className="grid gap-4">
              <li className="flex items-center gap-2 leading-none">
                <ChevronsRight className="h-4 w-4 text-[#66CC80]" />
                Role
              </li>
              <li className="flex items-center gap-2 leading-none">
                <ChevronsRight className="h-4 w-4 text-[#66CC80]" />
                Tech Stack
              </li>
              <li className="flex items-center gap-2 leading-none">
                <ChevronsRight className="h-4 w-4 text-[#66CC80]" />
                Seniority Level
              </li>
            </ul>
          </div>

          {/* Col */}
          <div className="flex flex-col gap-4 rounded-xl bg-background px-4 py-8 transition duration-300 hover:shadow-lg md:w-2/5 md:items-center md:px-4">
            {/* # */}
            <h3 className="text-lg font-bold">
              Our Talent Cloud platform leverages
            </h3>

            {/* # */}
            <ul className="grid gap-2">
              {items?.map((item) => (
                <ItemCard key={item.id} label={item.label} icon={item.icon} />
              ))}
            </ul>

            {/* # */}
            <Link
              href="/"
              aria-label="See how it works"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "mt-4 w-full sm:w-max md:px-8",
                }),
              )}
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              See how it works
            </Link>
          </div>

          {/* Col */}
          <div className="flex flex-col items-start gap-4 rounded-xl bg-background px-4 py-8 transition duration-300 hover:shadow-lg md:w-3/12 md:px-4">
            <Image
              src="/image-6.webp"
              alt=""
              width={400}
              height={400}
              className="h-auto w-1/2 md:w-3/5"
            />

            <h3 className="text-lg font-bold">Your ideal developer</h3>

            <ul className="grid gap-2">
              <li className="flex flex-col">
                <div className="flex items-center gap-2 text-sm leading-normal text-muted-foreground">
                  <ChevronsRight className="h-4 w-4 text-[#66CC80]" />
                  Typical engagement:
                </div>
                <span className="pl-6 text-lg">Full-time</span>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center gap-2 text-sm leading-normal text-muted-foreground">
                  <ChevronsRight className="h-4 w-4 text-[#66CC80]" />
                  Time zone overlap:
                </div>
                <span className="pl-6 text-lg">4 hours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component
type ItemCardProps = {
  label: string;
  icon: LucideIcon;
};

const ItemCard = ({ label, icon: Icon }: ItemCardProps) => {
  return (
    <li className="flex items-center justify-start gap-4 rounded-lg bg-slate-100 px-4 py-2 text-[#2E6EDF]">
      <Icon className="h-5 w-5" />
      {label}
    </li>
  );
};
