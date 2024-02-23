import { Request, Response } from "express";
import User from "../models/userModel";

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
        res.status(500).json({
            message: "Error while creating user"
        })
    }
};

export default {
    createUser
}