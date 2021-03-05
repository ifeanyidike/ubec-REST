import axios from 'axios'
import {
    ADD_QUESTION_FAIL,
    ADD_QUESTION_LOADING,
    ADD_QUESTION_SUCCESS,
    CREATE_ASSESSMENT_FAIL,
    CREATE_ASSESSMENT_LOADING,
    CREATE_ASSESSMENT_SUCCESS,
    GET_ASSESSMENTS_FAIL,
    GET_ASSESSMENTS_LOADING,
    GET_ASSESSMENTS_SUCCESS,
    GET_ASSESSMENT_BY_SUBJECT_FAIL,
    GET_ASSESSMENT_BY_SUBJECT_LOADING,
    GET_ASSESSMENT_BY_SUBJECT_SUCCESS,
    GET_ASSESSMENT_FAIL,
    GET_ASSESSMENT_LOADING,
    GET_ASSESSMENT_SUCCESS
} from "../constants/assessmentConstants"

const normalConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getAllAssessments = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ASSESSMENTS_LOADING
        })

        const { teacherLogin, studentLogin } = getState()
        const userInfo = studentLogin.studentInfo || teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/assessments', config)

        dispatch({
            type: GET_ASSESSMENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ASSESSMENTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const getAssessment = (_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ASSESSMENT_LOADING
        })

        const { teacherLogin, studentLogin } = getState()
        const userInfo = studentLogin.studentInfo || teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/assessments/${_id}`, config)

        dispatch({
            type: GET_ASSESSMENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ASSESSMENT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const getAssessmentBySubject = (subjectId) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_ASSESSMENT_BY_SUBJECT_LOADING
        })

        const { teacherLogin, studentLogin } = getState()
        const userInfo = studentLogin.studentInfo || teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/assessments/subject/${subjectId}`, config)

        dispatch({
            type: GET_ASSESSMENT_BY_SUBJECT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_ASSESSMENT_BY_SUBJECT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const createAssessment = (subjectId) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ASSESSMENT_LOADING
        })

        const { teacherLogin } = getState()
        const userInfo = teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/assessments/subject/${subjectId}`, { subjectId }, config)

        dispatch({
            type: CREATE_ASSESSMENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_ASSESSMENT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const addQuestion = (questionObject) => async (dispatch, getState) => {

    // questionObject = $assessmentId: ID!, $question: String!, $options: [String!]!, $answer: String
    try {
        dispatch({
            type: ADD_QUESTION_LOADING
        })

        const { teacherLogin } = getState()
        const userInfo = teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const assessmentId = questionObject.assessmentId

        const { data } = await axios.put(`/api/assessments/${assessmentId}`, questionObject, config)

        dispatch({
            type: ADD_QUESTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_QUESTION_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}