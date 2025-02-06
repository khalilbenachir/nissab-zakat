import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ZakatCalculator = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Solutions</CardTitle>
        <CardDescription>Streamline your business operations</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Last updated 3 days ago</p>
      </CardFooter>
    </Card>
  );
};

export default ZakatCalculator;
