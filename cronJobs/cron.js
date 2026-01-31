// const cron = require("node-cron")
// const { sendMail } = require("./utils/sendEmail")

// // cron.schedule("* * * * *", ()=>{
// //     console.log("Cron job is running !!")
// // })

// cron.schedule("* * * * *", ()=>{
//     const to = "vedant.patil@nimapinfotech.com"
//     const subject = "Cron Job Check"
//     const body = "The mail is for checking cron jobs"

//     sendMail(to, subject, body)
//     console.log("mail sent")
// })

// cron.schedule(
//   "0 9 * * *",
//   () => {
//     sendReport();
//   },
//   {
//     timezone: "Asia/Kolkata"
//   }
// );

// cron.schedule("* * * * *", async () => {
//   try {
//     await sendEmail();
//   } catch (err) {
//     console.error("Cron failed:", err);
//   }
// });

// async function retry(fn, retries = 3) {
//   while (retries--) {
//     try {
//       return await fn();
//     } catch (err) {
//       if (retries === 0) throw err;
//     }
//   }
// }

// cron.schedule("*/5 * * * *", async () => {
//   await retry(() => sendEmail());
// });

// cron.schedule("0 10 * * *", async () => {
//   await subscriptionService.sendExpiryReminders();
// });

