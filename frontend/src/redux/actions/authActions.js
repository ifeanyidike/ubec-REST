import axios from 'axios'
import {
    STUDENT_LOGIN_FAIL,
    STUDENT_LOGIN_LOADING,
    STUDENT_LOGIN_SUCCESS,
    TEACHER_LOGIN_FAIL,
    TEACHER_LOGIN_LOADING,
    TEACHER_LOGIN_SUCCESS,
    USER_LOGOUT
} from "../constants/authConstants"

const normalConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const loginStudent = (school, studentCode) => async (dispatch) => {
    try {
        dispatch({
            type: STUDENT_LOGIN_LOADING
        })

        const { data } = await axios.post('/api/auth/loginstudent',
            { school, studentCode }, normalConfig)

        dispatch({
            type: STUDENT_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('studentInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: STUDENT_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const loginTeacher = (school, username, teacherCode) => async (dispatch) => {
    try {
        dispatch({
            type: TEACHER_LOGIN_LOADING
        })
        console.log(school)
        const { data } = await axios.post('/api/auth/loginteacher',
            { school, username, teacherCode }, normalConfig)

        dispatch({
            type: TEACHER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('teacherInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: TEACHER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('studentInfo')
    localStorage.removeItem('teacherInfo')
    dispatch({
        type: USER_LOGOUT
    })
}