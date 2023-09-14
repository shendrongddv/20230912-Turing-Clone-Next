import { Button } from "@/components/ui/button";
import { SheetDemo } from "../sheet-demo";
import { ThemeSwitcher } from "../theme-switcher";
import { SiteLogoNavbar } from "../site-logo";

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b bg-background px-4">
      <div className="container flex max-h-16 items-center justify-between py-4">
        <SiteLogoNavbar />

        <div className="flex items-center justify-center gap-2">
          <Button variant="default" className="hidden px-8 md:flex">
            Primary
          </Button>
          <Button variant="outline" className="hidden px-8 md:flex">
            Outline
          </Button>
          <ThemeSwitcher />
          <div className="flex items-center justify-center gap-2 md:hidden">
            <SheetDemo />
          </div>
        </div>
      </div>
    </header>
  );
};
