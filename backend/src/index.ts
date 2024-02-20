import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log('Connected to MongoDB'));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
    res.json({
        message: 'App init'
    });
});

app.listen(3000, () => {
    console.log('Server running.')
});