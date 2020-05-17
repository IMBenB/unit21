const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Man = new Schema(
    {
        name: { type: String },
        seekObus: { type: String},
        list: { type: Array},
        photo: { type: String},
        city: { type: String },
        area: { type: String },
        platoon: { type: String },
        email: { type: String },
        phoneNumber: {type:Number},
        link:{type:String}
    },

    { timestamps: true },
)

module.exports = mongoose.model('Man', Man)