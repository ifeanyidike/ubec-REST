import express from 'express'
const router = express.Router()

import {
    getAllStudents,
    getAStudent,
    createStudent,
    updateStudent
} from '../controllers/studentControllers.js'

import { studentProtect, teacherProtect, userProtect } from '../middlewares/authMiddleware.js'

router.route('/').get(getAllStudents)
    .post(teacherProtect, createStudent)
router.route('/:_id').get(userProtect, getAStudent)
    .put(teacherProtect, updateStudent)

export default router