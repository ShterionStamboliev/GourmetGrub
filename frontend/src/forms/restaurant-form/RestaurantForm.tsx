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

const formSchema = z.object({
    restaurantName: z.string().min(1, "Restaurant name is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
    deliveryPrice: z.coerce.number().min(1, "Delivery price cannot be of a negative value"),
    deliveryTime: z.coerce.number().min(1, "Delivery time cannot be of a negative value"),
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
};

const RestaurantForm = ({ onSave, isLoading }: RestaurantFormProps) => {
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

    const onSubmit = (formData: RestaurantFormData) => {

    }

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