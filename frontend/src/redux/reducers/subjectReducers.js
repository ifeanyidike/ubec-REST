import {
    CREATE_SUBJECT_FAIL,
    CREATE_SUBJECT_LOADING,
    CREATE_SUBJECT_SUCCESS,
    GET_SUBJECTS_FAIL,
    GET_SUBJECTS_LOADING,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECT_BY_NAME_FAIL,
    GET_SUBJECT_BY_NAME_LOADING,
    GET_SUBJECT_BY_NAME_RESET,
    GET_SUBJECT_BY_NAME_SUCCESS,
    GET_SUBJECT_FAIL,
    GET_SUBJECT_LOADING,
    GET_SUBJECT_SUCCESS
} from '../constants/subjectConstants'

export const allSubjectsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SUBJECTS_LOADING:
            return { loading: true }

        case GET_SUBJECTS_SUCCESS:
            return { loading: false, subjects: action.payload }

        case GET_SUBJECTS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const aSubjectReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SUBJECT_LOADING:
            return { loading: true }

        case GET_SUBJECT_SUCCESS:
            return { loading: false, subject: action.payload }

        case GET_SUBJECT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const createSubjectReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SUBJECT_LOADING:
            return { loading: true }

        case CREATE_SUBJECT_SUCCESS:
            return { loading: false, subject: action.payload }

        case CREATE_SUBJECT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const subjectByNameReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SUBJECT_BY_NAME_LOADING:
            return { loading: true }

        case GET_SUBJECT_BY_NAME_SUCCESS:
            return { loading: false, subject: action.payload }

        case GET_SUBJECT_BY_NAME_FAIL:
            return { loading: false, error: action.payload }

        case GET_SUBJECT_BY_NAME_RESET:
            return {}

        default:
            return state
    }
}