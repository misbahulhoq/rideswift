import { useAppSelector, useAppDispatch } from "./hooks";
import { RootState, AppDispatch } from "@/redux/store";
import {
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
} from "@/redux/features/auth/authApiSlice";
import { setUser, clearUser } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const isAuthenticated = !!user;
  const [loginMutation, { isLoading: isLoggingIn }] = useLoginMutation();
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();
  const {
    data,
    isLoading: isUserInfoRetrieving,
    isSuccess: userQuerySuccess,
  } = useGetCurrentUserQuery();

  useEffect(() => {
    if (data?.data.user) {
      dispatch(setUser(data.data.user));
    }
  }, [data, dispatch]);

  const login = async (credentials: { email: string; password: string }) => {
    const res = await loginMutation(credentials).unwrap();
    dispatch(setUser(res.data.user));
    return res;
  };

  const logout = async () => {
    await logoutMutation().unwrap();
    dispatch(clearUser());
  };

  return {
    user: data?.data.user,
    isAuthenticated,
    login,
    logout,
    isLoggingIn,
    isLoggingOut,
    isUserInfoRetrieving,
    userQuerySuccess,
  };
};
