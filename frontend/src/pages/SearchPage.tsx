import { useSearchRestaurant } from "@/api/RestaurantSearchApi";
import CuisinesFilter from "@/components/CuisinesFilter";
import PagePagination from "@/components/PagePagination";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import SearchResultCard from "@/components/SearchResultCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
    searchQuery: string;
    page: number;
    selectedCuisines: string[];
}

const SearchPage = () => {

    const { city } = useParams();
    const [searchState, setSearchState] = useState<SearchState>({
        searchQuery: '',
        page: 1,
        selectedCuisines: []
    });

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const { result, isLoading } = useSearchRestaurant(searchState, city);

    const setSelectedCuisines = (selectedCuisines: string[]) => {
        setSearchState((prevState) => ({
            ...prevState,
            selectedCuisines,
            page: 1
        }));
    };

    const setPage = (page: number) => {
        setSearchState((prevState) => ({
            ...prevState,
            page
        }));
    };

    const setSearchQuery = (formData: SearchForm) => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: formData.searchQuery,
            page: 1
        }));
    };

    const resetSearch = () => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: '',
            page: 1
        }));
    };

    if (isLoading) {
        <span>Loading...</span>
    }

    if (!result?.data || !city) {
        return <span>No criteria results found</span>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 pb-10 mx-10">
            <div id="cuisine-list">
                <CuisinesFilter
                    selectedCuisines={searchState.selectedCuisines}
                    onChange={setSelectedCuisines}
                    isExpanded={isExpanded}
                    onExpanded={() => setIsExpanded((prev) => !prev)}
                />
            </div>

            <div id="main-view" className="flex flex-col gap-5">
                <SearchBar
                    onSubmit={setSearchQuery}
                    placeholder="Search for a restaurant or cuisine"
                    onReset={resetSearch}
                    searchQuery={searchState.searchQuery}
                />
                <SearchResult
                    total={result.pagination.totalRestaurants}
                    city={city}
                />
                {result.data.map((restaurant) => (
                    <SearchResultCard
                        key={restaurant._id}
                        restaurant={restaurant}
                    />
                ))}
                <PagePagination
                    page={result.pagination.page}
                    pages={result.pagination.pages}
                    onPageChange={setPage}
                />
            </div>
        </div>
    )
}

export default SearchPage