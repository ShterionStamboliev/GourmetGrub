import { SearchState } from "@/pages/SearchPage";
import { SearchResults } from "@/types";
import { useQuery } from "react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const useSearchRestaurant = (searchState: SearchState, city?: string) => {

    const createSearchRequest = async (): Promise<SearchResults> => {
        const params = new URLSearchParams();
        params.set('searchQuery', searchState.searchQuery);

        const response = await fetch(`${API_URL}/api/restaurant/search/${city}?${params.toString()}`);

        if (!response.ok) {
            throw new Error("Failed to fetch restaurant");
        }

        return response.json();
    };

    const { data: result, isLoading } = useQuery(["searchRestaurants", searchState], createSearchRequest, { enabled: !!city });

    return {
        result,
        isLoading,
    }
}