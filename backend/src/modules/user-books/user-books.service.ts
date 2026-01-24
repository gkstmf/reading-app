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