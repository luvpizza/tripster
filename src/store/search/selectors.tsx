import { RootState } from './../store';

export const selectSearch = ({ search: { search } }: RootState) => search;
export const selectSearchIsLoading = ({ search: { isLoading } }: RootState) => isLoading;
