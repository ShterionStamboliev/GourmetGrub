import { useCreateRestaurant, useGetRestaurant } from "@/api/RestaurantApi"
import RestaurantForm from "@/forms/restaurant-form/RestaurantForm"

export const RestaurantPage = () => {
    const { createRestaurant, isLoading } = useCreateRestaurant();
    const { restaurant } = useGetRestaurant();

    return (
        <RestaurantForm
            onSave={createRestaurant}
            restaurant={restaurant}
            isLoading={isLoading}
        />
    )
}
