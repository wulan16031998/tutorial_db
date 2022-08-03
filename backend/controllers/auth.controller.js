import { WargaModel } from "../models/index.js";
import Bcrypt from 'bcrypt';
import Joi from "joi";
import Jwt from 'jsonwebtoken';
import jwtConfig from "../config/jwt.config.js";

const register = async (req,res) => {
    try {
        const {body} = req;

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
                message:'sorry, validation fail, check your data again',
                error:error

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
        console.log(warga)
        const valid = await Bcrypt.compare(body.password, warga.password)
        console.log(valid)
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
            message:'server error'
    })
    }
}

// const login = async (req, res) => {
//     try {
  
//       const {body} = req;
//       const wargaValidation = Joi
//         .object()
//         .keys({
//           nama: Joi.string().required(),
//           password: Joi.string().required()
//         })
  
//       const {error} = wargaValidation.validate(body)
  
//       if (error) {
//         return res.status(422)
//           .json({
//             status: 422,
//             message: "Request yang anda masukan salah atau tidak benar!",
//             result: error.message
//           })
//       }
  
//       // cari email yang di request
//       const wargaIsFound = await WargaModel.findOne({where: {nama: body.nama}})
  
//       // jika email ditemukan
//       if (wargaIsFound) {
  
//         // lakukan pengecekan decrypt dari request password dan password yang ada didalam database
//         const valid = await Bcrypt.compare(body.password, wargaIsFound.password)
      
//         // jika valid
//         if (valid) {
//           // generate jwt token, assign expire selama 1 jam
//           const token = Jwt.sign({
//             id: wargaIsFound.id,
//             name: wargaIsFound.nama,
//           }, jwtConfig.secret, {
//             algorithm: "HS256",
//             expiresIn: jwtConfig.expiresIn,
//           })
  
//           return res.status(200)
//             .json({
//               status: 200,
//               message: 'OK',
//               result: {
//                 name: wargaIsFound.nama,
//                 token: token
//               }
//             })
//         }
  
//         // jika pengecekan password gagal
//         return res.status(400)
//           .json({
//             status: 400,
//             message: 'Mohon maaf password salah!'
//           })
  
//       }
  
    
  
//     } catch (e) {
//       console.log(e)
//       return res.status(500)
//         .json({
//           status: 500,
//           message: "Kesalahan server!."
//         })
//     }
//   }
export {register, login}

