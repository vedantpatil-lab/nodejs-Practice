const cron = require("node-cron")
const { sendMail } = require("./utils/sendEmail")

// cron.schedule("* * * * *", ()=>{
//     console.log("Cron job is running !!")
// })

cron.schedule("* * * * *", ()=>{
    const to = "vedant.patil@nimapinfotech.com"
    const subject = "Cron Job Check"
    const body = "The mail is for checking cron jobs"

    sendMail(to, subject, body)
    console.log("mail sent")
})

