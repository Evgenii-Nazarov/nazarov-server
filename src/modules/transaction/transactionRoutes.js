import { Router } from 'express';
import transactionCreate from './controllers/create'
import transactionDeleteById from './controllers/deleteById'
import transactionUpdateById from './controllers/updateById'
import transactionGetById from './controllers/getById'
import transactionGetAllByOwner from './controllers/getAllByOwner'

const router = Router();

router.post('/', transactionCreate);
router.delete('/:transactionId', transactionDeleteById);
router.patch('/:transactionId', transactionUpdateById);
router.get('/:transactionId', transactionGetById);
router.get('/owner/:ownerId', transactionGetAllByOwner);

export default router;
