const mongoose = require("mongoose")

const otpSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true
    },
    otp: {
        type: String,
        required: true
    },
    expireAt: {
        type: Date,
        required: true,
        index: {expires: 0}
    }
}, {timestamps: true})

const Otp = mongoose.model("Otp", otpSchema)

module.exports = Otp
