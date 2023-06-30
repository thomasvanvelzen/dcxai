import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ActiveTrades() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="py-4">
        <CardTitle>Active Trades</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full gap-2 flex-col flex">
          <div className="w-full h-6 flex flex-row">
            <div className="h-full flex flex-1">
              <p className="text-sm opacity-80 ">Pair</p>
            </div>
            <div className="h-full flex flex-1">
              <p className="text-sm opacity-80 ">Entry</p>
            </div>
            <div className="h-full flex flex-1">
              <p className="text-sm opacity-80 ">Liq</p>
            </div>
            <div className="h-full flex flex-1">
              <p className="text-sm opacity-80 ">Mark</p>
            </div>
            <div className="h-full flex flex-1">
              <p className="text-sm opacity-80 ">TP/SL</p>
            </div>
            <div className="h-full flex flex-[2]">
              <p className="text-sm opacity-80 ">Unrealized P&L</p>
            </div>
          </div>
          <div className="w-full h-10 flex flex-row">
            <div className="flex-col h-full flex flex-1">
              <p className="text-sm font-semibold">UNI</p>
              <p className="text-sm  text-red-500 font-semibold">10x</p>
            </div>
            <div className="flex-col h-full flex flex-1">
              <p className="text-sm  m-auto ml-0">10.3</p>
            </div>
            <div className="flex-col h-full flex flex-1">
              <p className="text-sm  m-auto ml-0 text-orange-300">10.3</p>
            </div>
            <div className="flex-col h-full flex flex-1">
              <p className="text-sm  m-auto ml-0">10.3</p>
            </div>
            <div className="flex-col h-full flex flex-1">
              <p className="text-xs text-green-500 ">10.6/</p>
              <p className="text-xs  text-red-500 ">10.2</p>
            </div>
            <div className="flex-col h-full flex flex-[2]">
              <p className="text-sm = font-semibold  m-auto ml-0 text-green-500">
                6.07 (23.8%)
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
