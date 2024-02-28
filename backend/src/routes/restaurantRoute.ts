import express from 'express';
import multer from 'multer';
import restaurantController from '../controllers/restaurantController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateRestaurantRequest } from '../middleware/validation';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

router.get('/', jwtCheck, jwtParse, restaurantController.getRestaurant);
router.post('/', upload.single("imageFile"), validateRestaurantRequest, jwtCheck, jwtParse, restaurantController.createRestaurant);

export default router;