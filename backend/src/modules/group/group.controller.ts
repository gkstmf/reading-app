import { Request, Response } from 'express';
import * as groupService from './group.service';

export const createGroup = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const userId = 1; 
    const group = await groupService.createGroup(userId, name, description);
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ message: "그룹 생성 실패" });
  }
};

export const getMyGroups = async (req: Request, res: Response) => {
  try {
    const userId = 1;
    const groups = await groupService.getMyGroups(userId);
    // 데이터 가공 로직 필요 (리스트 형태로 정리)
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: "목록 조회 실패" });
  }
};

export const joinGroup = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;
    const { groupCode } = req.body;
    const userId = 1;
    await groupService.joinGroup(userId, Number(groupId), groupCode);
    res.status(200).json({ message: "참여 완료" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getGroupDetail = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;
    const group = await groupService.getGroupDetail(Number(groupId));
    res.status(200).json(group);
  } catch (error) {
    res.status(404).json({ message: "그룹을 찾을 수 없습니다." });
  }
};

export const leaveGroup = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;
    const userId = 1;
    await groupService.leaveGroup(userId, Number(groupId));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "탈퇴 실패" });
  }
};

export const addGroupWish = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;
    const { bookId } = req.body; // 책 ID는 본문(body)으로 받는 것이 일반적입니다.

    const result = await groupService.addGroupWish(Number(groupId), Number(bookId));
    
    res.status(201).json({
      message: "위시리스트 추가 완료",
      data: result
    });
  } catch (error: any) {
    // 중복 추가 등의 에러 처리
    res.status(400).json({ message: error.message || "추가 실패" });
  }
};

export const getGroupWishlist = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.params;

    // 숫자가 아닌 값이 들어올 경우를 대비한 검증
    if (isNaN(Number(groupId))) {
      return res.status(400).json({ message: "유효하지 않은 그룹 ID입니다." });
    }

    const wishlist = await groupService.getGroupWishlist(Number(groupId));
    
    res.status(200).json(wishlist);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "그룹 위시리스트 조회 실패" });
  }
};

export const getUserReviews = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const reviews = await groupService.getMemberReviews(Number(userId));
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "리뷰 조회 실패" });
  }
};