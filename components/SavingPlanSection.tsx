import { Progress } from "./ui/progress";

type PlanData = {
  title: string;
  targetDate: string;
  amountConsumed: string;
  totalAmount: number;
  progress: number;
  color: string;
};

const plansData: PlanData[] = [
  {
    title: "Bali Vacation",
    targetDate: "August 25, 2022",
    amountConsumed: "$ 1950,21",
    totalAmount: 4000,
    progress: 48,
    color: "#4745A4",
  },
  {
    title: "New Gadget",
    targetDate: "August 25, 2022",
    amountConsumed: "$ 790,21",
    totalAmount: 1000,
    progress: 79,
    color: "#DD9802",
  },
  {
    title: "Charity",
    targetDate: "August 25, 2022",
    amountConsumed: "$ 32,111",
    totalAmount: 100,
    progress: 32,
    color: "#3BBB6E",
  },
];

export default function SavingPlanSection() {
  return (
    <div className="flex-1 bg-[#FFF] p-4 rounded-[14px] space-y-6">
      <div className="flex justify-between">
        <h1 className="text-[#0D163A] font-bold text-xl">Saving Plan</h1>
        <h2 className="text-[#4745A4] text-base font-medium hover:cursor-pointer">
          See All
        </h2>
      </div>
      <div className="h-[1px] bg-[#0D163A]/30 w-full my-6 " />
      <div className="flex flex-col gap-4">
        {plansData.map((plan, index) => (
          <SavingPlanCard
            key={index}
            title={plan.title}
            targetDate={plan.targetDate}
            totalAmount={plan.totalAmount}
            progress={plan.progress}
            color={plan.color}
            amountConsumed={plan.amountConsumed}
          />
        ))}
      </div>
    </div>
  );
}

function SavingPlanCard({
  title,
  targetDate,
  totalAmount,
  progress,
  color,
  amountConsumed,
}: PlanData) {
  return (
    <div className="p-2 space-y-3.5">
      <div className="flex justify-between items-center">
        <h1 className="text-base font-medium text-[#0D163A] ">{title}</h1>
        <h2 className="text-[#0D163A] text-xs font-normal">
          Target: {targetDate}
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-[#0D163A]">
          <div className="flex gap-1 font-semibold items-end">
            <h1 className="text-xl">{amountConsumed}</h1>
            <h1 className="text-xs">/ $ {totalAmount}</h1>
          </div>
          <p
            className={` text-lg font-semibold`}
            style={{
              color: color,
            }}
          >
            48%
          </p>
        </div>
        <Progress
          value={progress}
          style={
            {
              "--progress-color": color,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}
