import Header from "@/components/Header";
import OverViewSection from "@/components/OverViewSection";
import SavingPlanSection from "@/components/SavingPlanSection";

export default function Home() {
  return (
    <main className="p-8 h-full space-y-8">
      <Header />
      <div className="flex gap-8">
        <OverViewSection />
        <SavingPlanSection />
      </div>
    </main>
  );
}
