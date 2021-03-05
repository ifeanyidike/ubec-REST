import {
    ADD_QUESTION_FAIL,
    ADD_QUESTION_LOADING,
    ADD_QUESTION_SUCCESS,
    CREATE_ASSESSMENT_FAIL,
    CREATE_ASSESSMENT_LOADING,
    CREATE_ASSESSMENT_SUCCESS,
    GET_ASSESSMENTS_FAIL,
    GET_ASSESSMENTS_LOADING,
    GET_ASSESSMENTS_SUCCESS,
    GET_ASSESSMENT_BY_SUBJECT_FAIL,
    GET_ASSESSMENT_BY_SUBJECT_LOADING,
    GET_ASSESSMENT_BY_SUBJECT_RESET,
    GET_ASSESSMENT_BY_SUBJECT_SUCCESS,
    GET_ASSESSMENT_FAIL,
    GET_ASSESSMENT_LOADING,
    GET_ASSESSMENT_SUCCESS
} from "../constants/assessmentConstants"

export const allAssessmentsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ASSESSMENTS_LOADING:
            return { loading: true }

        case GET_ASSESSMENTS_SUCCESS:
            return { loading: false, assessments: action.payload }

        case GET_ASSESSMENTS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const anAssessmentReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ASSESSMENT_LOADING:
            return { loading: true }

        case GET_ASSESSMENT_SUCCESS:
            return { loading: false, assessment: action.payload }

        case GET_ASSESSMENT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const assessmentBySubjectReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ASSESSMENT_BY_SUBJECT_LOADING:
            return { loading: true }

        case GET_ASSESSMENT_BY_SUBJECT_SUCCESS:
            return { loading: false, assessment: action.payload }

        case GET_ASSESSMENT_BY_SUBJECT_FAIL:
            return { loading: false, error: action.payload }

        case GET_ASSESSMENT_BY_SUBJECT_RESET:
            return {}

        default:
            return state
    }
}

export const createAssessmentReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ASSESSMENT_LOADING:
            return { loading: true }

        case CREATE_ASSESSMENT_SUCCESS:
            return { loading: false, assessment: action.payload }

        case CREATE_ASSESSMENT_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const addQuestionReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION_LOADING:
            return { loading: true }

        case ADD_QUESTION_SUCCESS:
            return { loading: false, question: action.payload }

        case ADD_QUESTION_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}