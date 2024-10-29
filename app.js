// import http from "http";
// import { URL } from "url";
import express from 'express'
import dotenv from 'dotenv'


dotenv.config()

const PORT = process.env.PORT || 6000

const app = express()



app.listen(PORT, () => {
    console.log(`Server running at  ${PORT}`)
})