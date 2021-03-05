import fs from 'fs'
import path from 'path'
import express from "express"
import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import authRoutes from './routes/authRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import schoolRoutes from './routes/schoolRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import subjectRoutes from './routes/subjectRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js"

//configure environment variables
dotenv.config()

//connect database
connectDatabase()

const app = express()
app.use(express.json())

// Routes here
app.use('/api/auth', authRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/schools', schoolRoutes)
app.use('/api/assessments', questionRoutes)
app.use('/api/subjects', subjectRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')))
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )

} else {
    app.get("/", (req, res) => {
        res.send("API is running");
    });

}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT,
    console.log(`Server running on ${process.env.NODE_ENV} mode or port ${PORT}`))