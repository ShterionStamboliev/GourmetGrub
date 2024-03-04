export type User = {
    _id: string,
    email: string,
    name: string,
    address: string,
    country: string,
    city: string
}

export type MenuItem = {
    _id: string;
    name: string;
    price: number;
}

export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    deliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
}

export type SearchResults = {
    data: Restaurant[];
    pagination: {
        totalRestaurants: number;
        getPage: number;
        pages: number;
    }
}