import { Request, Response } from 'express';
import * as reviewService from './review.service';

export const postReview = async (req: Request, res: Response) => {
  try {
    const { bookId, content, rating } = req.body;
    const userId = 1; // 임시 유저 ID

    const newReview = await reviewService.createReview(userId, bookId, content, rating);
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서평 작성 실패" });
  }
};

export const patchReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const { content, rating } = req.body;
    const userId = 1; // 임시 유저 ID

    const result = await reviewService.updateReview(Number(reviewId), userId, content, rating);
    
    if (result.count === 0) {
      return res.status(404).json({ message: "서평을 찾을 수 없거나 수정 권한이 없습니다." });
    }
    
    res.status(200).json({ message: "수정 완료" });
  } catch (error) {
    res.status(500).json({ message: "서평 수정 실패" });
  }
};

export const removeReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const userId = 1; // 임시 유저 ID

    const result = await reviewService.deleteReview(Number(reviewId), userId);

    if (result.count === 0) {
      return res.status(404).json({ message: "서평을 찾을 수 없거나 삭제 권한이 없습니다." });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "서평 삭제 실패" });
  }
};