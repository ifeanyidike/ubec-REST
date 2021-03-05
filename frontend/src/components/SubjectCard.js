import React, { useState, useEffect } from 'react'
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { SubjectPane } from '../styles/TestSubjectStyles';
import { useHistory } from 'react-router-dom'
import Loader from "../components/Progress"
import { useDispatch, useSelector } from 'react-redux'
import { getSubjectByName } from '../redux/actions/subjectActions';
import { GET_ASSESSMENT_BY_SUBJECT_RESET } from '../redux/constants/assessmentConstants';
import { GET_SUBJECT_BY_NAME_RESET } from '../redux/constants/subjectConstants';

const SubjectCard = ({ text, id }) => {
    const history = useHistory()
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()

    const handleSubjectClick = () => {
        dispatch(getSubjectByName(text))
    }

    const subjectByName = useSelector(state => state.subjectByName)
    const { loading: subjectByNameLoading,
        error: subjectByNameError,
        subject } = subjectByName

    useEffect(() => {
        dispatch({ type: GET_ASSESSMENT_BY_SUBJECT_RESET })
        dispatch({ type: GET_SUBJECT_BY_NAME_RESET })
    }, [dispatch])


    useEffect(() => {
        if (subject) {
            history.push(`/testpane/?subjectId=${subject._id}`)
        } else {
            return
        }
    }, [history, subject])

    return (
        <SubjectPane onClick={handleSubjectClick}>
            {subjectByNameLoading && <Loader />}

            <span>{text}</span>
            <BeenhereIcon fontSize='large' style={{ display: checked ? 'block' : 'none' }} />


        </SubjectPane>
    )
}

export default SubjectCard
