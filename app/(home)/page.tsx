import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 py-16">
        <div className="container flex flex-col-reverse gap-12 md:flex-row md:items-center">
          {/* Col */}
          <div className="flex flex-col justify-start gap-4 md:w-6/12">
            <h1 className="h1">
              The world’s most deeply vetted developers and teams, matched by AI
            </h1>
            <p className="text-lg">
              Our AI-powered deep-vetting talent platform matches companies with
              the engineering talent they need to succeed. From staff
              augmentation to fully managed services, Turing makes it easy to
              transform businesses.{" "}
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/"
                aria-label="Hire Developers"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "default",
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
                    size: "default",
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
                className="font-semibold underline-offset-4 hover:underline"
              >
                Apply for Jobs
              </Link>
            </p>
          </div>

          {/* Col */}
          <div className="md:w-5/12">
            <Image
              priority
              src="/img-1.png"
              alt="Image"
              width={525}
              height={410}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ Hero */}

      {/* Introduction */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container flex flex-col items-center gap-4 md:text-center">
          <h2 className="h2">
            Traditional recruiting is over. Welcome to the Talent Cloud.
          </h2>
          <p className="text-sm">
            Join 900+ companies who have trusted Turing for their remote
            engineering needs.
          </p>
        </div>
      </section>
      {/* ./ Introduction */}

      {/* What You Get 1 */}
      <section className="px-4 py-16">
        <div className="container flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-start gap-4 md:w-3/6">
            <span className="text-sm font-semibold text-muted-foreground">
              COMPANIES
            </span>
            <h2 className="h2">Hire deeply vetted developers</h2>
            <p className="text-lg">
              A software-first solution to any engineering problem. Use Turing
              to hire and manage the right remote developers, leads, and other
              tech talent for your resource needs.
            </p>
            <Link
              href="/"
              aria-label="Hire Developers"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                  className: "mt-4 w-full sm:w-max md:px-8",
                }),
              )}
            >
              Hire Developers
            </Link>
          </div>

          {/* Col */}
          <div className="md:w-2/6">
            <Image
              src="/hire-deeply-vetted-developers.svg"
              alt="hire-deeply-vetted-developers"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ What You Get 1 */}

      {/* What You Get 2 */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-2/6">
            <Image
              src="/get-fully-managed-tech-services.svg"
              alt="get-fully-managed-tech-services"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>

          {/* Col */}
          <div className="flex flex-col items-start gap-4 md:w-3/6">
            <span className="text-sm font-semibold text-muted-foreground">
              COMPANIES
            </span>
            <h2 className="h2">Get fully managed tech services</h2>
            <p className="text-lg">
              Use Turing to imagine, deliver, and run solutions to your toughest
              business problems. Discover quality, speed, and cost efficiency
              from our internal industry experts and the fully managed teams
              they build for you.
            </p>
            <Link
              href="/"
              aria-label="More about Services"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                  className: "mt-4 w-full sm:w-max md:px-8",
                }),
              )}
            >
              More about Services
            </Link>
          </div>
        </div>
      </section>
      {/* ./ What You Get 2 */}

      {/* What You Get 3 */}
      <section className="px-4 py-16">
        <div className="container flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-start gap-4 md:w-3/6">
            <span className="text-sm font-semibold text-muted-foreground">
              DEVELOPERS
            </span>
            <h2 className="h2">Build a remote career</h2>
            <p className="text-lg">
              Get AI-matched to high-paying U.S. tech jobs. Once you pass our
              vetting tests and interviews, you’ll enjoy opportunities with top
              clients who need your expert skills.
            </p>
            <Link
              href="/"
              aria-label="Apply for Jobs"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "default",
                  className: "mt-4 w-full sm:w-max md:px-8",
                }),
              )}
            >
              Apply for Jobs
            </Link>
          </div>

          {/* Col */}
          <div className="md:w-2/6">
            <Image
              src="/build-a-remote-career.svg"
              alt="build-a-remote-career.svg"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ What You Get 3 */}

      {/* Global Reach */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container flex flex-col gap-8">
          {/* # */}
          <h2 className="h2">
            Turing combines global reach and AI to deliver your ideal remote
            developers
          </h2>

          {/* # */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
            {/* Col */}
            <div className="w-full rounded-xl bg-background p-4 shadow-lg md:flex-1 md:p-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis mollitia, minima deserunt facilis, hic dolores
                adipisci odio nihil obcaecati esse error modi, eum placeat!
              </p>
            </div>

            {/* Col */}
            <div className="w-full rounded-xl bg-background p-4 shadow-lg md:w-5/12 md:p-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis mollitia, minima deserunt facilis, hic dolores
                adipisci odio nihil obcaecati esse error modi, eum placeat!
              </p>
            </div>

            {/* Col */}
            <div className="w-full rounded-xl bg-background p-4 shadow-lg md:flex-1 md:p-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis mollitia, minima deserunt facilis, hic dolores
                adipisci odio nihil obcaecati esse error modi, eum placeat!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ./ Global Reach */}

      {/* Why Choose Us */}
      <section className="px-4 py-16">
        <div className="container flex flex-col gap-8 md:items-center">
          {/* # */}
          <h2 className="h2">Why businesses choose Turing</h2>

          {/* # */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Col */}
            <div className="aspect-h-2 aspect-w-4 h-auto w-full border bg-slate-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              dolore earum dolores animi, eaque libero ipsum reiciendis,
              dignissimos nemo, ipsa ab blanditiis voluptates harum.
            </div>

            {/* Col */}
            <div className="aspect-h-2 aspect-w-4 h-auto w-full border bg-slate-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              dolore earum dolores animi, eaque libero ipsum reiciendis,
              dignissimos nemo, ipsa ab blanditiis voluptates harum.
            </div>

            {/* Col */}
            <div className="aspect-h-2 aspect-w-4 h-auto w-full border bg-slate-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              dolore earum dolores animi, eaque libero ipsum reiciendis,
              dignissimos nemo, ipsa ab blanditiis voluptates harum.
            </div>
          </div>
        </div>
      </section>
      {/* ./ Why Choose Us */}

      {/* Why Join Us */}
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
              business problems. Discover quality, speed, and cost efficiency
              from our internal industry experts and the fully managed teams
              they build for you.
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
      {/* ./ Why Join Us */}

      {/* User Reviews */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="container">
          <h2 className="h2">User Reviews</h2>
        </div>
      </section>
      {/* ./ User Reviews */}

      {/* Company Reviews */}
      <section className="px-4 py-16">
        <div className="container">
          <h2 className="h2">Company Reviews</h2>
        </div>
      </section>
      {/* ./ Company Reviews */}
      {/* ./ User Reviews */}

      {/* CTA */}
      <section className="bg-[#212121] px-4 py-16 text-white">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h2 className="h2"> Hire remote developers</h2>
          <p>
            Tell us the skills you need and we&apos;ll find the best developer
            for you in days, not weeks.
          </p>
          <Link
            href="/"
            aria-label="Hire Developers"
            className={cn(
              buttonVariants({
                variant: "destructive",
                size: "default",
                className: "mt-4 w-full sm:w-max md:px-8",
              }),
            )}
          >
            Hire Developers
          </Link>
        </div>
      </section>
      {/* ./ CTA */}

      {/* Section */}
      <section className="px-4">
        <div className="container flex h-screen flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <ThemeSwitcher />
            <ThemeToggle />
          </div>
          <h1 className="h1">
            The world’s most deeply vetted developers and teams, matched by AI
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            cupiditate laborum maiores harum in distinctio aliquam?
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Button variant="default" className="px-8">
              Primary
            </Button>
            <Button variant="outline" className="px-8">
              Outline
            </Button>
          </div>
        </div>
      </section>
      {/* ./ Section */}
    </>
  );
}
