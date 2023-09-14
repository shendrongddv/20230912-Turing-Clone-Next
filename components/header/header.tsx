import { Button } from "@/components/ui/button";
import { SheetDemo } from "../sheet-demo";
import { ThemeSwitcher } from "../theme-switcher";
import { SiteLogoNavbar } from "../site-logo";
import { MobileToggle } from "./mobile-toggle";

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-background px-4">
      <div className="container flex max-h-16 items-center justify-between py-4">
        <SiteLogoNavbar />

        <div className="flex items-center justify-center gap-2">
          <MobileToggle />
        </div>
      </div>
    </header>
  );
};
