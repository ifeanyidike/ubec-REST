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

export const allTeachersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TEACHERS_LOADING:
            return { loading: true }

        case GET_TEACHERS_SUCCESS:
            return { loading: false, stuents: action.payload }

        case GET_TEACHERS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const aTeacherReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TEACHER_LOADING:
            return { loading: true }

        case GET_TEACHER_SUCCESS:
            return { loading: false, teacher: action.payload }

        case GET_TEACHER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const createTeacherReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TEACHER_LOADING:
            return { loading: true }

        case CREATE_TEACHER_SUCCESS:
            return { loading: false, teacher: action.payload }

        case CREATE_TEACHER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const updateTeacherReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_TEACHER_LOADING:
            return { loading: true }

        case UPDATE_TEACHER_SUCCESS:
            return { loading: false, teacher: action.payload }

        case UPDATE_TEACHER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}