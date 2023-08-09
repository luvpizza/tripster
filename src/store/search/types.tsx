export type SearchQuery = {
    City: string,
    startDate: Date | string,
    endDate: Date | string,
    Persons: number,
}

export type SearchState = {
    search: SearchQuery | null,
    isLoading: boolean,
}