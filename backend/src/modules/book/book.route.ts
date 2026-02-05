import { Router } from "express";
import * as bookController from "./book.controller";

const router = Router();

// bookId는 ISBN 역할
router.get("/:bookId", bookController.getBookDetail);
router.get("/", bookController.searchBooks);

export default router;