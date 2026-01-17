import { Request, Response } from "express";
import * as authService from "./auth.service";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, nickname } = req.body;
    if (!email || !password || !nickname)
      return res.status(400).json({ error: "모든 필드를 입력해주세요." });

    const user = await authService.signup(email, password, nickname);

    res.status(201).json({
      message: "회원가입 성공",
      user: { id: user.id, email: user.email, nickname: user.nickname },
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};


// 로그인 컨트롤러
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1. 필수 입력값 확인
    if (!email || !password) {
      return res.status(400).json({ error: "이메일과 비밀번호를 모두 입력해주세요." });
    }

    // 2. 서비스 로직 호출 (유저 정보와 토큰을 받아옴)
    const { user, token } = await authService.login(email, password);

    // 3. 성공 응답 (민감한 정보인 password는 제외하고 전달)
    res.status(200).json({
      message: "로그인 성공",
      token, // 클라이언트가 앞으로 요청마다 보낼 통행증
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
      },
    });
  } catch (err: any) {
    // 서비스에서 throw한 에러(비번 불일치 등)를 처리
    res.status(401).json({ error: err.message });
  }
};