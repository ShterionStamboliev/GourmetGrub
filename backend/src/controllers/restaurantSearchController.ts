import { Request, Response } from "express";
import Restaurant from "../models/restaurantModel";

const searchRestaurant = async (req: Request, res: Response) => {
    try {
        const city = req.params.city;

        const searchQuery = req.query.searchQuery as string || '';
        const selectedCuisines = req.query.selectedCuisines as string || '';
        const sortOption = req.query.sortOption as string || 'lastUpdated';
        const getPage = parseInt(req.query.page as string) || 1;

        let query: any = {

        };

        query['city'] = new RegExp(city, 'i'); // This is a regex that helps with ignoring case sensitivity for the search bar (e.g. bulgaria === Bulgaria)
        const checkForCity = await Restaurant.countDocuments(query);

        if (checkForCity === 0) {
            return res.status(404).json({
                data: [],
                pagination: {
                    total: 0,
                    page: 1,
                    pages: 1
                }
            });
        }

        if (selectedCuisines) {
            const cuisinesArray = selectedCuisines.split(',').map((cuisine) => {
                new RegExp(cuisine, 'i');

                query['cuisines'] = { $all: cuisinesArray };
            })
        }

        if (searchQuery) {
            const searchReg = new RegExp(searchQuery, 'i'); // This is a regex that checks for matching search criteria in both restaurantName and cuisines []
                                                            // (e.g. searchQuery = pizza,
                                                            //  restaurantName['The Red Lobster', 'Parmigiano Italia', 'Hungry Bob'])                                                     
            query['$or'] = [                                //  cuisines['Bulgarian', 'Italian', 'French', 'Breakfast', 'Pizza']
                { restaurantName: searchReg },              //  In the case above there aren't any restaurant names containing the query 'Pizza',
                { cuisines: { $in: [searchReg] } },         //  so the query checks for matching name in the cuisines array and it returns all of the restaurants
            ]                                               //  that contain the 'pizza' tag
        }

        const displayPages = 10;
        const skipPage = (getPage - 1) * displayPages;

        const restaurants = await Restaurant.find(query).sort({ [sortOption]: 1 }).skip(skipPage).limit(displayPages).lean();

        const totalRestaurants = await Restaurant.countDocuments(query);

        const response = {
            data: restaurants,
            pagination: {
                totalRestaurants,
                getPage,
                pages: Math.ceil(totalRestaurants / displayPages)
            }
        }

        res.json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export default {
    searchRestaurant
}