import axios from 'axios'

import {
    CREATE_SUBJECT_FAIL,
    CREATE_SUBJECT_LOADING,
    CREATE_SUBJECT_SUCCESS,
    GET_SUBJECTS_FAIL,
    GET_SUBJECTS_LOADING,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECT_BY_NAME_FAIL,
    GET_SUBJECT_BY_NAME_LOADING,
    GET_SUBJECT_BY_NAME_SUCCESS,
    GET_SUBJECT_FAIL,
    GET_SUBJECT_LOADING,
    GET_SUBJECT_SUCCESS
} from '../constants/subjectConstants'

const normalConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getSubjects = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_SUBJECTS_LOADING
        })

        const { data } = await axios.get('/api/subjects', normalConfig)

        dispatch({
            type: GET_SUBJECTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_SUBJECTS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const getSubject = (_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_SUBJECT_LOADING
        })


        const { data } = await axios.get(`/api/subjects/${_id}`, normalConfig)

        dispatch({
            type: GET_SUBJECT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_SUBJECT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const createSubject = (name) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_SUBJECT_LOADING
        })

        const { teacherLogin } = getState()
        const userInfo = teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/students`, { name }, config)

        dispatch({
            type: CREATE_SUBJECT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_SUBJECT_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const getSubjectByName = (text) => async (dispatch, getState) => {

    try {
        dispatch({
            type: GET_SUBJECT_BY_NAME_LOADING
        })


        const { data } = await axios.get(`/api/subjects/byname/${text}`, normalConfig)

        dispatch({
            type: GET_SUBJECT_BY_NAME_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_SUBJECT_BY_NAME_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}