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
const userModel_1 = __importDefault(require("../models/userModel"));
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getCurrentUser = yield userModel_1.default.findOne({ _id: req.userId });
        if (!getCurrentUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(getCurrentUser);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { auth0Id } = req.body;
        const isUserExisting = yield userModel_1.default.findOne({ auth0Id });
        if (isUserExisting) {
            return res.status(200).send();
        }
        const user = new userModel_1.default(req.body);
        yield user.save();
        res.status(201).json(user.toObject());
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error while creating user"
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, address, country, city } = req.body;
        const user = yield userModel_1.default.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        user.name = name;
        user.address = address;
        user.country = country;
        user.city = city;
        yield user.save();
        res.send(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error while updating user profile"
        });
    }
});
exports.default = {
    createUser,
    updateUser,
    getUser
};
