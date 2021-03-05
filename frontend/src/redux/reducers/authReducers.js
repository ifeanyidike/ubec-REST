import {
    STUDENT_LOGIN_FAIL,
    STUDENT_LOGIN_LOADING,
    STUDENT_LOGIN_SUCCESS,
    TEACHER_LOGIN_FAIL,
    TEACHER_LOGIN_LOADING,
    TEACHER_LOGIN_SUCCESS,
    USER_LOGOUT
} from "../constants/authConstants"


export const studentLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case STUDENT_LOGIN_LOADING:
            return { loading: true }

        case STUDENT_LOGIN_SUCCESS:
            return { loading: false, studentInfo: action.payload }

        case STUDENT_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}


export const teacherLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case TEACHER_LOGIN_LOADING:
            return { loading: true }

        case TEACHER_LOGIN_SUCCESS:
            return { loading: false, teacherInfo: action.payload }

        case TEACHER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}