import Image from "next/image";

import { dummyTrustedByCompanies } from "@/config/dummy";

export const IntroductionSection = () => {
  const items = dummyTrustedByCompanies;

  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="container flex flex-col items-center gap-4 md:text-center">
        <h2 className="h2">
          Traditional recruiting is over. Welcome to the Talent Cloud.
        </h2>
        <p className="text-sm">
          Join 900+ companies who have trusted Turing for their remote
          engineering needs.
        </p>

        <ul className="container mt-4 flex flex-wrap items-center gap-6 md:justify-evenly md:text-center">
          {items?.map((item) => (
            <li key={item.id}>
              <Image
                src={`/${item.media}`}
                alt={item.label}
                width={200}
                height={200}
                className="h-10 w-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
