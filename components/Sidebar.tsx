"use client";

import { cn } from "@/lib/utils";
import {
  Calendar,
  HelpCircle,
  LineChart,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import Gallery from "./icons/Gallery";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

export type NavItem = {
  href: string;
  icon: React.ElementType;
  label: string;
};

export const mainNavItems: NavItem[] = [
  {
    href: "/",
    icon: RiDashboardFill,
    label: "Dashboard",
  },
  {
    href: "/calender",
    icon: Calendar,
    label: "Schedule",
  },
  {
    href: "/message",
    icon: MessageSquare,
    label: "Message",
  },
  {
    href: "/analytics",
    icon: LineChart,
    label: "Analytics",
  },
  {
    href: "/teams",
    icon: Users,
    label: "Team",
  },
];

export const accountNavItems: NavItem[] = [
  {
    href: "/profile",
    icon: User,
    label: "Profile",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Settings",
  },
];

export const helpNavItems: NavItem[] = [
  {
    href: "/help",
    icon: HelpCircle,
    label: "Help",
  },
  {
    href: "/logout",
    icon: LogOut,
    label: "Logout",
  },
];

export default function Sidebar() {
  return (
    <div className="w-72 bg-[#FFFFFF] h-full  flex-col hidden md:flex ">
      <SideBarHeader />
      <nav>
        <NavSection items={mainNavItems} className="flex-1" />
        <div className="h-[1px] bg-[#0D163A]/30 w-55 mx-auto my-8 " />
        <NavSection items={accountNavItems} className="flex-1" />
      </nav>
      <NavSection items={helpNavItems} className="mt-auto " />
    </div>
  );
}

function SideBarHeader() {
  return (
    <div className="flex py-8 justify-center items-center ">
      <div className="bg-[#D9D9D9] py-3.5 px-[77px]">
        <Gallery />
      </div>
    </div>
  );
}

export const NavItem = ({ href, icon: Icon, label }: NavItem) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "ghost",
        className: cn(
          "w-full font-normal h-16 justify-start rounded-none ",
          isActive(href) &&
            "font-semibold  border-l-4 border-[#4745a4] rounded-r-none "
        ),
      })}
    >
      <div className="flex gap-4 px-7">
        <Icon className={cn(" size-6", isActive(href) && "text-[#F9BA33]")} />
        {label}
      </div>
    </Link>
  );
};

export function NavSection({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item, index) => (
        <NavItem
          key={index}
          href={item.href}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  );
}
