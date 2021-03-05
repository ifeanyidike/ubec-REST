import express from 'express'
const router = express.Router()

import {
    getAllSubjects,
    getASubject,
    getSubjectByName,
    createSubject
} from '../controllers/subjectControllers.js'

import { studentProtect, teacherProtect, userProtect } from '../middlewares/authMiddleware.js'

router.route('/').get(getAllSubjects)
    .post(teacherProtect, createSubject)
router.route('/byname/:name').get(getSubjectByName)
router.route('/:_id').get(getASubject)


export default router