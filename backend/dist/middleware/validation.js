"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRestaurantRequest = exports.validateUserRequest = void 0;
const express_validator_1 = require("express-validator");
const validationErrorHandler = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next();
};
exports.validateUserRequest = [
    (0, express_validator_1.body)("name")
        .isString()
        .notEmpty()
        .withMessage("Name must be a string"),
    (0, express_validator_1.body)("address")
        .isString()
        .notEmpty()
        .withMessage("Address must be a string"),
    (0, express_validator_1.body)("city")
        .isString()
        .notEmpty()
        .withMessage("City must be a string"),
    (0, express_validator_1.body)("country")
        .isString()
        .notEmpty()
        .withMessage("Country must be a string"),
    validationErrorHandler
];
exports.validateRestaurantRequest = [
    (0, express_validator_1.body)("restaurantName")
        .notEmpty()
        .withMessage("Restaurant name is required"),
    (0, express_validator_1.body)("city")
        .notEmpty()
        .withMessage("City is required"),
    (0, express_validator_1.body)("country")
        .notEmpty()
        .withMessage("Country is required"),
    (0, express_validator_1.body)("deliveryPrice")
        .isFloat({ min: 0 })
        .withMessage("Price cannot be of a negative value"),
    (0, express_validator_1.body)("deliveryTime")
        .isInt({ min: 0 })
        .withMessage("Delivery time cannot be of a negative value"),
    (0, express_validator_1.body)("cuisines")
        .isArray()
        .withMessage("Cuisines must be an array")
        .not()
        .isEmpty()
        .withMessage("Cuisines cannot be empty"),
    (0, express_validator_1.body)("menuItems")
        .isArray()
        .withMessage("Menu items must be an array"),
    (0, express_validator_1.body)("menuItems.*.name")
        .notEmpty()
        .withMessage("Menu item name is required"),
    (0, express_validator_1.body)("menuItems.*.price")
        .isFloat({ min: 0 })
        .withMessage("Menu item price is required"),
    validationErrorHandler
];
