import axios from 'axios'
import {
    CREATE_STUDENT_FAIL,
    CREATE_STUDENT_LOADING,
    CREATE_STUDENT_SUCCESS,
    GET_STUDENTS_FAIL,
    GET_STUDENTS_LOADING,
    GET_STUDENTS_SUCCESS,
    GET_STUDENT_FAIL,
    GET_STUDENT_LOADING,
    GET_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_LOADING,
    UPDATE_STUDENT_SUCCESS,

} from "../constants/studentConstants"

const normalConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getStudents = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_STUDENTS_LOADING
        })

        const { data } = await axios.get('/api/students', normalConfig)

        dispatch({
            type: GET_STUDENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_STUDENTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const getStudent = (_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_STUDENT_LOADING
        })

        const { teacherLogin, studentLogin } = getState()
        const userInfo = studentLogin.studentInfo || teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/students/${_id}`, config)

        dispatch({
            type: GET_STUDENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_STUDENT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const createStudent = (studentDetails) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_STUDENT_LOADING
        })

        const { teacherLogin } = getState()
        const userInfo = teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/students`, studentDetails, config)

        dispatch({
            type: CREATE_STUDENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_STUDENT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const updateStudent = (studentDetails) => async (dispatch, getState) => {

    try {
        dispatch({
            type: UPDATE_STUDENT_LOADING
        })

        const { teacherLogin } = getState()
        const userInfo = teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const _id = studentDetails._id

        const { data } = await axios.post(`/api/students/${_id}`, studentDetails, config)

        dispatch({
            type: UPDATE_STUDENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_STUDENT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}