import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "./types";

const initialState: SearchState = {
    search: null,
    isLoading: false,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload.search;
        },
        removeSearch(state) {
            state.search = {City: "", startDate: "", endDate: "", Persons: 0};
        },
        setIsLoadingSearch(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
});

export const { setSearch, removeSearch, setIsLoadingSearch } = searchSlice.actions;

export default searchSlice.reducer;
