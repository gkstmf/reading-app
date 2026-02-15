import { Router } from 'express';
import * as groupController from './group.controller';
import { getGroupWishlist, addGroupWish } from './group.controller';

const router = Router();

router.post('/', groupController.createGroup);
router.get('/me', groupController.getMyGroups);
router.post('/:groupId/join', groupController.joinGroup);
router.get('/:groupId', groupController.getGroupDetail);
router.delete('/:groupId/leave', groupController.leaveGroup);
router.get('/:groupId/user-books', groupController.getGroupWishlist);
router.get('/:groupId/users/:userId/reviews', groupController.getUserReviews);
router.post('/:groupId/wishlist', addGroupWish);

export default router;