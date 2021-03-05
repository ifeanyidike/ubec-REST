import React, { useState, useEffect } from 'react'
import { AssessmentItem, CreateAssessmentContainer } from '../styles/SetAssessmentStyles'
import { useDispatch, useSelector } from "react-redux"
import { FormControl, FormHelperText, FormLabel, NativeSelect, TextField } from '@material-ui/core'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useHistory } from 'react-router-dom'
import { getSubjects } from '../redux/actions/subjectActions';
import { createAssessment } from '../redux/actions/assessmentActions'

const CreateAssessmentPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubjects())
    }, [dispatch])

    const { subjects } = useSelector(state => state.allSubjects)
    const { teacherInfo } = useSelector(state => state.teacherLogin)
    const [subject, setSubject] = useState(subjects && subjects[0]._id)

    const createAssessmentHandler = (e) => {
        e.preventDefault()
        dispatch(createAssessment(subject))
    }
    const history = useHistory()

    const { loading, error, assessment } = useSelector(state => state.createAssessment)

    useEffect(() => {
        if (assessment) {
            history.push(`/setassessment?assessmentId=${assessment._id}`)
        }
    }, [assessment, history])

    return (
        <CreateAssessmentContainer>
            <div className="teacherheader">
                <h2>Hi {teacherInfo.name}</h2>
            </div>

            {
                loading ? "Loading..."
                    :
                    error ? error
                        :
                        <form className="assessmentcreate" onSubmit={createAssessmentHandler}>
                            <FormControl >
                                <NativeSelect
                                    fullWidth
                                    required
                                    label='subject'
                                    className="formcontrol"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}


                                >
                                    {subjects && subjects.map((subject) => (
                                        <option key={subject._id} value={subject._id}>
                                            {subject.name}
                                        </option>
                                    ))}
                                </NativeSelect>
                                <FormHelperText>Please select the subject</FormHelperText>
                            </FormControl>

                            <div className='submitassessment'>
                                <AwesomeButton type='submit' > Create Assessment</AwesomeButton>
                            </div>
                        </form>
            }


        </CreateAssessmentContainer>
    )
}

export default CreateAssessmentPage
