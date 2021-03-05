import Subject from "../models/subjectModels.js"
import asyncHandler from 'express-async-handler'

export const getAllSubjects = asyncHandler(async (req, res) => {
    const subjects = await Subject.find({})
    if (subjects) {
        res.send(subjects)
    } else {
        throw new Error("Subjects not found")
    }
})

export const getASubject = asyncHandler(async (req, res) => {
    const subject = await Subject.findById(req.params._id)

    if (subject) {
        res.send(subject)
    } else {
        throw new Error("Subject not found")
    }
})

export const getSubjectByName = asyncHandler(async (req, res) => {
    const name = req.params.name
    const subject = await Subject.findOne({ name })

    if (subject) {
        res.send(subject)
    } else {
        throw new Error("Subject not found")
    }
})


export const createSubject = async (req, res) => {
    const { name } = req.body
    const subject = new Subject({
        name
    })
    const createdSubject = await subject.save()
    res.send(createdSubject)
}
