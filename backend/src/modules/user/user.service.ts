import { prisma } from "../../config/prisma";

// 사용자 정보 조회 서비스
export const getUserProfile = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      nickname: true,
      profileImage: true, // DB 필드명에 맞춰 수정하세요
      createdAt: true,
    },
  });

  if (!user) throw new Error("사용자를 찾을 수 없습니다.");
  return user;
};

// 사용자 정보 수정 서비스
export const updateUserProfile = async (userId: number, nickname?: string, profileImage?: string) => {
  // 정보가 있을 때만 업데이트 데이터에 포함
  const updateData: any = {};
  if (nickname) updateData.nickname = nickname;
  if (profileImage) updateData.profileImage = profileImage;

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });

  return updatedUser;
};

// 회원 탈퇴 서비스
export const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: { id: userId },
  });

  return { message: "탈퇴가 완료되었습니다." };
};