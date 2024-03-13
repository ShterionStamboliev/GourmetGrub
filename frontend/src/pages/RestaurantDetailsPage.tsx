import { useGetRestaurantId } from "@/api/RestaurantSearchApi";
import RestaurantInfoPage from "@/components/RestaurantInfoPage";
import RestaurantMenuItem from "@/components/RestaurantMenuItem";
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
                    <RestaurantInfoPage restaurant={restaurant} />
                    <span className="text-2xl font-bold tracking-tight">
                        Menu
                    </span>
                    {restaurant.menuItems.map((menuItem, index) => (
                        <RestaurantMenuItem
                            menuItem={menuItem}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

}

export default DetailsPage;