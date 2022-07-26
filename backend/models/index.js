import WargaModel from "./warga.model.js";
import KeuanganModel from "./keuangan.model.js";

WargaModel.hasMany(KeuanganModel)
KeuanganModel.belongsTo(WargaModel)

export {WargaModel, KeuanganModel}