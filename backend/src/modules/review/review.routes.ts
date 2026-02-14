import { Router } from 'express';
import * as reviewController from './review.controller';

const router = Router();

router.post('/', reviewController.postReview);
router.patch('/:reviewId', reviewController.patchReview);
router.delete('/:reviewId', reviewController.removeReview);

export default router;