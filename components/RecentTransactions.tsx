import React from "react";
import Gallery from "./icons/Gallery";

type Transaction = {
  id?: number;
  name: string;
  date: string;
  amount: string;
  status: string;
};

const recentTransactionsData: Transaction[] = [
  {
    id: 1,
    name: "Figma",
    date: "August 20, 2022",
    amount: "$ 100",
    status: "Completed",
  },
  {
    id: 2,
    name: "Youtube",
    date: "August 21, 2022",
    amount: "$ 120",
    status: "Completed",
  },
  {
    id: 3,
    name: "Sketch",
    date: "August 22, 2022",
    amount: "$ 15",
    status: "Completed",
  },
  {
    id: 3,
    name: "Freepik",
    date: "August 23, 2022",
    amount: "$ 300",
    status: "Completed",
  },
];

export default function RecentTransactions() {
  return (
    <div className="flex-1 bg-[#FFF] p-4 rounded-[14px] space-y-6">
      <div className="flex justify-between">
        <h1 className="text-[#0D163A] font-bold text-xl">Recent Transaction</h1>
        <h2 className="text-[#4745A4] text-base font-medium hover:cursor-pointer">
          See All
        </h2>
      </div>
      <div className="h-[1px] bg-[#0D163A]/30 w-full my-6 " />
      <div className="space-y-[25px]">
        {recentTransactionsData.map((transaction, index) => (
          <TransactionCard
            key={index}
            name={transaction.name}
            date={transaction.date}
            amount={transaction.amount}
            status={transaction.status}
          />
        ))}
      </div>
    </div>
  );
}

function TransactionCard({ name, date, amount, status }: Transaction) {
  return (
    <div className="py-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="size-12 bg-[#DEDEDE] rounded-full flex items-center justify-center">
            <Gallery />
          </div>
          <div className="flex flex-col  gap-1">
            <h1 className="text-[#0D163A] text-lg font-semibold">{name}</h1>
            <h2 className="text-xs font-semibold text-[#0D163A]">{date}</h2>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-1">
          <h1 className="text-center text-[#0D163A] text-lg font-semibold">
            {amount}
          </h1>
          <h2 className="text-xs font-semibold text-[#3BBB6E]">{status}</h2>
        </div>
      </div>
    </div>
  );
}
