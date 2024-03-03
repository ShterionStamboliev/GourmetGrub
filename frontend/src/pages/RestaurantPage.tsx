import { useCreateRestaurant, useGetRestaurant, useUpdateRestaurant } from "@/api/RestaurantApi"
import RestaurantForm from "@/forms/restaurant-form/RestaurantForm"

export const RestaurantPage = () => {
    const { createRestaurant, isLoading: isCreateLoading } = useCreateRestaurant();
    const { restaurant } = useGetRestaurant();
    const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateRestaurant();

    const isEditQueue = !!restaurant;

    return (
        <RestaurantForm
            onSave={isEditQueue ? updateRestaurant : createRestaurant}
            restaurant={restaurant}
            isLoading={isCreateLoading || isUpdateLoading}
        />
    )
}
