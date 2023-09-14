import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const NavButtons = () => {
  return (
    <ul className="hidden items-center justify-center gap-2 lg:flex">
      <li>
        <Link
          href="/"
          aria-label="Apply for Jobs"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "default",
              className: "px-8",
            }),
          )}
        >
          Apply for Jobs
        </Link>
      </li>

      <li>
        <Link
          href="/"
          aria-label="Hire Developers"
          className={cn(
            buttonVariants({
              variant: "primary",
              size: "default",
              className: "px-8",
            }),
          )}
        >
          Hire Developers
        </Link>
      </li>
    </ul>
  );
};
