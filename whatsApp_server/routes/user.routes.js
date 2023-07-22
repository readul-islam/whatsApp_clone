import express from 'express';
import { allUserWithOutMe, searchUser, updateUserInfo, userLogin, userRegister } from '../controllers/user.controller.js';
import { singleImage } from '../middleware/fileUpload.js';
const router  = express.Router();



router.post('/register', userRegister)
router.get('/login', userLogin)
router.get('/users', allUserWithOutMe)
router.get('/search', searchUser)
router.put('/update',singleImage, updateUserInfo)





export default router;