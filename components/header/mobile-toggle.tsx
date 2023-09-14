import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { MobileNavbarLinks } from "./navbar-links";
import { SiteLogoNavbar } from "../site-logo";

export const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="icon">
          <AlignJustify className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-4/5 flex-col p-0 md:hidden"
      >
        <SheetHeader className="h-16 border-b p-4">
          <SheetClose asChild>
            <SiteLogoNavbar />
          </SheetClose>
        </SheetHeader>
        {/* SheetBody */}
        <MobileNavbarLinks />
        {/* ./SheetBody */}
      </SheetContent>
    </Sheet>
  );
};
