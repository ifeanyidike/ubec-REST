import axios from 'axios'
import {
    CREATE_TEACHER_FAIL,
    CREATE_TEACHER_LOADING,
    CREATE_TEACHER_SUCCESS,
    GET_TEACHERS_FAIL,
    GET_TEACHERS_LOADING,
    GET_TEACHERS_SUCCESS,
    GET_TEACHER_FAIL,
    GET_TEACHER_LOADING,
    GET_TEACHER_SUCCESS,
    UPDATE_TEACHER_FAIL,
    UPDATE_TEACHER_LOADING,
    UPDATE_TEACHER_SUCCESS,

} from "../constants/teacherConstants"

const normalConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getTeachers = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_TEACHERS_LOADING
        })

        const { data } = await axios.get('/api/teachers', normalConfig)

        dispatch({
            type: GET_TEACHERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_TEACHERS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const getTeacher = (_id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_TEACHER_LOADING
        })


        const { data } = await axios.get(`/api/teachers/${_id}`, normalConfig)

        dispatch({
            type: GET_TEACHER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_TEACHER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const createTeacher = (teacherDetails) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_TEACHER_LOADING
        })

        const { data } = await axios.post(`/api/teachers`, teacherDetails, normalConfig)

        dispatch({
            type: CREATE_TEACHER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_TEACHER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const updateTeacher = (teacherDetails) => async (dispatch) => {

    try {
        dispatch({
            type: UPDATE_TEACHER_LOADING
        })

        const _id = teacherDetails._id

        const { data } = await axios.post(`/api/teachers/${_id}`, teacherDetails, normalConfig)

        dispatch({
            type: UPDATE_TEACHER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_TEACHER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}