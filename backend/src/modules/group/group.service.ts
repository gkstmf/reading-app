import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

const prisma = new PrismaClient();

// 그룹 생성
export const createGroup = async (userId: number, name: string, description: string) => {
  return await prisma.$transaction(async (tx) => {
    // 그룹 생성 (초대 코드는 랜덤 생성)
    const group = await tx.group.create({
      data: {
        name,
        description,
        inviteCode: nanoid(7).toUpperCase(), // 예: DK34VBS
      },
    });

    // 생성자를 방장(OWNER)으로 추가
    await tx.groupMember.create({
      data: {
        groupId: group.id,
        userId: userId,
        role: "OWNER",
        participantCount: 1, // 초기 인원
      },
    });

    return group;
  });
};

// 내 그룹 목록 조회 (멤버 이름 포함)
export const getMyGroups = async (userId: number) => {
  return await prisma.groupMember.findMany({
    where: { userId },
    include: {
      group: {
        include: {
          members: {
            include: { user: { select: { nickname: true } } }
          }
        }
      }
    }
  });
};

// 그룹 참여 (초대 코드 확인)
export const joinGroup = async (userId: number, groupId: number, inviteCode: string) => {
  const group = await prisma.group.findUnique({ where: { id: groupId } });
  
  if (group?.inviteCode !== inviteCode) {
    throw new Error("초대 코드가 일치하지 않습니다.");
  }

  return await prisma.groupMember.create({
    data: {
      groupId,
      userId,
      role: "MEMBER",
      participantCount: 1, // 본인 추가
    }
  });
};

// 그룹 상세 조회
export const getGroupDetail = async (groupId: number) => {
  return await prisma.group.findUnique({
    where: { id: groupId },
  });
};

// 그룹 탈퇴
export const leaveGroup = async (userId: number, groupId: number) => {
  return await prisma.groupMember.delete({
    where: {
      groupId_userId: { groupId, userId }
    }
  });
};

// 그룹의 위시리스트 추가
export const addGroupWish = async (groupId: number, bookId: number) => {
  // 이미 해당 그룹에 이 책이 담겨 있는지 확인 (중복 방지)
  const existingWish = await prisma.groupWish.findFirst({
    where: { groupId, bookId }
  });

  if (existingWish) {
    throw new Error("이미 위시리스트에 존재하는 책입니다.");
  }

  // 위시리스트에 추가
  return await prisma.groupWish.create({
    data: {
      groupId,
      bookId
    },
    include: {
      book: true // 추가된 책 정보를 함께 반환
    }
  });
};

// 그룹의 위시리스트 조회 : 수정필요
export const getGroupWishlist = async (groupId: number) => {
  const wishes = await prisma.groupWish.findMany({
    where: { groupId },
    include: {
      book: true, // Book 테이블의 상세 정보
    },
  });

  return {
    books: wishes.map((wish) => ({
      bookId: wish.book.id,
      title: wish.book.title,
      author: wish.book.author,
      publisher: wish.book.publisher,
      description: wish.book.description,
      coverImage: wish.book.coverImage,
      status: "WISH",
    })),
  };
};

// 특정 멤버의 서평 조회
export const getMemberReviews = async (userId: number) => {
  return await prisma.review.findMany({
    where: { userId },
    select: {
      content: true,
      rating: true,
      book: { select: { title: true } }
    }
  });
};