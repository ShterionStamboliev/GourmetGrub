import { SearchState } from "@/pages/SearchPage";
import { Restaurant, SearchResults } from "@/types";
import { useQuery } from "react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const useGetRestaurantId = (restaurantId?: string) => {

    const getRestaurantId = async (): Promise<Restaurant> => {
        const response = await fetch(`${API_URL}/api/restaurant/${restaurantId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch restaurant data');
        }

        return response.json();
    };

    const { data: restaurant, isLoading } = useQuery('fetchRestaurant', getRestaurantId, {
        enabled: !!restaurantId
    });

    return {
        restaurant,
        isLoading
    }
}

export const useSearchRestaurant = (searchState: SearchState, city?: string) => {

    const createSearchRequest = async (): Promise<SearchResults> => {
        const params = new URLSearchParams();
        params.set('searchQuery', searchState.searchQuery);
        params.set('page', searchState.page.toString());
        params.set('selectedCuisines', searchState.selectedCuisines.join(','));
        params.set('sortOption', searchState.sortOption);

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