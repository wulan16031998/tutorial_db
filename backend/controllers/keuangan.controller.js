import { KeuanganModel } from "../models/index.js";

export const keuanganList = async (req, res) => {
try {
    const keuangans = await KeuanganModel.findAll();

    return res.status(200)
    .json({
        status:200,
        message:'berhasil ambil keuangan',
        result: keuangans
    })
} catch (error) {
    return res.status(500)
    .json({
        status:500,
        message:'kesalahan server'
    })
}
}