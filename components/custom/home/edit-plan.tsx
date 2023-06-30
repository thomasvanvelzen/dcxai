import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function EditPlan() {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle>Calculated Plan</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p>Leverage</p>
        <div className="mt-2">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <p className="mt-4">Quantity</p>
        <div className="mt-2">
          <div className="relative">
            <Input type="number" step={1} min={50}></Input>
            <p className="absolute top-2.5 right-9 text-sm pointer-events-none">
              USDT
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Button className="w-full h-6 mt-1" variant="outline">
              10%
            </Button>
            <Button className="w-full h-6 mt-1" variant="outline">
              25%
            </Button>
            <Button className="w-full h-6 mt-1" variant="outline">
              50%
            </Button>
            <Button className="w-full h-6 mt-1" variant="outline">
              75%
            </Button>
            <Button className="w-full h-6 mt-1" variant="outline">
              100%
            </Button>
          </div>
        </div>

        <p className="mt-4">Sell % At Exit</p>
        <div className="w-full flex gap-2 flex-row">
          <div className="w-full">
            <p className="mt-2 text-sm opacity-80">Exit 1</p>
            <Input
              placeholder="e.g. 50%"
              type="number"
              step={1}
              min={0}
              max={100}></Input>
          </div>
          <div className="w-full">
            <p className="mt-2 text-sm opacity-80">Exit 2</p>
            <Input
              placeholder="e.g. 50%"
              type="number"
              step={1}
              min={0}
              max={100}></Input>
          </div>
          <div className="w-full">
            <p className="mt-2 text-sm opacity-80">Exit 3</p>
            <Input
              placeholder="e.g. 100%"
              type="number"
              step={1}
              min={0}
              max={100}></Input>
          </div>
        </div>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
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
      </CardContent>
      <CardFooter className="mt-4">
        <Button className="w-full">Activate</Button>
      </CardFooter>
    </Card>
  );
}
