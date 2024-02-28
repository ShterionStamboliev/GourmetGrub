import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import RestaurantDetailsSection from "./RestaurantDetailsSection";
import { Separator } from "@/components/ui/separator";
import RestaurantCuisinesSection from "./RestaurantCuisinesSection";
import RestaurantMenuSection from "./RestaurantMenuSection";
import RestaurantImageSection from "./RestaurantImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "Restaurant name is required"
    }),
    city: z.string({
        required_error: "City is required"
    }),
    country: z.string({
        required_error: "Country is required"
    }),
    deliveryPrice: z.coerce.number({
        required_error: "Delivery price is required",
        invalid_type_error: "Must be a valid number"
    }),
    deliveryTime: z.coerce.number({
        required_error: "Delivery time is required",
        invalid_type_error: "Must be a valid number"
    }),
    cuisines: z.array(z.string()).nonempty({
        message: "Please select at least one item"
    }),
    menuItems: z.array(z.object({
        name: z.string().min(1, "Item name is required"),
        price: z.coerce.number().min(1, "Item price is required")
    })),
    imageFile: z.instanceof(File, {
        message: "Image is required"
    })
});

type RestaurantFormData = z.infer<typeof formSchema>;

type RestaurantFormProps = {
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
    restaurant?: Restaurant
};

const RestaurantForm = ({ onSave, isLoading, restaurant }: RestaurantFormProps) => {
    const form = useForm<RestaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cuisines: [],
            menuItems: [{
                name: "",
                price: 0,
            }],
        },
    });

    const onSubmit = (formDataInfo: RestaurantFormData) => {
        const formData = new FormData();

        formData.append('restaurantName', formDataInfo.restaurantName);
        formData.append('city', formDataInfo.city);
        formData.append('country', formDataInfo.country);
        formData.append('deliveryPrice', (formDataInfo.deliveryPrice * 100).toString());
        formData.append('deliveryTime', formDataInfo.deliveryTime.toString());
        formDataInfo.cuisines.forEach((cuisine, index) => {
            formData.append(`cuisines[${index}]`, cuisine)
        });
        formDataInfo.menuItems.forEach((item, index) => {
            formData.append(`menuItems[${index}][name]`, item.name)
            formData.append(`menuItems[${index}][price]`, (item.price * 100).toString())
        });
        formData.append(`imageFile`, formDataInfo.imageFile);

        onSave(formData);
    };

    useEffect(() => {
        if (!restaurant) {
            return;
        }

        const deliveryPriceFormat = parseInt((restaurant.deliveryPrice / 100).toFixed(2));

        const menuItemsFormat = restaurant.menuItems.map((item) => ({
            ...item,
            price: parseInt((item.price / 100).toFixed(2))
        }));

        const restaurantUpdated = {
            ...restaurant,
            deliveryPrice: deliveryPriceFormat,
            menuItems: menuItemsFormat
        };

        form.reset(restaurantUpdated);

    }, [form, restaurant]);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 ml-10 mr-10 mb-10 p-10 bg-gray-100 rounded-lg md:p-10"
            >
                <RestaurantDetailsSection />
                <Separator />
                <RestaurantCuisinesSection />
                <Separator />
                <RestaurantMenuSection />
                <Separator />
                <RestaurantImageSection />
                {isLoading ?
                    <LoadingButton /> :
                    <Button type="submit">
                        Submit
                    </Button>}
            </form>
        </Form>
    )
};

export default RestaurantForm