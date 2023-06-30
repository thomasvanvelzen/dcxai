import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TradePlan() {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardContent className="flex-1 pt-4">
        <div className="flex flex-row gap-2 w-full">
          <p className="mt-1.5 w-24">Leverage</p>
          <div className="w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select leverage" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full mt-2">
          <div className="w-24 flex flex-col">
            <p className="mt-1.5 ">Quantity</p>
            <p className="mt-1.5 text-sm">(4%)</p>
          </div>

          <div className="w-full">
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
        </div>
        <div className="flex flex-row gap-2 w-full mt-2">
          <p className="mt-1.5 w-24">TP % Exits</p>
          <div className="flex flex-row gap-2">
            <Input
              className="flex-1"
              placeholder="Exit 1"
              type="number"
              step={0.001}></Input>
            <Input
              className="flex-1"
              placeholder="Exit 2"
              type="number"
              step={0.001}></Input>
            <Input
              className="flex-1"
              placeholder="Exit 3"
              type="number"
              step={0.001}></Input>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
