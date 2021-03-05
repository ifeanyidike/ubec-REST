import React, { useEffect } from 'react'
import { MainAreaContainer } from '../styles/MainDashboardStyles'
import MainDashboard from "../components/MainDashboard";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { getUserInfo } from '../utils/authUtilities';

const MainAreaPage = () => {
    const history = useHistory()
    const { loading, error, studentInfo } = useSelector(state => state.studentLogin)
    // const { loading, error, data } = useQuery(studentsLoginQuery)
    // const userInfo = getUserInfo(data)

    // LEA-8319BD
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
