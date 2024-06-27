import { Router } from 'express';
import { createVirtualAccount } from '../controllers/virtualAccountController';

const router = Router();

router.post('/', createVirtualAccount);

export default router;
