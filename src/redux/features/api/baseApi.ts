import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://ride-booking-api-eight.vercel.app/api/v1"
    : "http://localhost:5000/api/v1";
export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  endpoints: () => ({}),
});
