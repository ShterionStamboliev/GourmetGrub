import { SearchResults } from "@/types";
import { useQuery } from "react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const useSearchRestaurant = (city?: string) => {
    const createSearchRequest = async (): Promise<SearchResults> => {
        const response = await fetch(`${API_URL}/api/restaurant/search/${city}`);

        if (!response.ok) {
            throw new Error("Failed to fetch restaurant")
        }

        return response.json();
    };

    const { data: result, isLoading } = useQuery(["searchRestaurant"], createSearchRequest, { enabled: !!city });

    return {
        result,
        isLoading
    }
}