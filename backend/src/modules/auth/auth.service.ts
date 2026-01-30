import { prisma } from "../../config/prisma";
import { hashPassword, comparePassword } from "../../utils/password";
import jwt from "jsonwebtoken";

// 회원가입 서비스
export const signup = async (email: string, password: string, nickname: string) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("이미 존재하는 이메일입니다.");

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: { email, password: hashedPassword, nickname },
  });

  return user;
};

// 로그인 서비스
export const login = async (email: string, password: string) => {
  // 1. 이메일로 유저 찾기
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("존재하지 않는 이메일입니다.");
  }

  // 2. 비밀번호 일치 여부 확인
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  // 3. JWT 토큰 생성 (페이로드에 유저 ID 포함)
  // .env 파일에 JWT_SECRET이 설정되어 있어야 합니다.
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET || "your_temporary_secret_key",
    { expiresIn: "7d" } // 토큰 유효 기간: 7일
  );

  return { user, token };
};