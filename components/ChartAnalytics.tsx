import Image from "next/image";
import React from "react";
import ChartImage from "@/public/chart.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function ChartAnalytics() {
  return (
    <div className="flex-2 bg-[#FFF] p-5 rounded-[14px] space-y-6">
      <div className="flex justify-between ">
        <h1 className="text-[#0D163A] font-bold text-xl">Analytics</h1>
        <div className="flex gap-8 ">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#4745a4]"></div>
            <span className="text-[#14171f]">Label 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#f9ba33]"></div>
            <span className="text-[#14171f]">Label 1</span>
          </div>
          <Select defaultValue="weekly">
            <SelectTrigger className=" border-[#DEDEDE] rounded-md px-6">
              <SelectValue placeholder="Weekly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="relative">
        <Image
          src={ChartImage}
          alt="chart image"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
