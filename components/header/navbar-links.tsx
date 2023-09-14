import { siteMainNav } from "@/config/site";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ChevronRight } from "lucide-react";

const links = [
  {
    id: 1,
    label: "AI Services",
    url: "/",
  },
  {
    id: 2,
    label: "Cloud Services",
    url: "/",
  },
  {
    id: 3,
    label: "Application Engineering Services",
    url: "/",
  },
  {
    id: 4,
    label: "Managed Teams",
    url: "/",
  },
];

export const MobileNavbarLinks = () => {
  return (
    <nav className="flex h-full flex-col py-4">
      <ul className="grid border-b pb-2">
        <span className="px-4 text-xs font-medium text-muted-foreground">
          Explore Services
        </span>
        {links?.map((item) => (
          <li key={item.id}>
            <SingleLink label={item.label} url={item.url} />
          </li>
        ))}
      </ul>

      <ul className="grid gap-2 p-4">
        <li>
          <SheetClose asChild>
            <Link
              href="/"
              aria-label="Hire Developers"
              className={cn(
                buttonVariants({
                  variant: "primary",
                  size: "lg",
                  className: "w-full",
                }),
              )}
            >
              Hire Developers
            </Link>
          </SheetClose>
        </li>
        <li>
          <SheetClose asChild>
            <Link
              href="/"
              aria-label="Apply for Jobs"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full",
                }),
              )}
            >
              Apply for Jobs
            </Link>
          </SheetClose>
        </li>
      </ul>

      <ul className="mt-auto grid border-t pb-2 pt-4">
        <span className="px-4 text-xs font-medium text-muted-foreground">
          Developer
        </span>

        <li>
          <SingleLink label="Login" url="/" />
        </li>
        <li>
          <SingleLink label="Create an Account" url="/" />
        </li>
      </ul>

      <ul className="grid border-t pt-4">
        <span className="px-4 text-xs font-medium text-muted-foreground">
          Client
        </span>

        <li>
          <SingleLink label="Login" url="/" />
        </li>
      </ul>
    </nav>
  );
};

type SingleLinkProps = {
  url: string;
  label: string;
};

const SingleLink = ({ url, label }: SingleLinkProps) => {
  return (
    <SheetClose asChild>
      <Link
        href={url}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "default",
            className:
              "group flex h-max items-center justify-between rounded-none px-4 py-2",
          }),
        )}
      >
        {label}
        <ChevronRight className="h-4 w-4 text-primary-foreground" />
      </Link>
    </SheetClose>
  );
};
