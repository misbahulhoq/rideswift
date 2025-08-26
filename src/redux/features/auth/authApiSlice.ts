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
    login: builder.mutation<IApiResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation<IApiResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getCurrentUser: builder.query<IApiResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
    updateUserInfo: builder.mutation<
      IApiResponse,
      {
        name?: string;
        password?: string;
        vehicleInfo?: { model?: string; licensePlate?: string };
      }
    >({
      query: (payload) => ({
        url: "/auth/me",
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useUpdateUserInfoMutation,
} = authApi;
