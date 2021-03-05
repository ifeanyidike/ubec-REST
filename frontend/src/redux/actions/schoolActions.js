import axios from 'axios'
import {
    CREATE_SCHOOL_FAIL,
    CREATE_SCHOOL_LOADING,
    CREATE_SCHOOL_SUCCESS,
    GET_SCHOOLS_FAIL,
    GET_SCHOOLS_LOADING,
    GET_SCHOOLS_SUCCESS,
    GET_SCHOOL_FAIL,
    GET_SCHOOL_LOADING,
    GET_SCHOOL_SUCCESS,
} from "../constants/schoolConstants"

const normalConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getSchools = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_SCHOOLS_LOADING
        })

        const { data } = await axios.get('/api/schools', normalConfig)

        dispatch({
            type: GET_SCHOOLS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_SCHOOLS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const getSchool = (_id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SCHOOL_LOADING
        })


        const { data } = await axios.get(`/api/schools/${_id}`, normalConfig)

        dispatch({
            type: GET_SCHOOL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_SCHOOL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}


export const createSchool = (schoolCode, schoolName) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_SCHOOL_LOADING
        })

        const { teacherLogin } = getState()
        const userInfo = teacherLogin.teacherInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/students`, { schoolCode, schoolName }, config)

        dispatch({
            type: CREATE_SCHOOL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_SCHOOL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


