export type Ride = {
  id: string;
  date: string;
  pickup: string;
  destination: string;
  fare: number;
  status: "Requested" | "Picked Up" | "In Transit" | "Completed" | "Cancelled";
};

export const mockRideHistory: Ride[] = [
  {
    id: "RIDE001",
    date: "2025-08-22",
    pickup: "123 Main St",
    destination: "456 Oak Ave",
    fare: 25.5,
    status: "Completed",
  },
  {
    id: "RIDE002",
    date: "2025-08-21",
    pickup: "789 Pine Ln",
    destination: "101 Maple Dr",
    fare: 15.75,
    status: "Completed",
  },
  {
    id: "RIDE003",
    date: "2025-08-20",
    pickup: "210 Elm St",
    destination: "311 Birch Rd",
    fare: 32.0,
    status: "Cancelled",
  },
  {
    id: "RIDE004",
    date: "2025-08-19",
    pickup: "412 Cedar Ct",
    destination: "513 Spruce Way",
    fare: 18.25,
    status: "Completed",
  },
  {
    id: "RIDE005",
    date: "2025-08-18",
    pickup: "614 Willow St",
    destination: "715 Aspen Ave",
    fare: 22.0,
    status: "Completed",
  },
  {
    id: "RIDE006",
    date: "2025-08-17",
    pickup: "816 Juniper Ln",
    destination: "917 Poplar Dr",
    fare: 12.5,
    status: "In Transit",
  }, // Example of a current ride
  {
    id: "RIDE007",
    date: "2025-08-16",
    pickup: "1018 Fir Rd",
    destination: "1119 Redwood Ct",
    fare: 45.0,
    status: "Completed",
  },
  {
    id: "RIDE008",
    date: "2025-08-15",
    pickup: "1220 Sycamore St",
    destination: "1321 Palm Ave",
    fare: 19.75,
    status: "Cancelled",
  },
  {
    id: "RIDE009",
    date: "2025-08-14",
    pickup: "1422 Magnolia Ln",
    destination: "1523 Cypress Dr",
    fare: 28.5,
    status: "Completed",
  },
  {
    id: "RIDE010",
    date: "2025-08-13",
    pickup: "1624 Hemlock Rd",
    destination: "1725 Holly Ct",
    fare: 16.0,
    status: "Completed",
  },
  {
    id: "RIDE011",
    date: "2025-08-12",
    pickup: "1826 Cherry St",
    destination: "1927 Dogwood Ave",
    fare: 35.25,
    status: "Completed",
  },
  {
    id: "RIDE012",
    date: "2025-08-11",
    pickup: "2028 Apple Ln",
    destination: "2129 Plum Dr",
    fare: 14.0,
    status: "Picked Up",
  }, // Example
  {
    id: "RIDE013",
    date: "2025-08-10",
    pickup: "2230 Peach Rd",
    destination: "2331 Orange Ct",
    fare: 21.75,
    status: "Cancelled",
  },
  {
    id: "RIDE014",
    date: "2025-08-09",
    pickup: "2432 Lemon St",
    destination: "2533 Lime Ave",
    fare: 17.5,
    status: "Completed",
  },
  {
    id: "RIDE015",
    date: "2025-08-08",
    pickup: "2634 Grape Ln",
    destination: "2735 Berry Dr",
    fare: 30.0,
    status: "Requested",
  }, // Example
];

// 3. The data fetch function remains the same
export async function getRideHistory(): Promise<Ride[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRideHistory);
    }, 1000);
  });
}
