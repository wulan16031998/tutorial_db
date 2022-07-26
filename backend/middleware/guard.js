import Jwt from 'jsonwebtoken';
import JwtConfig from '../config/jwt.config.js'

export const guard = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['authorization']?.slice(7)
    
    if(!token ) {
        return res.status(401)
        .json({
            status:401,
            message:'Token tidak ada'
        }) 
    }

    try {
        req.warga = Jwt.verify(token, JwtConfig.secret);
    } catch (e) {
        return res.status(401)
        .json({
            status:401,
            message:'token expired or not available'
        })
    }
    return next();
}