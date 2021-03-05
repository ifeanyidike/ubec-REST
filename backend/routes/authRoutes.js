import express from 'express'
const router = express.Router()

import { studentsLogin, teachersLogin } from '../controllers/authControllers.js'

router.route('/loginteacher').post(teachersLogin)
router.route('/loginstudent').post(studentsLogin)

export default router