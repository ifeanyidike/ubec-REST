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

export const allSchoolsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHOOLS_LOADING:
            return { loading: true }

        case GET_SCHOOLS_SUCCESS:
            return { loading: false, schools: action.payload }

        case GET_SCHOOLS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const aSchoolReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SCHOOL_LOADING:
            return { loading: true }

        case GET_SCHOOL_SUCCESS:
            return { loading: false, school: action.payload }

        case GET_SCHOOL_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const createSchoolReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SCHOOL_LOADING:
            return { loading: true }

        case CREATE_SCHOOL_SUCCESS:
            return { loading: false, school: action.payload }

        case CREATE_SCHOOL_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}