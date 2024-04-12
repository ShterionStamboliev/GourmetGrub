"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const restaurantRoute_1 = __importDefault(require("./routes/restaurantRoute"));
const restaurantSearchRoute_1 = __importDefault(require("./routes/restaurantSearchRoute"));
const cloudinary_1 = require("cloudinary");
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Connected to MongoDB'));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/my/user", userRoute_1.default);
app.use("/api/my/restaurant", restaurantRoute_1.default);
app.use("/api/restaurant", restaurantSearchRoute_1.default);
app.listen(4000, () => {
    console.log('Server running.');
});
