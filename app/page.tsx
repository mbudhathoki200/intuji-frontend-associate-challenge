import ChartAnalytics from "@/components/ChartAnalytics";
import Header from "@/components/Header";
import OverViewSection from "@/components/OverViewSection";
import RecentTransactions from "@/components/RecentTransactions";
import SavingPlanSection from "@/components/SavingPlanSection";

export default function Home() {
  return (
    <main className="p-8  space-y-8">
      <Header />
      <div className="flex gap-8">
        <OverViewSection />
        <SavingPlanSection />
      </div>
      <div className="flex gap-8">
        <ChartAnalytics />
        <RecentTransactions />
      </div>
    </main>
  );
}
