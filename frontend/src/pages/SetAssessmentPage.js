import React, { useEffect, useState } from 'react'
import { AssessmentItem, AddQuestionsContainer } from '../styles/SetAssessmentStyles'
import { useDispatch, useSelector } from "react-redux"
import { FormControl, FormLabel, TextField } from '@material-ui/core'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { addQuestion, getAssessment } from '../redux/actions/assessmentActions';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

const SetAssessmentPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const { teacherInfo } = useSelector(state => state.teacherLogin)
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState({
        first: '',
        second: '',
        third: '',
        fourth: ''
    })
    const [answer, setAnswer] = useState('')

    const { assessmentId } = queryString.parse(location.search)

    const handleAssessmentSubmit = e => {
        e.preventDefault()
        // questionObject = $assessmentId: ID!, $question: String!, $options: [String!]!, $answer: String
        const questionObject = {
            assessmentId,
            question,
            options: [options.first, options.second, options.third, options.fourth],
            answer
        }
        dispatch(addQuestion(questionObject))
    }

    useEffect(() => {
        dispatch(getAssessment(assessmentId))
    }, [dispatch, assessmentId])

    const { loading, error, assessment } = useSelector(state => state.anAssessment)
    console.log(assessment)
    return (
        <AddQuestionsContainer>
            <div className="teacherheader">
                <h2>Hi {teacherInfo.name}</h2>
            </div>

            <div className='createassessment'>
                <form onSubmit={handleAssessmentSubmit}>
                    <div className="question">
                        <h3>Question</h3>
                        <TextField
                            className='formcontrol'
                            label="Question"
                            value={question}
                            required
                            onChange={e => setQuestion(e.target.value)}
                            variant='outlined'
                            helperText="Please enter the question"
                        />

                    </div>

                    <div className="options">
                        <h3>Options</h3>
                        <TextField
                            className='formcontrol'
                            label="Option one"
                            value={options.first}
                            required
                            onChange={e => setOptions({ ...options, first: e.target.value })}
                            variant='outlined'
                            helperText="Please enter the option 1"
                        />
                        <TextField
                            className='formcontrol'
                            label="Option two"
                            value={options.second}
                            required
                            onChange={e => setOptions({ ...options, second: e.target.value })}
                            variant='outlined'
                            helperText="Please enter the option 2"
                        />
                        <TextField
                            className='formcontrol'
                            label="Option three"
                            value={options.third}
                            required
                            onChange={e => setOptions({ ...options, third: e.target.value })}
                            variant='outlined'
                            helperText="Please enter the option 3"
                        />
                        <TextField
                            className='formcontrol'
                            label="Option four"
                            value={options.fourth}
                            required
                            onChange={e => setOptions({ ...options, fourth: e.target.value })}
                            variant='outlined'
                            helperText="Please enter the option 4"
                        />

                    </div>

                    <div className="answer">
                        <h3>Answer</h3>
                        <TextField
                            className='formcontrol'
                            label="Answer"
                            value={answer}
                            required
                            onChange={e => setAnswer(e.target.value)}
                            variant='outlined'
                            helperText="Please enter the answer"
                        />
                    </div>
                    <div className='submitassessment'>
                        <AwesomeButton type='submit' > Add Assessment</AwesomeButton>
                    </div>
                </form>
            </div>

            <div className="listassessments">
                <div>
                    {
                        loading ? 'loading...'
                            :
                            error ? error
                                :
                                assessment && assessment.questions ?
                                    <FormControl component="fieldset" className='container'>
                                        <FormLabel component="legend">{`Question`} </FormLabel>
                                        <p className='question'>{assessment.questions[0].question}</p>
                                        {
                                            assessment.questions[0].options &&
                                            assessment.questions[0].options.map((option, index) =>
                                                <div
                                                    className='options'
                                                    key={index}
                                                >
                                                    {option}
                                                </div>
                                            )
                                        }
                                    </FormControl>
                                    :
                                    null
                    }
                </div>
            </div>

            {/* //end */}


        </AddQuestionsContainer>
    )
}

export default SetAssessmentPage
