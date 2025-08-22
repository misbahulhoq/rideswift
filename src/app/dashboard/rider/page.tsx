import { RideRequestForm } from "./RideRequestForm";

export default function RiderDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Book a Ride</h1>
      <p className="text-muted-foreground mt-2">
        Ready to go somewhere? Enter your destination to get started.
      </p>

      {/* The Ride Request Form will go here in the next step */}
      <div className="mt-8 rounded-lg border-2 border-dashed p-8">
        <RideRequestForm />
      </div>
    </div>
  );
}
