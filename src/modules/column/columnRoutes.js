import { Router } from 'express';
import columnUpdateById from './controllers/columnUpdateById';
import columnCreate from './controllers/columnCreate';
import columnDeleteById from './controllers/columnDeleteById';
import columnGetAll from './controllers/columnGetAll';
import columnGetById from './controllers/columnGetById';


const router = Router();

router.get('/', columnGetAll);
router.post('/', columnCreate);
router.get('/:columnId', columnGetById);
router.patch('/:columnId', columnUpdateById);
router.delete('/:columnId', columnDeleteById);

export default router;
