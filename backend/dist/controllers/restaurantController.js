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
const cloudinary_1 = __importDefault(require("cloudinary"));
const mongoose_1 = __importDefault(require("mongoose"));
const getRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findRestaurant = yield restaurantModel_1.default.findOne({
            user: req.userId
        });
        if (!findRestaurant) {
            return res.status(404).json({
                message: "Could not find restaurant"
            });
        }
        res.json(findRestaurant);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
const createRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isRestaurantExisting = yield restaurantModel_1.default.findOne({
            user: req.userId
        });
        if (isRestaurantExisting) {
            return res.status(409).json({
                message: "Restaurant already exists"
            });
        }
        const imageUrl = yield uploadImage(req.file);
        const restaurant = new restaurantModel_1.default(req.body);
        restaurant.imageUrl = imageUrl;
        restaurant.user = new mongoose_1.default.Types.ObjectId(req.userId);
        restaurant.lastUpdated = new Date();
        yield restaurant.save();
        res.status(201).send(restaurant);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
const updateRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { restaurantName, city, country, deliveryPrice, deliveryTime, cuisines, menuItems, } = req.body;
        const restaurant = yield restaurantModel_1.default.findById(req.userId);
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found"
            });
        }
        restaurant.restaurantName = restaurantName;
        restaurant.city = city;
        restaurant.country = country;
        restaurant.deliveryPrice = deliveryPrice;
        restaurant.deliveryTime = deliveryTime;
        restaurant.cuisines = cuisines;
        restaurant.menuItems = menuItems;
        restaurant.lastUpdated = new Date();
        if (req.file) {
            const imageUrl = yield uploadImage(req.file);
            restaurant.imageUrl = imageUrl;
        }
        yield restaurant.save();
        res.send(restaurant);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
const uploadImage = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const image = file;
    const baseImage = Buffer.from(image.buffer).toString('base64');
    const dataUri = `data:${image.mimetype};base64,${baseImage}`;
    const upload = yield cloudinary_1.default.v2.uploader.upload(dataUri);
    return upload.url;
});
exports.default = {
    getRestaurant,
    createRestaurant,
    updateRestaurant
};
