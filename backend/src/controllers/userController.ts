import { Request, Response } from "express";
import User from "../models/userModel";

const getUser = async (req: Request, res: Response) => {
    try {
        const getCurrentUser = await User.findOne({ _id: req.userId });
        if (!getCurrentUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(getCurrentUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const createUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        const isUserExisting = await User.findOne({ auth0Id });

        if (isUserExisting) {
            return res.status(200).send();
        }

        const user = new User(req.body);
        await user.save();

        res.status(201).json(user.toObject());
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error while creating user"
        });
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const { name, addressLine1, country, city } = req.body;
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        user.name = name;
        user.addressLine1 = addressLine1;
        user.country = country;
        user.city = city;

        await user.save();

        res.send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error while updating user profile"
        });
    }
};

export default {
    createUser,
    updateUser,
    getUser
}