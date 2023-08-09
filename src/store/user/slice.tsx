import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRole } from "./api";
import { UserState } from "./types";

const initialState: UserState = {
    user: null,
    error: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;;
        },
        setUserRole(state,action){
            state.user!.role = getRole(action.payload.token) || "User"
        },
        removeUser(state) {
            state.user = null;
            state.error = null;
        },
        updateUserAvatar(state, action: PayloadAction<string>) {
            state.user!.photoURL = action.payload;
        },
        setIsLoadingUser(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setErrorUser(state, action: PayloadAction<string | null>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setUser, setUserRole, removeUser, setIsLoadingUser, setErrorUser, updateUserAvatar } = userSlice.actions;

export default userSlice.reducer;
