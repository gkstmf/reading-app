import { Request, Response } from "express";
import * as userBookService from "./user-books.service";

// 내 서재에 책 추가 컨트롤러
export const addUserBook = async (req: Request, res: Response) => {
  try {
    const userId = 1; // 임시 ID
    // const userId = req.user.id; // 나중에 이 코드를 사용
    const { bookId, status } = req.body;

    if (!bookId || !status) {
      return res.status(400).json({ error: "bookId와 status가 필요합니다." });
    }

    const newUserBook = await userBookService.addUserBook(userId, Number(bookId), status);
    res.status(201).json(newUserBook);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

// 독서 상태 변경 컨트롤러
export const updateStatus = async (req: Request, res: Response) => {
  try {
    const { userBookId } = req.params; // URL 경로에서 ID 추출
    const { status } = req.body;

    if (!status) return res.status(400).json({ error: "변경할 상태가 필요합니다." });

    const updated = await userBookService.updateUserBookStatus(Number(userBookId), status);
    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};