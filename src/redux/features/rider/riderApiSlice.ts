import { IApiResponse } from "@/interfaces/ApiResponse";
import { baseApi } from "../api/baseApi";
import { IRide } from "@/interfaces/ride.interface";

const riderApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestRide: builder.mutation<IApiResponse, IRide>({
      query: (data) => ({
        url: "/rides/request",
        method: "POST",
        body: data,
      }),
    }),
    getRide: builder.query<IApiResponse, void>({
      query: () => ({
        url: "/rides/my-history",
        method: "GET",
      }),
    }),
  }),
});

export const { useRequestRideMutation, useGetRideQuery } = riderApiSlice;
