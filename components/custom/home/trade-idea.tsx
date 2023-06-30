import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function TradeIdea() {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="py-4">
        <CardTitle>Trading Idea</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-row gap-2 w-full">
          <p className="mt-1.5 w-16">Master</p>
          <div className="w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select master" />
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
          <p className="mt-1.5 w-16">Pair</p>
          <div className="w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select pair" />
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
          <p className="mt-1.5 w-16">Entries</p>
          <div className="w-full flex gap-2 flex-row ">
            <Input placeholder="Entry 1" type="number" step={0.001}></Input>
            <Input placeholder="Entry 2" type="number" step={0.001}></Input>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full mt-2">
          <p className="mt-1.5 w-16">TP</p>
          <div className="w-full flex gap-2 flex-row">
            <Input placeholder="Exit 1" type="number" step={0.001}></Input>
            <Input placeholder="Exit 2" type="number" step={0.001}></Input>
            <Input placeholder="Exit 3" type="number" step={0.001}></Input>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full mt-2">
          <p className="mt-1.5 w-16">SL</p>
          <div className="w-full flex gap-2 flex-row ">
            <Input
              placeholder="Invalidation"
              type="number"
              step={0.001}></Input>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
