const express = require("express")
const dotnev = require("dotenv")
const cronJob = require("./cronJobs/cron")
const { connectDB } = require("./cronJobs/config/db")

dotnev.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req,res)=>{
    res.send("Home Page !") 
}) 

app.listen(PORT, ()=>{
    console.log(`App is running on PORT: ${PORT}`)
})