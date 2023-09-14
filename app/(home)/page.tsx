import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { HeroSection } from "@/components/s-hero";
import { IntroductionSection } from "@/components/s-introduction";
import { GlobalReactSection } from "@/components/s-global-reach";
import { WhyChooseUsSection } from "@/components/s-why-choose-us";
import { WhyJoinUsSection } from "@/components/s-why-join-us";
import { ReviewUserSection } from "@/components/s-review-user";
import { ReviewCompanySection } from "@/components/s-review-company";
import { CTABeta } from "@/components/cta-beta";
import { StatisticSection } from "@/components/s-statistic";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />
      {/* ./ Hero */}

      {/* Introduction */}
      <IntroductionSection />
      {/* ./ Introduction */}

      {/* What You Get 1 */}
      <section className="px-4 py-16">
        <div className="container flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-start gap-2 md:w-3/6">
            <span className="subtitle">COMPANIES</span>
            <h2 className="h2">Hire deeply vetted developers</h2>
            <p className="lead mt-2">
              A software-first solution to any engineering problem. Use Turing
              to hire and manage the right remote developers, leads, and other
              tech talent for your resource needs.
            </p>
            <Link
              href="/"
              aria-label="Hire Developers"
              className={cn(
                buttonVariants({
                  variant: "primary",
                  size: "lg",
                  className: "mt-6 w-full sm:w-max md:px-8",
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
              className="mx-auto h-auto w-3/5 md:w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ What You Get 1 */}

      {/* What You Get 2 */}
      <section className="bg-slate-100 px-4 py-16">
        <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-2/6">
            <Image
              src="/get-fully-managed-tech-services.svg"
              alt="get-fully-managed-tech-services"
              width={400}
              height={400}
              className="mx-auto h-auto w-3/5 md:w-full"
            />
          </div>

          {/* Col */}
          <div className="flex flex-col items-start gap-2 md:w-3/6">
            <span className="subtitle">COMPANIES</span>
            <h2 className="h2">Get fully managed tech services</h2>
            <p className="lead mt-2">
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
                  variant: "primary",
                  size: "lg",
                  className: "mt-6 w-full sm:w-max md:px-8",
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
          <div className="flex flex-col items-start gap-2 md:w-3/6">
            <span className="subtitle">DEVELOPERS</span>
            <h2 className="h2">Build a remote career</h2>
            <p className="lead mt-2">
              Get AI-matched to high-paying U.S. tech jobs. Once you pass our
              vetting tests and interviews, you’ll enjoy opportunities with top
              clients who need your expert skills.
            </p>
            <Link
              href="/"
              aria-label="Apply for Jobs"
              className={cn(
                buttonVariants({
                  variant: "primary",
                  size: "lg",
                  className: "mt-6 w-full sm:w-max md:px-8",
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
              className="mx-auto h-auto w-3/5 md:w-full"
            />
          </div>
        </div>
      </section>
      {/* ./ What You Get 3 */}

      {/* Global Reach */}
      <GlobalReactSection />
      {/* ./ Global Reach */}

      {/* Why Choose Us */}
      <WhyChooseUsSection />
      {/* ./ Why Choose Us */}

      {/* Statistic */}
      <StatisticSection />
      {/* ./ Statistic */}

      {/* Why Join Us */}
      <WhyJoinUsSection />
      {/* ./ Why Join Us */}

      {/* User Reviews */}
      <ReviewUserSection />
      {/* ./ User Reviews */}

      {/* Company Reviews */}
      <ReviewCompanySection />
      {/* ./ Company Reviews */}

      {/* CTA */}
      <CTABeta />
      {/* ./ CTA */}
    </>
  );
}
