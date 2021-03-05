import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import reducer from "./reducers/rootReducer"

const studentInfoFromStorage = localStorage.getItem("studentInfo")
    ? JSON.parse(localStorage.getItem("studentInfo")) : null

const teacherInfoFromStorage = localStorage.getItem("teacherInfo")
    ? JSON.parse(localStorage.getItem("teacherInfo")) : null

const initialState = {
    studentLogin: { studentInfo: studentInfoFromStorage },
    teacherLogin: { teacherInfo: teacherInfoFromStorage }
}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    ))

export default store