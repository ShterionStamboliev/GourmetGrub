import { Request, Response } from 'express'
import Restaurant from '../models/restaurantModel';
import cloudinary from 'cloudinary'
import mongoose from 'mongoose';

const getRestaurant = async (req: Request, res: Response) => {
    try {
        const findRestaurant = await Restaurant.findOne({
            user: req.userId
        });

        if (!findRestaurant) {
            return res.status(404).json({
                message: "Could not find restaurant"
            });
        }
        res.json(findRestaurant);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

const createRestaurant = async (req: Request, res: Response) => {
    try {
        const isRestaurantExisting = await Restaurant.findOne({
            user: req.userId
        });

        if (isRestaurantExisting) {
            return res.status(409).json({
                message: "Restaurant already exists"
            });
        }

        const imageUrl = await uploadImage(req.file as Express.Multer.File);

        const restaurant = new Restaurant(req.body);
        restaurant.imageUrl = imageUrl;
        restaurant.user = new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdated = new Date();
        await restaurant.save();

        res.status(201).send(restaurant);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

const updateRestaurant = async (req: Request, res: Response) => {
    try {
        const {
            restaurantName,
            city,
            country,
            deliveryPrice,
            deliveryTime,
            cuisines,
            menuItems,
        } = req.body;

        const restaurant = await Restaurant.findById(req.userId);

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
            const imageUrl = await uploadImage(req.file as Express.Multer.File);
            restaurant.imageUrl = imageUrl;
        }

        await restaurant.save();

        res.send(restaurant);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

const uploadImage = async (file: Express.Multer.File) => {
    const image = file;
    const baseImage = Buffer.from(image.buffer).toString('base64');
    const dataUri = `data:${image.mimetype};base64,${baseImage}`;

    const upload = await cloudinary.v2.uploader.upload(dataUri);
    return upload.url;
}

export default {
    getRestaurant,
    createRestaurant,
    updateRestaurant
}