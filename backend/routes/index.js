import express from 'express';
import {register,login}  from '../controllers/auth.controller.js';
import { guard } from '../middleware/guard.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)

router.get('/test', [guard], async(req,res) => {
    const data = [
        'ini',
        'adalah',
        'private'
    ];
    return res.status(200)
    .json({
        status:200,
        message:'ok'
    })
})

export default router;