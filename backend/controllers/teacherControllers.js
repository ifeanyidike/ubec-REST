import School from '../models/schoolModels.js'
import Teacher from '../models/teacherModels.js'
import Subject from '../models/subjectModels.js'
import asyncHandler from 'express-async-handler'

export const getAllTeachers = asyncHandler(async (req, res) => {
    const teachers = await Teacher.find({})
    if (teachers) {
        res.send(teachers)
    } else {
        throw new Error("Teachers not found")
    }
})

export const getATeacher = asyncHandler(async (req, res) => {
    const teacher = await Teacher.findById(req.params._id)

    if (teacher) {
        res.send(teacher)
    } else {
        throw new Error("Teacher not found")
    }
})

export const createTeacher = asyncHandler(async (req, res) => {
    const { school, name, username, class: teacherClass, teacherCode, subjects } = req.body
    const schoolObj = await School.findById(school)

    if (!schoolObj) {
        throw new Error('School does not exist')
    }

    const teacher = new Teacher({
        school,
        name,
        username,
        class: teacherClass,
        teacherCode,
        subjects
    })
    const createdTeacher = await teacher.save()
    res.send(createdTeacher)
})

export const updateTeacher = asyncHandler(async (req, res) => {
    const { _id, school, name, username, class: teacherClass, teacherCode, subjects } = req.body
    const teacher = await Teacher.findById(_id)

    if (school) {
        const schoolObj = await School.findById(school)

        if (!schoolObj) {
            throw new Error('School does not exist')
        }
    }

    if (teacher) {
        teacher.school = school || teacher.school
        teacher.name = name || teacher.name
        teacher.username = username || teacher.username
        teacher.class = teacherClass || teacher.class
        teacher.teacherClass = teacherCode || teacher.teacherCode
        teacher.subjects = subjects || teacher.subjects
    } else {
        throw new Error("Teacher not found")
    }

    const updatedTeacher = await teacher.save()
    res.send(updatedTeacher)
})
