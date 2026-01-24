import { Router } from "express";
import * as userBookController from "./user-books.controller";

const router = Router();

router.post("/", userBookController.addUserBook);
router.patch("/:userBookId", userBookController.updateStatus);

export default router;