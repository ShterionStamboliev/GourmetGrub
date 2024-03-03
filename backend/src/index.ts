import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import restaurantRoute from './routes/restaurantRoute';
import restaurantSearchRoute from './routes/restaurantSearchRoute';
import { v2 as cloudinary } from 'cloudinary';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log('Connected to MongoDB'));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", userRoute);
app.use("/api/my/restaurant", restaurantRoute);
app.use("/api/restaurant", restaurantSearchRoute);

app.listen(4000, () => {
    console.log('Server running.')
});