"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Helper to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Helper to format dates
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function RideHistoryTable({ data }: { data: any }) {
  if (!data || data.length === 0) {
    return (
      <p className="text-muted-foreground text-center">
        No ride history found.
      </p>
    );
  }

  return (
    <div>
      {/* Desktop Table View */}
      <div className="hidden rounded-md border md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Fare</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((ride) => (
              <TableRow key={ride._id}>
                <TableCell>{formatDate(ride.createdAt)}</TableCell>
                <TableCell>{ride.pickupLocation}</TableCell>
                <TableCell>{ride.destinationLocation}</TableCell>
                <TableCell>{formatCurrency(ride.fare)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {ride.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {data.map((ride) => (
          <Card key={ride._id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <span>{ride.destinationLocation}</span>
                <Badge variant="outline" className="capitalize">
                  {ride.status}
                </Badge>
              </CardTitle>
              <CardDescription>{formatDate(ride.createdAt)}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">From</span>
                <span>{ride.pickupLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fare</span>
                <span className="font-semibold">
                  {formatCurrency(ride.fare)}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
