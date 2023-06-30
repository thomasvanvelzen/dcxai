import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TradeOverview() {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="py-4">
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Calc. Risk Free Chance</p>
              <p className="text-sm text-green-500 ">60.45%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Calc. Exit 1 Chance</p>
              <p className="text-sm text-green-500 ">60.45%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Calc. Exit 2 Chance</p>
              <p className="text-sm text-green-500 ">60.45%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Calc. Exit 3 Chance</p>
              <p className="text-sm text-green-500 ">60.45%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Profit Exit 1</p>
              <p className="text-sm text-green-500 ">$4</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Profit Exit 2</p>
              <p className="text-sm text-green-500 ">$6</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Profit Exit 3</p>
              <p className="text-sm text-green-500 ">$6</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Calc. Profit</p>
              <p className="text-sm text-green-500 ">$6</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">
                Calc. Profit vs. Portfolio
              </p>
              <p className="text-sm text-green-500 ">2%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Calc. Inv. Chance</p>
              <p className="text-sm text-red-500 ">60.45%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Loss At Invalidation</p>
              <p className="text-sm text-red-500 ">$5</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Risk % vs. Portfolio</p>
              <p className="text-sm text-orange-500 ">5%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80 w-40">Risk/Reward</p>
              <p className="text-sm text-green-500 ">1.12</p>
            </div>
            <div className="flex flex-[1] gap-2"></div>
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-4">
          <p className="w-40 font-semibold text-lg">Idea Safety</p>
          <p className="flex-1 font-semibold text-lg text-green-500">
            Good (67%)
          </p>
          <Button className="h-8">Activate Idea</Button>
        </div>
      </CardContent>
    </Card>
  );
}
