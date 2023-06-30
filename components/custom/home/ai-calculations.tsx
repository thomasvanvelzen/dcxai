import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AICalculations() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Trade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">Risk/Reward</p>
              <p className="text-sm">1.2345</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">Win Chance</p>
              <p className="text-sm">75%</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">Calculated Profit</p>
              <p className="text-sm">1.2345</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">Calculated Loss</p>
              <p className="text-sm">75%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
