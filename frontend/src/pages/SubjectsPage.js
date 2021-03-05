import React from 'react'
import SubjectCard from '../components/SubjectCard'
import { SubjectsContainer } from '../styles/TestSubjectStyles'
import { useSelector } from 'react-redux'
import { subjects } from "../utils/authjson"

const SubjectsPage = () => {
    const { studentInfo } = useSelector(state => state.studentLogin)


    return (
        <SubjectsContainer>

            { studentInfo.subjects.map((subject, index) =>

                <SubjectCard
                    key={index}
                    text={subject}
                />
            )}

        </SubjectsContainer>
    )
}

export default SubjectsPage
