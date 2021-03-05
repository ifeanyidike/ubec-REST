import React, { useState, useEffect } from 'react'
import SubjectCard from '../components/SubjectCard'
import { SubjectsContainer } from '../styles/TestSubjectStyles'
import { useDispatch, useSelector } from 'react-redux'
import { subjects } from "../utils/authjson"
import DialogMessage from '../components/DialogMessage'
import { GET_ASSESSMENT_BY_SUBJECT_RESET } from '../redux/constants/assessmentConstants'

const SubjectsPage = () => {
    const { studentInfo } = useSelector(state => state.studentLogin)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const { error: subjectByNameError } = useSelector(state => state.subjectByName)

    useEffect(() => {
        dispatch({ type: GET_ASSESSMENT_BY_SUBJECT_RESET })
    }, [dispatch])

    useEffect(() => {
        if (subjectByNameError) {
            setOpen(true)
        }

        return () => { }

    }, [subjectByNameError])

    return (
        <SubjectsContainer>

            { studentInfo.subjects.map((subject, index) =>

                <SubjectCard
                    key={index}
                    text={subject}
                />
            )}

            <DialogMessage
                title='An Error Occurred'
                open={open}
                setOpen={setOpen}
                back={true}
            >{subjectByNameError}</DialogMessage>
        </SubjectsContainer>
    )
}

export default SubjectsPage
