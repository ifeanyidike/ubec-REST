import React, { useState, useEffect } from 'react'
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { SubjectPane } from '../styles/TestSubjectStyles';
import { useHistory } from 'react-router-dom'
import Loader from "../components/Progress"
import DialogMessage from '../components/DialogMessage'
import { useDispatch, useSelector } from 'react-redux'
import { getSubjectByName } from '../redux/actions/subjectActions';

const SubjectCard = ({ text, id }) => {
    const history = useHistory()
    const [checked, setChecked] = useState(false)
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState('')
    const dispatch = useDispatch()

    const handleSubjectClick = () => {
        setChecked(true)
        dispatch(getSubjectByName(text))
    }

    const subjectByName = useSelector(state => state.subjectByName)
    const { loading: subjectByNameLoading,
        error: subjectByNameError,
        subject } = subjectByName

    console.log(subject)


    // useEffect(() => {
    //     if (subject && subject === null) {
    //         setOpen(true)
    //         setChecked(false)
    //     }
    // }, [subjectData])


    useEffect(() => {
        if (subject) {
            history.push(`/testpane/?subjectId=${subject._id}`)
        }

    }, [history, subject])



    return (
        <SubjectPane onClick={handleSubjectClick}>
            {checked && <Loader />}
            <span>{text}</span>
            <BeenhereIcon fontSize='large' style={{ display: checked ? 'block' : 'none' }} />

            <DialogMessage open={open} setOpen={setOpen}>

                There's no test available for this subject. Please choose another subject.
            </DialogMessage>
        </SubjectPane>
    )
}

export default SubjectCard
