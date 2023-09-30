import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from "dotenv"
import express from 'express'
import mongoose from 'mongoose'

import homeRoute from "./routes/index.js"
import registration from './routes/registration.js'
import userModel from './routes/user.js'

dotenv.config()

const app = express()

app.use('/', homeRoute)
app.use('/user', userModel)

app.use('/auth', registration)

app.use(cors())
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => app.listen(PORT, () => console.log("listening to port ", PORT)))
    .catch((error) => console.log('error', error))