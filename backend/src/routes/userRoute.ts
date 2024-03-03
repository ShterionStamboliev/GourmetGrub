import express from "express";
import userController from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, userController.getUser);
router.post("/", jwtCheck, userController.createUser);
router.put("/", jwtCheck, jwtParse, validateUserRequest, userController.updateUser);

export default router;