"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ChevronRight } from "lucide-react";

const links: { id: number; label: string; url: string }[] = [
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

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="mr-auto hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max gap-1 rounded-xl p-2">
              {links.map((component) => (
                <ListItem
                  key={component.id}
                  title={component.label}
                  href={component.url}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Explore Developers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Explore Jobs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "default",
              className:
                "group flex h-max items-center justify-between gap-4 px-4 py-2",
            }),
          )}
          {...props}
        >
          {title}
          <ChevronRight className="h-4 w-4 text-primary-foreground" />
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
