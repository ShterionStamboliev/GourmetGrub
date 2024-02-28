import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validationErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next();
};

export const validateUserRequest = [
    body("name")
        .isString()
        .notEmpty()
        .withMessage("Name must be a string"),
    body("address")
        .isString()
        .notEmpty()
        .withMessage("Address must be a string"),
    body("city")
        .isString()
        .notEmpty()
        .withMessage("City must be a string"),
    body("country")
        .isString()
        .notEmpty()
        .withMessage("Country must be a string"),
    validationErrorHandler
];

export const validateRestaurantRequest = [
    body("restaurantName")
        .notEmpty()
        .withMessage("Restaurant name is required"),
    body("city")
        .notEmpty()
        .withMessage("City is required"),
    body("country")
        .notEmpty()
        .withMessage("Country is required"),
    body("deliveryPrice")
        .isFloat({ min: 0 })
        .withMessage("Price cannot be of a negative value"),
    body("deliveryTime")
        .isInt({ min: 0 })
        .withMessage("Delivery time cannot be of a negative value"),
    body("cuisines")
        .isArray()
        .withMessage("Cuisines must be an array")
        .not()
        .isEmpty()
        .withMessage("Cuisines cannot be empty"),
    body("menuItems")
        .isArray()
        .withMessage("Menu items must be an array"),
    body("menuItems.*.name")
        .notEmpty()
        .withMessage("Menu item name is required"),
    body("menuItems.*.price")
        .isFloat({ min: 0 })
        .withMessage("Menu item price is required"),
    validationErrorHandler
];