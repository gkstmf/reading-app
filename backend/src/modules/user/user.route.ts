import { Router } from "express";
import * as userController from "./user.controller";

const router = Router();

router.get("/me", userController.getMe);
router.put("/me", userController.updateMe);
router.delete("/me", userController.deleteMe);

export default router;