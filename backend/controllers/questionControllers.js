import Question from "../models/questionModels.js"
import Subject from "../models/subjectModels.js"
import asyncHandler from 'express-async-handler'

export const getAllAssessments = asyncHandler(async (req, res) => {
    const questions = await Question.find({})
    if (questions) {
        res.send(questions)
    } else {
        throw new Error('No question found')
    }
})

export const getAnAssessmentById = asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params._id)
    if (question) {
        res.send(question)
    } else {
        throw new Error('No question found')
    }
})


export const getAssessmentBySubject = asyncHandler(async (req, res) => {
    const question = await Question.findOne({ subject: req.params.subjectId })
    if (question) {
        res.send(question)
    } else {
        throw new Error('No question found')
    }
})

export const createAssessment = asyncHandler(async (req, res) => {
    const subject = await Subject.findById(req.params.subjectId)

    if (subject) {
        const question = new Question({
            subject: req.params.subjectId,
            questions: []
        })
        const createdQuestion = await question.save()
        res.send(createdQuestion)

    } else {
        throw new Error('The subject does not exist')
    }
})

export const addQuestions = asyncHandler(async (req, res) => {
    const assessment = await Question.findById(req.params._id)
    const { question, options, answer } = req.body
    if (assessment) {
        const entry = {
            question,
            options,
            answer
        }

        assessment.questions.push(entry)

        const updatedAssessment = await assessment.save()
        res.send(updatedAssessment)

    } else {
        throw new Error('The assessment does not exist')
    }
})
