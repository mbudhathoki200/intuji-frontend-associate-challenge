import ArrowRight from "@/components/icons/ArrowRight";
import RightArrow from "@/components/icons/RightArrow";
import { cn } from "@/lib/utils";

export type OverviewData = {
  title: string;
  icon: React.ElementType;
  value: string;
  salesData: string;
  arrowColor: string;
};

export default function OverviewCard({
  title,
  icon: Icon,
  value,
  salesData,
  arrowColor,
}: OverviewData) {
  return (
    <div
      className={cn(
        "p-5 rounded-[14px] bg-[#fff] border border-[#DEDEDEB2]  shadow ",
        title === "Your Balance" && "bg-[#4745A4]"
      )}
    >
      <div className="flex gap-2.5">
        <div className="size-12 rounded-full flex justify-center items-center border-[#EEE] border">
          <Icon />
        </div>
        <div className="flex flex-col gap-2.5">
          <h1
            className={cn(
              "font-semibold text-lg",
              title === "Your Balance" && "text-white"
            )}
          >
            {title}
          </h1>
          <div className="flex  gap-1 items-center">
            <ArrowRight fillColor={arrowColor} />
            <span
              className={cn(
                "text-[#0D163A] text-xs font-normal",
                title === "Your Balance" && "text-[#FFF]/60"
              )}
            >
              {salesData}
            </span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "h-[1px] bg-[#0D163A]/30 w-full my-5 ",
          title === "Your Balance" && "bg-[#FFF]/20"
        )}
      />
      <div className="flex justify-between items-center">
        <h1
          className={cn(
            "text-[#0D163A] text-[28px] font-semibold",
            title === "Your Balance" && "text-white"
          )}
        >
          {value}
        </h1>
        {title == "Your Balance" ? <RightArrow isWhite /> : <RightArrow />}
      </div>
    </div>
  );
}
