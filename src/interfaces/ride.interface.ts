export interface IRide {
  pickupLocation: string;
  destinationLocation: string;
  fare: number | null;
  paymentMethod: "cash" | "card";
}
