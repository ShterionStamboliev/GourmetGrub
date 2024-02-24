import express from "express";
import userController from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

router.post("/", jwtCheck, userController.createUser);
router.put("/", jwtCheck, jwtParse, userController.updateUser);

export default router;