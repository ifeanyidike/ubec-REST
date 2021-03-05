import express from 'express'
const router = express.Router()

import {
    getAllTeachers,
    getATeacher,
    createTeacher,
    updateTeacher
} from '../controllers/teacherControllers.js'

import { studentProtect, teacherProtect, userProtect } from '../middlewares/authMiddleware.js'

router.route('/').get(getAllTeachers)
    .post(createTeacher)
router.route('/:_id').get(getATeacher)
    .put(updateTeacher)

export default router