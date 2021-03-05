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

export const allStudentsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_STUDENTS_LOADING:
            return { loading: true }

        case GET_STUDENTS_SUCCESS:
            return { loading: false, stuents: action.payload }

        case GET_STUDENTS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const aStudentReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_STUDENT_LOADING:
            return { loading: true }

        case GET_STUDENT_SUCCESS:
            return { loading: false, student: action.payload }

        case GET_STUDENT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const createStudentReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_STUDENT_LOADING:
            return { loading: true }

        case CREATE_STUDENT_SUCCESS:
            return { loading: false, student: action.payload }

        case CREATE_STUDENT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const updateStudentReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_STUDENT_LOADING:
            return { loading: true }

        case UPDATE_STUDENT_SUCCESS:
            return { loading: false, student: action.payload }

        case UPDATE_STUDENT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}