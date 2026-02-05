import { Request, Response } from "express";
import * as bookService from "./book.service";

// 책 상세 조회 컨트롤러
export const getBookDetail = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params; // 명세서의 /books/{bookId}에서 추출
    const userId = 1; // 임시 ID
    // const userId = req.user.id; // 나중에 이 코드를 사용

    if (!bookId) {
      return res.status(400).json({ error: "도서 식별자(ISBN)가 필요합니다." });
    }

    // 서비스 호출 (상세 페이지 조회를 위해 bookId를 넘김)
    const bookDetail = await bookService.getBookDetail(bookId as string, userId);
    
    res.status(200).json(bookDetail);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

// 도서 검색 컨트롤러
export const searchBooks = async (req: Request, res: Response) => {
  try {
    const { query, target } = req.query; // URL에서 query 파라미터 추출

    if (!query) {
      return res.status(400).json({ error: "검색어를 입력해주세요." });
    }

    const books = await bookService.searchBooks(query as string, target as string);
    res.status(200).json({ books });
  } catch (err: any) {
    res.status(500).json({ error: "도서 검색 중 오류가 발생했습니다." });
  }
};