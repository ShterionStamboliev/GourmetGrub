import express from 'express';
import { param } from 'express-validator';
import restaurantSearchController from '../controllers/restaurantSearchController';

const router = express.Router();

router.get('/search/:city', param('city').isString().trim().notEmpty().withMessage("City parameter must be a string"), restaurantSearchController.searchRestaurant);

export default router;