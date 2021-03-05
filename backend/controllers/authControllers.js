import School from '../models/schoolModels.js'
import Student from '../models/studentModels.js'
import Teacher from '../models/teacherModels.js'
import { generateToken } from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler'

export const studentsLogin = asyncHandler(async (req, res) => {
    const { school, studentCode } = req.body

    const student = await Student.findOne({ studentCode })
    // const school = await School.findById(school)

    if (JSON.stringify(student.school) !== JSON.stringify(school)) {
        throw new Error("No such school in the database")
    }

    if (student) {
        res.json({
            _id: student._id,
            name: student.name,
            school: student.school,
            age: student.age,
            sex: student.sex,
            class: student.class,
            subjects: student.subjects,
            token: generateToken(student._id, process.env.JWT_SECRET, '3d')
        })
    } else {
        throw new Error('Incorrect student code')
    }
})


export const teachersLogin = asyncHandler(async (req, res) => {
    const { school, username, teacherCode } = req.body

    const teacher = await Teacher.findOne({ username })

    if (!teacher) {
        throw new Error('Teacher does not exist')
    }

    if (teacher && (JSON.stringify(teacher.school) !== JSON.stringify(school))) {
        throw new Error('School is incorrect')
    }

    if (teacher && (await teacher.matchPassword(teacherCode))) {
        res.json({
            _id: teacher._id,
            name: teacher.name,
            username: teacher.username,
            school: teacher.school,
            class: teacher.class,
            subjects: teacher.subjects,
            token: generateToken(teacher._id, process.env.JWT_SECRET, '3d')
        })
    } else {
        throw new Error('Incorrect teacher code')
    }

})
