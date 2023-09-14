import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { LucideIcon } from "lucide-react";

import { dummyWhyChooseUs } from "@/config/dummy";

export const WhyChooseUsSection = () => {
  const items = dummyWhyChooseUs;

  return (
    <section className="px-4 py-16">
      <div className="container flex flex-col gap-8 md:items-center">
        {/* # */}
        <h2 className="h2">Why businesses choose Turing</h2>

        {/* # */}
        <ul className="grid gap-8 md:mx-auto md:w-4/5 md:grid-cols-3 md:gap-16">
          {items?.map((item) => (
            <li key={item.id} className="group flex flex-col gap-4">
              <ItemCard
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Component
type ItemCardProps = {
  title: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
};

const ItemCard = ({ title, subtitle, desc, icon: Icon }: ItemCardProps) => {
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <div
          className={cn(
            buttonVariants({
              variant: "default",
              size: "icon",
              className:
                "aspect-1 rounded-lg bg-slate-100 text-primary-foreground group-hover:bg-secondary-foreground group-hover:text-white",
            }),
          )}
        >
          <Icon className="h-5 w-5 text-secondary-foreground transition-colors duration-300 group-hover:text-white" />
        </div>

        <h3 className="font-bold">{title}</h3>
      </div>
      <span className="text-3xl font-semibold text-accent-foreground md:text-4xl">
        {subtitle}
      </span>
      <p className="large">{desc}</p>
    </>
  );
};
