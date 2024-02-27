import express from 'express';
import multer from 'multer';
import restaurantController from '../controllers/restaurantController';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

router.post('/', upload.single("imageFile"), restaurantController.createRestaurant); 

export default router;