import School from '../models/schoolModels.js'
import Student from '../models/studentModels.js'
import Subject from '../models/subjectModels.js'

export const getAllStudents = async (req, res) => {
    const students = await Student.find({})

    if (students) {
        res.send(students)
    } else {
        throw new Error('Students not found')
    }
}

export const getAStudent = async (req, res) => {
    const student = await Student.findById(req.params._id)

    if (student) {
        res.send(student)
    } else {
        throw new Error('Student not found')
    }
}

export const createStudent = async (req, res) => {
    const { school, name, age, sex, class: studentClass, studentCode, subjects } = req.body
    const schoolObj = await School.findById(school)
    const existStudent = await Student.findOne({ studentCode })

    if (existStudent) {
        throw new Error('Student already exists')
    }

    if (!schoolObj) {
        throw new Error('School does not exist')
    }

    const student = new Student({
        school,
        name,
        age,
        sex,
        class: studentClass,
        studentCode,
        subjects
    })
    const createdStudent = await student.save()
    res.send(createdStudent)
}

export const updateStudent = async (req, res) => {
    const { school, name, sex, age, class: studentClass, studentCode, subjects } = req.body
    const student = await Student.findById(req.params._id)

    if (school) {
        const schoolObj = await School.findById(school)

        if (!schoolObj) {
            throw new Error('School does not exist')
        }
    }

    if (student) {
        student.school = school || student.school
        student.name = name || student.name
        student.age = age || student.age
        student.sex = sex || student.sex
        student.class = studentClass || student.class
        student.studentClass = studentCode || student.studentCode
        student.subjects = subjects || student.subjects
    } else {
        throw new Error("Student not found")
    }

    const updatedStudent = await student.save()
    res.send(updatedStudent)
}

