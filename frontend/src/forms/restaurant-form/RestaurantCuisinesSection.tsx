import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { restaurantOptionsList } from "@/utils/restaurantOptions";
import CuisineCheckbox from "./CuisineCheckbox";

const RestaurantCuisinesSection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Cuisines</h2>
                <FormDescription>
                    Select the cuisines
                </FormDescription>
            </div>
            <FormField control={control} name='cuisines' render={({ field }) => (
                <FormItem>
                    <div className="grid md:grid-cols-5 gap-1">
                        {restaurantOptionsList.map((cuisineItem) => (
                            <CuisineCheckbox
                                key={cuisineItem}
                                cuisine={cuisineItem}
                                check={field}
                            />
                        ))}
                    </div>
                    <FormMessage />
                </FormItem>
            )} />
        </div>
    )
}

export default RestaurantCuisinesSection;