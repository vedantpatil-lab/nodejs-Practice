const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vedant.patil@nimapinfotech.com",
        pass: process.env.APP_PASSWORD
    }
})

exports.sendMail = (to, subject, body)=>{
    const mailOptions = {
        from : "vedant.patil@nimapinfotech.com",
        to,
        subject,
        text: body
    }

    transport.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.error("Error in sendMail", err)
        }else{
            console.log("Email sent !", info.response)
        }
    })
}