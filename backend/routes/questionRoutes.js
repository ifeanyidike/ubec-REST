import express from 'express'
const router = express.Router()

import {
    getAllAssessments,
    getAnAssessmentById,
    getAssessmentBySubject,
    createAssessment,
    addQuestions
} from '../controllers/questionControllers.js'

import { studentProtect, teacherProtect, userProtect } from '../middlewares/authMiddleware.js'

router.route('/').get(userProtect, getAllAssessments)
router.route('/subject/:subjectId').post(teacherProtect, createAssessment)
    .get(userProtect, getAssessmentBySubject)
router.route('/:_id').get(userProtect, getAnAssessmentById)
    .put(teacherProtect, addQuestions)


export default router