import Image from "next/image";
import Link from "next/link";

import { siteSocials } from "@/config/site";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
const dummyToS = [
  {
    id: 1,
    label: "Sitemap",
    url: "/",
  },
  {
    id: 2,
    label: "Terms of Service",
    url: "/",
  },
  {
    id: 3,
    label: "Privacy Policy",
    url: "/",
  },
];

export const FooterFooter = () => {
  return (
    <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-center md:justify-between">
      {/* Secials */}
      <ul className="flex items-center gap-1 max-md:pb-2">
        {siteSocials?.map((item) => (
          <SocialItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </ul>

      {/* Copyright */}
      <div className="flex items-center gap-2 md:order-first">
        <Image
          src="/aicpa-soc.webp"
          alt="AICPA-SOC"
          width={50}
          height={50}
          className="h-12 w-12"
        />
        <div className="flex flex-col">
          <span className="text-base text-white">© 2023 Turing</span>
          <span className="text-[10px]">
            1900 Embarcadero Road Palo Alto, CA, 94303
          </span>
        </div>
      </div>

      {/* ToS */}
      <ul className="flex items-center gap-4">
        {dummyToS?.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              aria-label={item.label}
              className="text-xs underline-offset-8 hover:text-white hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

type SocialItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
};

const SocialItem = ({ label, icon: Icon, href }: SocialItemProps) => {
  return (
    <li>
      <Link
        href={href}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
            className:
              "aspect-1 h-max rounded-full bg-background/5 p-2 hover:bg-background/20 hover:text-white",
          }),
        )}
      >
        <Icon className="h-5 w-5" />
      </Link>
    </li>
  );
};
