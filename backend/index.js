import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()

dotenv.config()

const PORT = process.env.PORT || 4000
const Database_URL = process.env.Database_UL

//mongoDB connection setup 
try {
    mongoose.connectDatabase_URL, {
        useNewUrlpraser: true,
        useUnifiedTopology: true
    }
    console.log("Databbase connectes successfully")
} catch (error) {
    console.error("Database connection failed", error)
}



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
