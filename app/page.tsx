import ActiveTrades from "@/components/custom/home/active-trades";
import LikelihoodChart from "@/components/custom/home/likelihood-chart";
import MasterCalculations from "@/components/custom/home/master-calculations";
import OveralCalculations from "@/components/custom/home/overal-calculations";
import PairCalculations from "@/components/custom/home/pair-calculations";
import TradeIdea from "@/components/custom/home/trade-idea";
import TradeOverview from "@/components/custom/home/trade-overview";
import TradePlan from "@/components/custom/home/trade-plan";

export default function Home() {
  return (
    <main className="h-screen w-full bg-black flex p-2">
      <div className="flex flex-row w-full gap-2 flex-1">
        <div className="flex flex-col gap-2 flex-[1]">
          <div className="flex flex-1">
            <TradeIdea />
          </div>
          <div className="flex flex-col flex-[2] gap-2">
            <div className="flex flex-[2]">
              <TradePlan />
            </div>
            <div className="flex flex-[3]">
              <TradeOverview />
            </div>
          </div>
        </div>
        <div className="flex flex-[2] gap-2 flex-col">
          <div className="flex flex-row gap-2 flex-[1]">
            <MasterCalculations />
            <OveralCalculations />
            <LikelihoodChart />
          </div>
          <div className="flex flex-col gap-2 flex-[2]">
            <ActiveTrades />
          </div>
        </div>
      </div>
    </main>
  );
}
