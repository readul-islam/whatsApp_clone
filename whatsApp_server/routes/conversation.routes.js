import express from 'express';
import { addConversation, getConversationById } from '../controllers/conversion.controller.js';

const router  = express.Router();



router.post('/add', addConversation)
router.get('/my-conversation', getConversationById)






export default router;