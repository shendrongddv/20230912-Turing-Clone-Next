import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container flex flex-col-reverse gap-12 md:flex-row md:items-center">
        {/* Col */}
        <div className="flex flex-col justify-start gap-4 md:w-6/12">
          <h1 className="h1">
            The world’s most deeply vetted developers and teams, matched by AI
          </h1>
          <p className="lead">
            Our AI-powered deep-vetting talent platform matches companies with
            the engineering talent they need to succeed. From staff augmentation
            to fully managed services, Turing makes it easy to transform
            businesses.{" "}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/"
              aria-label="Hire Developers"
              className={cn(
                buttonVariants({
                  variant: "primary",
                  size: "lg",
                  className: "w-full sm:w-max md:px-8",
                }),
              )}
            >
              Hire Developers
            </Link>
            <Link
              href="/"
              aria-label="Explore Services"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-max md:px-8",
                }),
              )}
            >
              Explore Services
            </Link>
          </div>
          <p className="mt-4 text-sm">
            Looking for jobs instead?&nbsp;
            <Link
              href="/"
              aria-label="Apply for Jobs"
              className="font-semibold text-primary-foreground underline-offset-4 hover:underline"
            >
              Apply for Jobs
            </Link>
          </p>
        </div>

        {/* Col */}
        <div className="md:w-5/12">
          <Image
            priority
            src="/image-1.webp"
            alt="Image"
            width={525}
            height={410}
            className="mx-auto h-auto w-4/5 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};
