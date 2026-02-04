import { prisma } from "../../config/prisma";

// 내 서재에 책 추가 서비스
export const addUserBook = async (userId: number, bookId: number, status: string) => {
  // 이미 서재에 있는 책인지 확인
  const existing = await prisma.readingStatus.findFirst({
    where: { userId, bookId },
  });

  if (existing) throw new Error("이미 서재에 등록된 책입니다.");

  return await prisma.readingStatus.create({
    data: {
      userId,
      bookId,
      status, // 'WISH', 'READING', 'FINISHED'
    },
  });
};

// 독서 상태 변경 서비스
export const updateUserBookStatus = async (userBookId: number, status: string) => {
  return await prisma.readingStatus.update({
    where: { id: userBookId },
    data: { status },
  });
};

// 내 서재 목록 조회 (필터링 포함)
export const getUserBooks = async (userId: number, status?: string) => {
  const userBooks = await prisma.readingStatus.findMany({
    where: {
      userId,
      ...(status && { status }), // status가 있으면 필터링, 없으면 전체 조회
    },
    include: {
      book: true, 
    },
  });

  // 컨트롤러가 요구하는 JSON 형태로 변환
  return userBooks.map((record) => ({
    bookId: record.bookId,
    title: record.book.title,
    author: record.book.author,
    publisher: record.book.publisher,
    description: record.book.description,
    coverImage: record.book.coverImage,
    status: record.status,
  }));
};

// 내 서재 책 삭제
export const deleteUserBook = async (userBookId: number) => {
  // 존재하는 데이터인지 먼저 확인 
  const existing = await prisma.readingStatus.findUnique({
    where: { id: userBookId },
  });

  if (!existing) throw new Error("삭제할 기록이 존재하지 않습니다.");

  return await prisma.readingStatus.delete({
    where: { id: userBookId },
  });
};