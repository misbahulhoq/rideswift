import { useAppSelector, useAppDispatch } from "./hooks";
import { RootState, AppDispatch } from "@/redux/store";
import {
  useGetCurrentUserQuery,
  useLogoutMutation,
} from "@/redux/features/auth/authApiSlice";
import {
  setUser,
  clearUser,
  setLoading,
} from "@/redux/features/auth/authSlice";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const { user, loading } = useAppSelector((state: RootState) => state.auth);
  const [logoutMutation] = useLogoutMutation();
  const isAuthenticated = !!user;
  const {
    data,
    isLoading: isUserInfoRetrieving,
    isSuccess: userQuerySuccess,
  } = useGetCurrentUserQuery();

  const logout = async () => {
    await logoutMutation()
      .unwrap()
      .then(() => {
        dispatch(clearUser());
      })
      .catch(console.error);
  };

  useEffect(() => {
    dispatch(setLoading(isUserInfoRetrieving));

    if (userQuerySuccess && data?.data?.user) {
      dispatch(setUser(data?.data?.user));
    }
  }, [data, dispatch, userQuerySuccess, isUserInfoRetrieving]);

  return {
    user,
    vehicleInfo: data?.data?.vehicleInfo,
    isAuthenticated,
    isUserInfoRetrieving: loading,
    userQuerySuccess,
    logout,
  };
};
