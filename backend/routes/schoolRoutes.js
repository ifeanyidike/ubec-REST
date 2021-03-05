import express from 'express'
const router = express.Router()

import {
    getAllSchools,
    getASchool,
    createSchool
} from '../controllers/schoolControllers.js'

import { studentProtect, teacherProtect, userProtect } from '../middlewares/authMiddleware.js'

router.route('/').get(getAllSchools)
    .post(teacherProtect, createSchool)
router.route('/:_id').get(getASchool)

export default router