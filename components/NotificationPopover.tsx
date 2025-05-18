"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NotificationBing from "./icons/NotificationBing";

export default function NotificationPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white border border-[#DEDEDE] w-[66px] h-[48px] "
        >
          <NotificationBing className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">Notifications</h4>
          </div>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f7fb] mb-3">
              <Bell className="h-6 w-6 text-[#667085]" />
            </div>
            <h3 className="font-medium mb-1">No new notifications</h3>
            <p className="text-sm text-[#667085]">
              We&rsquo;ll notify you when something arrives
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
