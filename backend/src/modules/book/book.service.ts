import axios from "axios";
import { prisma } from "../../config/prisma";

const KAKAO_BOOK_SEARCH_URL = "https://dapi.kakao.com/v3/search/book";

//isbn으로 책 상세 정보 및 내 서재 상태 조회 서비스
export const getBookDetail = async (isbn: string, userId: number) => {
  // 카카오 API에서 책 정보 가져오기
  const response = await axios.get(KAKAO_BOOK_SEARCH_URL, {
    params: { query: isbn, target: "isbn" },
    headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}` },
  });

  const kakaoBook = response.data.documents[0]; // 검색된 첫 번째 책
  if (!kakaoBook) throw new Error("책 정보를 찾을 수 없습니다.");

  // ISBN 13자리 추출 (카카오는 두 종류(10자리, 13자리)를 같이 줄 때가 있음)
  const realIsbn = kakaoBook.isbn.split(" ").pop();

  // 독서 상태 DB에서 가져오기
  const readingStatus = await prisma.readingStatus.findFirst({
    where: {
      userId,
      book: { isbn: realIsbn }, // 우리 DB의 Book과 연결된 ISBN 기준으로 조회
    },
  });

  return {
    bookId: realIsbn, // 프론트엔드에서 사용할 id
    isbn: kakaoBook.isbn,
    title: kakaoBook.title,
    author: kakaoBook.authors.join(", "),
    publisher: kakaoBook.publisher,
    description: kakaoBook.contents,
    coverImage: kakaoBook.thumbnail,
    status: readingStatus ? readingStatus.status : null,
  };
};


// 도서 검색 서비스 (통합 검색)
export const searchBooks = async (query: string, target?: string) => {
  const response = await axios.get(KAKAO_BOOK_SEARCH_URL, {
    params: { 
      query, 
      ...(target && { target }) // target 값이 있을 때만 객체에 추가
    }, //전체 검색도 되고, 제목/저자/출판사별 검색도 가능
    headers: { Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}` },
  });

  // 검색 결과가 없을 경우 빈 배열 반환
  if (!response.data.documents) return [];

  // 검색 결과(도서 목록) 반환
  return response.data.documents.map((book: any) => ({
    isbn: book.isbn.split(" ").pop(), // 상세 조회를 위해 13자리 ISBN 추출
    title: book.title,
    author: book.authors.join(", "),
    publisher: book.publisher,
    coverImage: book.thumbnail,
  }));
};