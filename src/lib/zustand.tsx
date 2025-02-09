import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ZakatCalculator = () => {
  const { count } = useStore();
  
  return (
    <Card className="w-full">
      <CardContent className="flex gap-4 p-6">
        {/* Calculator Card */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <Counter />
          </CardContent>
        </Card>

        {/* Nissab Card - Sticky */}
        <Card className="flex-1 sticky top-4 self-start h-fit">
          <CardHeader>
            <CardTitle>Nissab Reference</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Gold Nissab: 85g</p>
            <p>Silver Nissab: 595g</p>
            <p>Current Value: ${count}</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}; 