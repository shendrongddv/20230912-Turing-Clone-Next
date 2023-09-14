import { SiteLogoNavbar } from "../site-logo";
import { MobileToggle } from "./mobile-toggle";
import { NavigationMenuDemo } from "../demo/navigation-menu-demo";
import { NavButtons } from "./nav-buttons";
import { NavAuth } from "./nav-auth";

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-background px-4">
      <div className="container flex max-h-16 items-center justify-between gap-16 py-4">
        <SiteLogoNavbar />

        <div className="flex items-center justify-center gap-2 lg:flex-1">
          <NavigationMenuDemo />
          <NavButtons />
          <MobileToggle />
          <NavAuth />
        </div>
      </div>
    </header>
  );
};
