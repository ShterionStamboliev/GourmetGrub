import { useGetRestaurantId } from "@/api/RestaurantSearchApi";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useParams } from "react-router-dom"

const DetailsPage = () => {
    const { restaurantId } = useParams();
    const { restaurant, isLoading } = useGetRestaurantId(restaurantId);

    if (isLoading || !restaurant) {
        return 'Loading...';
    };

    return (
        <div className="flex flex-col gap-10 pl-10 pr-10 pb-10">
            <AspectRatio ratio={16 / 5}>
                <img className="rounded-md object-cover h-full w-full" src={restaurant.imageUrl} />
            </AspectRatio>

            <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                <div className="flex flex-col gap-4">
                    <RestaurantInfo restaurant={restaurant} />
                </div>
            </div>
        </div>
    )

}

export default DetailsPage;