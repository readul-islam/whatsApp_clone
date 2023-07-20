import express from 'express';
import { userLogin, userRegister } from '../controllers/user.controller.js';
const router  = express.Router();



router.post('/register', userRegister)
router.get('/login', userLogin)





export default router;