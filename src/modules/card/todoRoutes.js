import { Router } from 'express';

import cardGetAll from './controllers/cardGetAll';
import cardGetById from './controllers/cardGetById';
import cardUpdateById from './controllers/cardUpdateById';
import cardCreate from './controllers/cardCreate';
import cardDeleteById from './controllers/cardDeleteById';
import cardChangeStatusById from './controllers/cardChangeStatusById';
import cardDeleteAll from './controllers/cardDeleteAll';
import cardSetDemoData from './controllers/cardSetDemoData';

const router = Router();

router.get('/', cardGetAll);
router.post('/demo', cardSetDemoData);
router.post('/', cardCreate);
router.get('/:cardId', cardGetById);
router.patch('/:cardId', cardUpdateById);
router.put('/:cardId', cardChangeStatusById);
router.delete('/all', cardDeleteAll);
router.delete('/:cardId', cardDeleteById);

export default router;
