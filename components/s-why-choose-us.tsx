import { dummyWhyChooseUs } from "@/config/dummy";
import { LucideIcon } from "lucide-react";

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
            <li key={item.id} className="flex flex-col gap-4">
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
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
          <Icon className="h-6 w-6 text-[#66CC80]" />
        </div>

        <h3 className="font-bold">{title}</h3>
      </div>

      <span className="text-4xl font-bold text-[#1FB70B]">{subtitle}</span>

      <p className="text-lg">{desc}</p>
    </>
  );
};
