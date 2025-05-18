import Gallery from "@/components/icons/Gallery";
import MessagePopover from "@/components/MessagePopover";
import NotificationPopover from "@/components/NotificationPopover";
import { ChevronDown, Search } from "lucide-react";
import { ResponsiveNavDrawer } from "./ResponsiveNavBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 flex-col  lg:flex-row  ">
      <div className="flex w-full gap-3.5 items-center">
        <ResponsiveNavDrawer />
        <div className="relative w-full  lg:flex-2 ">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#273040]" />
          <input
            type="text"
            placeholder="Search here ..."
            className="h-16 w-full rounded-full border-none bg-white pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D163A]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2.5 bg-[#FFF] p-2 rounded-[100px] flex-1 md:w-full justify-around ">
        <NotificationPopover />
        <MessagePopover />
        <div className="flex items-center gap-2 rounded-full bg-white  ">
          <div className="flex items-center gap-2.5 ">
            <div className="size-12 bg-[#DEDEDE] rounded-full flex items-center justify-center">
              <Gallery />
            </div>
            <span className="text-base font-medium text-[#0D163A]">
              Mirie Kiritani
            </span>
            <ChevronDown className="h-6 w-6 text-[#0D163A]" />
          </div>
        </div>
      </div>
    </header>
  );
}
