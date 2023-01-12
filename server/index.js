import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import postRoute from './routes/posts.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

// Routes
// http://localhost:3002
app.use('/api/posts', postRoute)

async function start() {
    try {
        await mongoose.connect(
        'mongodb+srv://oleksii_ivanichok:user1234@cluster0.jt5mqhb.mongodb.net/?retryWrites=true&w=majority',
        )

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()
