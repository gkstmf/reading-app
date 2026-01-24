import bcrypt from "bcrypt";

// 보안 강도를 설정합니다 (숫자가 높을수록 안전하지만 연산이 오래 걸림, 보통 10 권장)
const SALT_ROUNDS = 10;

/**
 * 비밀번호 암호화 (회원가입 시 사용)
 * @param password 유저가 입력한 평문 비밀번호
 * @returns 암호화된 해시값
 */
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * 비밀번호 비교 (로그인 시 사용)
 * @param password 유저가 입력한 평문 비밀번호
 * @param hashed DB에 저장된 암호화된 비밀번호
 * @returns 일치 여부 (boolean)
 */
export const comparePassword = async (
  password: string,
  hashed: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashed);
};