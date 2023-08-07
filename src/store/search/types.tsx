export type SearchQuery = {
    cityId: number,
    startDate: Date,
    endDate: Date,
    persons: number,
}

export type SearchState = {
    search: SearchQuery | null,
    isLoading: boolean,
}