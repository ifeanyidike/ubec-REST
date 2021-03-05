import React, { useEffect } from 'react'
import { MainAreaContainer } from '../styles/MainDashboardStyles'
import MainDashboard from "../components/TeacherMainDashboard";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { getUserInfo } from '../utils/authUtilities';

const TeacherMainAreaPage = () => {
    const history = useHistory()
    const { loading, error, teacherInfo } = useSelector(state => state.teacherLogin)
    // const { loading, error, data } = useQuery(studentsLoginQuery)
    // const userInfo = getUserInfo(data)

    // LEA-8319BD
    useEffect(() => {

        if (!teacherInfo) {
            history.push('/')
        }
    }, [history, teacherInfo])

    return (
        <MainAreaContainer>
            <h2>Hi {teacherInfo && teacherInfo.name}</h2>
            <p>What do you want to do?</p>
            <MainDashboard />
        </MainAreaContainer>
    )
}

export default TeacherMainAreaPage
