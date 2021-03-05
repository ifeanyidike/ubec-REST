import React, { useEffect } from 'react'
import { MainAreaContainer } from '../styles/MainDashboardStyles'
import MainDashboard from "../components/MainDashboard";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { getUserInfo } from '../utils/authUtilities';
import { GET_ASSESSMENT_BY_SUBJECT_RESET } from '../redux/constants/assessmentConstants'
import { GET_SUBJECT_BY_NAME_RESET } from '../redux/constants/subjectConstants';

const MainAreaPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { studentInfo } = useSelector(state => state.studentLogin)
    // const { loading, error, data } = useQuery(studentsLoginQuery)
    // const userInfo = getUserInfo(data)

    // LEA-8319BD

    useEffect(() => {
        dispatch({ type: GET_ASSESSMENT_BY_SUBJECT_RESET })
        dispatch({ type: GET_SUBJECT_BY_NAME_RESET })
    }, [dispatch])
    useEffect(() => {

        if (!studentInfo) {
            history.push('/')
        }
    }, [history, studentInfo])

    return (
        <MainAreaContainer>
            <h2>Hi {studentInfo && studentInfo.name}</h2>
            <p>What do you want to do?</p>
            <MainDashboard />
        </MainAreaContainer>
    )
}

export default MainAreaPage
