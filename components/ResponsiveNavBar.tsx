import { TfiMenuAlt } from "react-icons/tfi";
import {
  accountNavItems,
  helpNavItems,
  mainNavItems,
  NavSection,
} from "./Sidebar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export function ResponsiveNavDrawer() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden " asChild>
        <Button className="bg-[#0D163A]">
          <TfiMenuAlt size={28} />
        </Button>
      </SheetTrigger>
      <SheetContent asChild>
        <SheetTitle></SheetTitle>
        <nav>
          <NavSection items={mainNavItems} />
          <NavSection items={accountNavItems} />
          <NavSection items={helpNavItems} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
