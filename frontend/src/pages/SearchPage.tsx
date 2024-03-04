import { useSearchRestaurant } from "@/api/RestaurantSearchApi";
import SearchResult from "@/components/SearchResult";
import SearchResultCard from "@/components/SearchResultCard";
import { useParams } from "react-router-dom"

const SearchPage = () => {

    const { city } = useParams();
    const { result, isLoading } = useSearchRestaurant(city);

    if (isLoading) {
        <span>Loading...</span>
    }

    if (!result?.data || !city) {
        return <span>No criteria results found</span>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 pb-10">
            <div id="cuisine-list">
                cuisines
            </div>

            <div id="main-view" className="flex flex-col gap-5">
                <SearchResult
                    total={result.pagination.totalRestaurants}
                    city={city}
                />
                {result.data.map((restaurant) => (
                    <SearchResultCard restaurant={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default SearchPage