import { IApiResponse } from "@/interfaces/ApiResponse";
import { baseApi } from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<
      IApiResponse,
      {
        email: string;
        name: string;
        password: string;
        role: "driver" | "rider";
        vehicleInfo?: { model?: string; licensePlate?: string };
      }
    >({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
