import { combineReducers } from 'redux'

import { userLoginReducer } from './userReducers'

import {
    resultSetReducer,
    inCorrectResultSetReducer,
    correctResultSetReducer
} from './resultReducers'

import { teacherLoginReducer, studentLoginReducer } from './authReducers'
import {
    allAssessmentsReducer,
    anAssessmentReducer,
    assessmentBySubjectReducer,
    createAssessmentReducer,
    addQuestionReducer
} from "./assessmentReducers";

import {
    allStudentsReducer,
    aStudentReducer,
    createStudentReducer,
    updateStudentReducer
} from "./studentReducers";

import {
    allTeachersReducer,
    aTeacherReducer,
    createTeacherReducer,
    updateTeacherReducer
} from "./teacherReducers";

import {
    allSubjectsReducer,
    aSubjectReducer,
    createSubjectReducer,
    subjectByNameReducer
} from "./subjectReducers";

import {
    allSchoolsReducer,
    aSchoolReducer,
    createSchoolReducer
} from './schoolReducers'

import { drawerToggleReducer } from './utilReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    drawerToggle: drawerToggleReducer,
    resultSet: resultSetReducer,
    inCorrectResultSet: inCorrectResultSetReducer,
    correctResultSet: correctResultSetReducer,

    //subject
    allSubjects: allSubjectsReducer,
    aSubject: aSubjectReducer,
    createSubject: createSubjectReducer,
    subjectByName: subjectByNameReducer,

    //school
    allSchools: allSchoolsReducer,
    aSchool: aSchoolReducer,
    createSchool: createSchoolReducer,

    //student
    allStudents: allStudentsReducer,
    aStudent: aStudentReducer,
    createStudent: createStudentReducer,
    updateStudent: updateStudentReducer,

    //teacher
    allTeachers: allTeachersReducer,
    aTeacher: aTeacherReducer,
    createTeacher: createTeacherReducer,
    updateTeacher: updateTeacherReducer,

    //assessment
    allAssessments: allAssessmentsReducer,
    anAssessment: anAssessmentReducer,
    assessmentBySubject: assessmentBySubjectReducer,
    createAssessment: createAssessmentReducer,
    addQuestion: addQuestionReducer,

    //auth
    teacherLogin: teacherLoginReducer,
    studentLogin: studentLoginReducer
})

export default reducer