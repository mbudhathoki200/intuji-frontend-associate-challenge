import BalanceIcon from "@/components/icons/BalanceIcon";
import ExpensesIcon from "@/components/icons/ExpensesIcon";
import IncomeIcon from "@/components/icons/IncomeIcon";
import SavingIcon from "@/components/icons/SavingIcon";
import OverviewCard, { OverviewData } from "@/components/OverViewCard";

const overviewDataMap: OverviewData[] = [
  {
    title: "Your Balance",
    icon: BalanceIcon,
    value: "$ 28,891.138",
    salesData: "15 % compared with last month",
    arrowColor: "#31D3A3",
  },
  {
    title: "Saving",
    icon: SavingIcon,
    value: "$ 1,050.44",
    salesData: "10 % compared with last month",
    arrowColor: "#FE3766",
  },
  {
    title: "Expenses",
    icon: ExpensesIcon,
    value: "$ 200.31",
    salesData: "2 % compared with last montg",
    arrowColor: "#F9BA33",
  },
  {
    title: "Incomes",
    icon: IncomeIcon,
    value: "$ 21,121.0",
    salesData: "8 % compared with last month",
    arrowColor: "#1775E4",
  },
];
export default function OverViewSection() {
  return (
    <div className="lg:flex-2 bg-[#FFF] p-4 rounded-[14px] space-y-6 flex-1">
      <h1 className="text-[#0D163A] font-bold text-xl">Overview</h1>
      <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
        {overviewDataMap.map((data, index) => (
          <OverviewCard
            key={index}
            title={data.title}
            icon={data.icon}
            value={data.value}
            salesData={data.salesData}
            arrowColor={data.arrowColor}
          />
        ))}
      </div>
    </div>
  );
}
