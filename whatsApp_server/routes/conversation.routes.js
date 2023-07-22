import express from 'express';
import { addConversation } from '../controllers/conversion.controller.js';

const router  = express.Router();



router.post('/add', addConversation)






export default router;