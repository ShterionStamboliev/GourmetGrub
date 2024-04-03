import { MenuItem } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

type RestaurantMenuItemProps = {
    menuItem: MenuItem;
    addToCart: () => void;
}

const RestaurantMenuItem = ({ menuItem, addToCart }: RestaurantMenuItemProps) => {

    return (
        <Card className="cursor-pointer" onClick={addToCart}>
            <CardHeader>
                <CardTitle>
                    {menuItem.name}
                </CardTitle>
            </CardHeader>
            <CardContent className="font-bold">
                ${(menuItem.price / 100).toFixed(2)}
            </CardContent>
        </Card>
    )
}

export default RestaurantMenuItem