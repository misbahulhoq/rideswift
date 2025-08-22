import { getRideHistory, Ride } from "@/lib/ride-data";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./RiderHistoryColumns";

export default async function RideHistoryPage() {
  const data = await getRideHistory();

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Your Ride History</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
