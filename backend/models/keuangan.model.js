import { DataTypes, Model } from "sequelize";

import db from '../config/db.config.js'

export default class KeuanganModel extends Model {}

KeuanganModel.init({
    nama:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    tglBayar:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    nominal:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
}, {
    sequelize:db,
    freezeTableName:true,
    underscored:true,
    timestamps:false,
    modelName:'keuangan'
})