import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 서평 작성
export const createReview = async (userId: number, bookId: number, content: string, rating: number) => {
  return await prisma.review.create({
    data: {
      userId,
      bookId,
      content,
      rating,
    },
  });
};

// 서평 수정
export const updateReview = async (reviewId: number, userId: number, content: string, rating: number) => {
  return await prisma.review.updateMany({
    where: {
      id: reviewId,
      userId: userId,
    },
    data: {
      content,
      rating,
    },
  });
};

// 서평 삭제
export const deleteReview = async (reviewId: number, userId: number) => {
  return await prisma.review.deleteMany({
    where: {
      id: reviewId,
      userId: userId,
    },
  });
};