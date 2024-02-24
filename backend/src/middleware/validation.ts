import { body } from "express-validator";

export const validateUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("address").isString().notEmpty().withMessage("Address must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
];