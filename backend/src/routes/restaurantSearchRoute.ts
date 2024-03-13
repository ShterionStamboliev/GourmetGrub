import express from 'express';
import { param } from 'express-validator';
import restaurantSearchController from '../controllers/restaurantSearchController';

const router = express.Router();

router.get('/restaurantId', param('restaurantId').isString().trim().notEmpty().withMessage("Restaurant id parameter must be a string"), restaurantSearchController.getRestaurant)
router.get('/search/:city', param('city').isString().trim().notEmpty().withMessage("City parameter must be a string"), restaurantSearchController.searchRestaurant);

export default router;