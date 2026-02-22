import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      // 토큰에서 추출해서 사용할 사용자 정보의 타입을 정의
      user?: {
        userId: number;
        id: number;
        email?: string;
      };
    }
  }
}