import express from 'express';
import {register,login}  from '../controllers/auth.controller.js';
import { keuanganList } from '../controllers/keuangan.controller.js';
import { guard } from '../middleware/guard.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)

router.get('/keuangan', [guard], keuanganList)



export default router;