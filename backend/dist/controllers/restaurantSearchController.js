"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurantModel_1 = __importDefault(require("../models/restaurantModel"));
const getRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantId = req.params.restaurantId;
        const restaurant = yield restaurantModel_1.default.findById(restaurantId);
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found"
            });
        }
        res.json(restaurant);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
const searchRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.params.city;
        const searchQuery = req.query.searchQuery || '';
        const selectedCuisines = req.query.selectedCuisines || '';
        const sortOption = req.query.sortOption || 'lastUpdated';
        const page = parseInt(req.query.page) || 1;
        let query = {};
        query['city'] = new RegExp(city, 'i'); // This is a regex that helps with ignoring case sensitivity for the search bar (e.g. bulgaria === Bulgaria)
        const checkForCity = yield restaurantModel_1.default.countDocuments(query);
        if (checkForCity === 0) {
            return res.status(404).json({
                data: [],
                pagination: {
                    totalRestaurants: 0,
                    page: 1,
                    pages: 1
                }
            });
        }
        if (selectedCuisines) {
            const cuisinesArray = selectedCuisines
                .split(',')
                .map((cuisine) => new RegExp(cuisine, 'i'));
            query['cuisines'] = { $all: cuisinesArray };
        }
        if (searchQuery) {
            const searchReg = new RegExp(searchQuery, 'i'); // This is a regex that checks for matching search criteria in both restaurantName and cuisines []
            // (e.g. searchQuery = pizza,
            //  restaurantName['The Red Lobster', 'Parmigiano Italia', 'Hungry Bob'])                                                     
            query['$or'] = [
                { restaurantName: searchReg }, //  In the case above there aren't any restaurant names containing the query 'Pizza',
                { cuisines: { $in: [searchReg] } }, //  so the query checks for matching name in the cuisines array and it returns all of the restaurants
            ]; //  that contain the 'pizza' tag
        }
        const displayPages = 10;
        const skipPage = (page - 1) * displayPages;
        const restaurants = yield restaurantModel_1.default.find(query).sort({ [sortOption]: 1 }).skip(skipPage).limit(displayPages).lean();
        const totalRestaurants = yield restaurantModel_1.default.countDocuments(query);
        const response = {
            data: restaurants,
            pagination: {
                totalRestaurants,
                page,
                pages: Math.ceil(totalRestaurants / displayPages)
            }
        };
        res.json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
exports.default = {
    getRestaurant,
    searchRestaurant
};
