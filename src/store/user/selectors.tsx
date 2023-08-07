import { RootState } from './../store';

export const selectUser = ({ user: { user } }: RootState) => user;
export const selectUserError = ({ user: { error } }: RootState) => error;
export const selectUserIsLoading = ({ user: { isLoading } }: RootState) => isLoading;
export const selectUserName = (state: RootState) => state.user.user?.fullName;
export const selectUserToken = (state: RootState) => state.user.user?.accessToken;
