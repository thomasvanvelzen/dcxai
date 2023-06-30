import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MasterCalculations() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="py-4">
        <CardTitle>Master</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=" w-full h-full flex flex-col">
          <div className="flex flex-row gap-2 h-16">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                width={100}
                height={100}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-0.5 ">
              <p className="font-semibold">Name</p>
              <div className="flex flex-1 gap-2">
                <p className="text-sm opacity-80">Win Rate</p>
                <p className="text-sm text-green-500 ">84%</p>
              </div>
              <div className="flex flex-1 gap-2">
                <p className="text-xs opacity-70">Rank</p>
                <p className="text-xs opacity-60 ">#3</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 flex-1 mt-3">
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">WR (last week)</p>
              <p className="text-sm text-green-500 ">1.245%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">WR (last month)</p>
              <p className="text-sm text-green-500 ">1.25%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">WR (last 3 months)</p>
              <p className="text-sm text-green-500 ">1.2345%</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 flex-1 mt-3">
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">% Hitting Exit 2</p>
              <p className="text-sm text-green-500 ">1.245%</p>
            </div>
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">% Hitting Exit 3</p>
              <p className="text-sm text-green-500 ">1.25%</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 mt-4">
            <div className="flex flex-1 gap-2">
              <p className="text-sm opacity-80">% Risk Free</p>
              <p className="text-sm text-green-500 ">1.245%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
