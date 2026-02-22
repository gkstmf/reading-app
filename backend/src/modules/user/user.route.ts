import { Router } from "express";
import * as userController from "./user.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/me", authenticateToken, userController.getMe);
router.put("/me", authenticateToken, userController.updateMe);
router.delete("/me", authenticateToken, userController.deleteMe);

export default router;