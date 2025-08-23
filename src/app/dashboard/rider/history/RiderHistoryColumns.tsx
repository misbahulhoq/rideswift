"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Ride } from "@/lib/ride-data";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Map each status to a specific Badge variant for color-coding
const statusVariantMap: {
  [key in Ride["status"]]: "secondary" | "destructive" | "default" | "outline";
} = {
  Completed: "secondary",
  Cancelled: "destructive",
  Requested: "default",
  "Picked Up": "outline",
  "In Transit": "default",
};

export const columns: ColumnDef<Ride>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "pickup",
    header: "Pickup",
  },
  {
    accessorKey: "destination",
    header: "Destination",
  },
  {
    accessorKey: "fare",
    header: "Fare",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("fare"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Ride["status"];
      return <Badge variant={statusVariantMap[status]}>{status}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({}) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>View Ride Details</DropdownMenuItem>
          <DropdownMenuItem>Report an Issue</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
