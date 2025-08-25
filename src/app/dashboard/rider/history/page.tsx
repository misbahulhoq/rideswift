"use client";
import { useGetRideQuery } from "@/redux/features/rider/riderApiSlice";
import { RideHistoryTable } from "./RideHistoryTable";

export default function RideHistoryPage() {
  const { data, isLoading } = useGetRideQuery();
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Your Ride History</h1>
      <RideHistoryTable data={data?.data} />
    </div>
  );
}
