import { Request, Response } from 'express'
import Restaurant from '../models/restaurantModel';
import cloudinary from 'cloudinary'
import mongoose from 'mongoose';

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

        const image = req.file as Express.Multer.File;
        const baseImage = Buffer.from(image.buffer).toString('base64'); // Encoding the image to base64 format
        const dataUri = `data:${image.mimetype};base64,${baseImage}`; // Creating base64 image so that we can upload it to the Cloudinary base
        const upload = await cloudinary.v2.uploader.upload(dataUri);

        const restaurant = new Restaurant(req.body);
        restaurant.imageUrl = upload.url;
        restaurant.user = new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdated = new Date();
        await restaurant.save();

        res.status(201).send(restaurant)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

export default {
    createRestaurant
}