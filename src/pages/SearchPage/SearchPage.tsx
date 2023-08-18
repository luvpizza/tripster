import SearchForm from './sections/searchpage-searchform';
import NotFound from '@/components/NotFound/NotFound';
import Preloader from '@/components/Preloader/Preloader';
import SearchResult from '@/components/SearchResult/SearchResult';
import {FC, useEffect} from 'react';
import {useSearchHotelQuery} from '@/app/api/hotel/hotelApi';
import {useAppSelector} from '@/hooks/redux/reduxHooks';
import {selectSearch} from '@/store/search/selectors';
import { SearchResult as SearchResultType } from '@/types/search';

import s from "./SearchPage.module.scss"


const SearchPage : FC = () => {
    const searchQuery: any = useAppSelector(selectSearch)
    const {data: results, isLoading, error, isFetching, refetch} = useSearchHotelQuery(searchQuery, {refetchOnMountOrArgChange: true})
    useEffect(() => {
        console.log(results);
    }, [results]);
    return (
        <section className={s.search}>
            <div className={s.search__grid}>
                <nav className={s.search__nav}>
                    <SearchForm/>
                </nav>
                <div className={s.container}>
                    {(isLoading || isFetching) && <Preloader size='xl'/>}
                    {results && results.length
                        ? <section className={s.search__results}>
                                <h2>{results!.length} search {results!.length > 1 ? "results" : "result"} for</h2>
                                <h1 className={s.search__title}>{searchQuery?.City}, {searchQuery!.Persons} {searchQuery!.Persons > 1 ? "guests" : "guest"}</h1>
                                <div className={s.results__list}>
                                    {
                                        results!.map((result: SearchResultType)=>{
                                            return <SearchResult hotel={result.hotel} availableRooms={result.availableRooms} startDate={searchQuery.startDate} endDate={searchQuery.endDate} person={searchQuery.Persons}/>
                                        })
                                    }
                                </div>
                            </section>
                        : <NotFound/>
}
                </div>
            </div>
        </section>
    );
};

export default SearchPage;