import { WargaModel } from "../models/index.js";
import Bcrypt from 'bcrypt';
import Joi from "joi";
import Jwt from 'jsonwebtoken';
import jwtConfig from "../config/jwt.config.js";

const register = async (req,res) => {
    try {
        const {body} = req;

        // if(body.nikk === 'undefined') {
        //     return res.status(400)
        //     .json({
        //         status:400,
        //         message:'maaf nikk kosong'
        //     })
        // }

        const wargaValidation = Joi.object().keys({
            nama:Joi.string().required(),
            nikk: Joi.string().required(),
            contact:Joi.string().required(),
            alamatKtp: Joi.string().required(),
            pekerjaan:Joi.string().required(),
            email:Joi.string().required(),
            password:Joi.string().required()
        })

        const {error, value} = wargaValidation.validate(body)

        if (error){
            return res.status(400)
            .json({
                status:400,
                message:'sorry, validasi gagal, periksa kembali data anda'
            })
        }

        const data = {
            ...value,
            password: await Bcrypt.hash(body.password,10)
        }

        await WargaModel.create(data);

        return res.status(201)
        .json({
            status:201,
            message:'sudah berhasil register'
        })


    } catch (error) {
        return res.status(500)
        .json({
            status:500,
            message:'Kesalahan server'
    })
    }
}

const login = async (req, res) => {
    try {
       const {body} = req;
       
       const warga = await WargaModel.findOne({
        where: {nama:body.nama}
    })

    if (warga) {
        const valid = await Bcrypt.compare(body.password, warga.password)
  
        if(valid) {
            const token = Jwt.sign({
                id:warga.id,
                name: warga.nama
            },jwtConfig.secret, {
                algorithm:"HS256",
                expiresIn:jwtConfig.expiresIn
            })
            return res.status(200)
            .json({
                status:200,
                message:'ok',
                result: {
                    name: warga.nama,
                    token:token
                }
            })
        }
        return res.status(401)
        .json({
            status:401,
            message:'sorry, password is wrong'
        })
    }

        return res.status(404)
        .json({
            status:404,
            message:'sorry, user not found'
        })
    
    } catch (error) {
        return res.status(500)
        .json({
            status:500,
            message:'Kesalahan server'
    })
    }
}

export {register, login}

