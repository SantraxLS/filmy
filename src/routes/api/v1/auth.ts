import { Router } from 'express';
import { AuthController } from '../../../controllers';

const router = Router();

router.post('/signin', AuthController.signIn);

export default router;
