import { Request, Response } from "express";
import * as userBookService from "./user-books.service";

// 내 서재에 책 추가 컨트롤러
export const addUserBook = async (req: Request, res: Response) => {
  try {
    const userId = 1; // 임시 ID
    // const userId = req.user.id; // 나중에 이 코드를 사용
    // 프론트(앱)에서 카카오 API(isbn)로 검색한 후, 선택한 책의 전체 정보를 body에 담아 보낸다고 가정.
    const { isbn, title, author, publisher, description, coverImage, status } = req.body;

    if (!isbn || !status) {
      return res.status(400).json({ error: "isbn과 status가 필요합니다." });
    }

    const newUserBook = await userBookService.addUserBook(userId, {
      isbn, title, author, publisher, description, coverImage
    }, status);
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

// 내 서재 목록 조회
export const getUserBooks = async (req: Request, res: Response) => {
  try {
    const userId = 1; // 임시 ID (추후 req.user.id로 교체)
    const { status } = req.query; // 쿼리 스트링에서 status 추출

    // 서비스에서 필터링 로직 처리 (status가 없으면 전체 조회)
    const books = await userBookService.getUserBooks(userId, status as string);
    
    res.status(200).json({ books });
  } catch (err: any) {
    res.status(500).json({ error: "서재 목록을 불러오는 중 오류가 발생했습니다." });
  }
};


// 내 서재 책 삭제
export const deleteUserBook = async (req: Request, res: Response) => {
  try {
    const { userBookId } = req.params;

    if (!userBookId) {
      return res.status(400).json({ error: "삭제할 도서 ID가 필요합니다." });
    }

    await userBookService.deleteUserBook(Number(userBookId));
    
    // 204 No Content는 본문을 반환하지 않습니다.
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};