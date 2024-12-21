"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TotalCard = () => {
  return (
    <Card className="max-h-36">
      <CardHeader>
        <CardTitle>Total</CardTitle>
        <CardDescription>
          This Month -{" "}
          {new Date().toLocaleDateString("default", { month: "long" })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold leading-none tracking-tight">₹0</p>
      </CardContent>
    </Card>
  );
};

export default TotalCard;
