import { Router } from 'express';
import docs from './docs';
import auth from './auth';
import film from './film';
import actor from './actor';
import user from './user';

const router = Router();

router.use('/docs', docs);
router.use('/auth', auth);
router.use('/film', film);
router.use('/actor', actor);
router.use('/user', user);

export default router;
