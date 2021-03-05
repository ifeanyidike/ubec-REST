import React, { useState, useEffect, useCallback } from 'react'
import { TestPaneMainContainer, NameSubjectContainer } from '../styles/TestSubjectStyles'
import { questionsList } from "../utils/questionbank"
import { subjects } from "../utils/authjson"
import queryString from "query-string"
import { useLocation, useHistory } from "react-router-dom"
import TestPane from '../components/TestPane'
import { useDispatch, useSelector } from 'react-redux'
import { setCorrectResult, setIncorrectResult, setResult } from '../redux/actions/resultActions'
import TimelapseIcon from '@material-ui/icons/Timelapse';
import BuildAnswers from "../utils/buildAnswers"
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import DialogMessage from '../components/DialogMessage'
import { getAssessmentBySubject } from '../redux/actions/assessmentActions'
import { getSubject } from '../redux/actions/subjectActions'

const TestPanePage = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const [page, setPage] = useState(1)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [time, setTime] = useState(2 * 1000 * 60)



    useEffect(() => {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1000)
            }
        }, [1000])

        return () => { }
    }, [time])

    const { subjectId } = queryString.parse(location.search)
    // const [{ questions }] = questionsList.filter(question => question.subjectId === parseInt(subjectId))

    useEffect(() => {
        dispatch(getAssessmentBySubject(subjectId))
    }, [dispatch, subjectId])

    const { loading, error, assessment } = useSelector(state => state.assessmentBySubject)
    // const { loading, error, data } =
    //     useQuery(getAssessmentBySubjectQuery, {
    //         variables: {
    //             subjectId
    //         }
    //     })

    let questions = []

    if (assessment) {
        questions = assessment.questions
    }

    const perPage = 1;
    const lastPage = questions ? Math.ceil(questions.length / perPage) : null
    const start = page === 1 ? 0 : (page < lastPage) ? (page - 1) * perPage : (lastPage - 1) * perPage

    const buildAnswers = questions ? BuildAnswers(questions, selectedAnswers) : null

    const computeResult = useCallback(() => {
        const [correct, incorrect, results] = buildAnswers
        dispatch(setResult(results))
        dispatch(setIncorrectResult(incorrect))
        dispatch(setCorrectResult(correct))
        history.push(`/scorepage?subjectId=${subjectId}`)
    },
        [dispatch, subjectId, buildAnswers, history],
    )



    const handlesubmit = () => {
        computeResult()
    }

    useEffect(() => {
        if (time === 0) {
            computeResult()
        }
    }, [time, computeResult])

    const { studentInfo } = useSelector(state => state.studentLogin)

    // const { studentInfo } = useSelector(state => state.userLogin)


    const displayTime = () => {
        const dTime = new Date(time)
        const twoDigits = (timeElem) => timeElem.toString().padStart(2, '0')

        return twoDigits(dTime.getUTCHours()) + ':' + twoDigits(dTime.getUTCMinutes())
            + ':' + twoDigits(dTime.getUTCSeconds())

    }

    useEffect(() => {
        dispatch(getSubject(subjectId))
    }, [dispatch, subjectId])

    // const currentSubject = subjects.find(subject => subject._id === parseInt(subjectId))

    const { subject } = useSelector(state => state.aSubject)


    return (
        <TestPaneMainContainer>
            {
                loading ? "loading..."
                    :
                    error ? error.message
                        :
                        assessment ?
                            <>
                                <NameSubjectContainer>
                                    <span className='subject'>{subject && subject.name}</span>
                                    <span className='student'>{studentInfo && studentInfo.name}</span>
                                </NameSubjectContainer>
                                <span className='time'>
                                    <TimelapseIcon /> {displayTime()}
                                </span>


                                <TestPane
                                    number={start + 1}
                                    piece={questions[start]}
                                    selectedAnswers={selectedAnswers}
                                    setSelectedAnswers={setSelectedAnswers}
                                />
                                <div className="actions">
                                    {
                                        page === 1 ?

                                            <AwesomeButton
                                                onPress={() => setPage(prevPage => prevPage > questions.length ? prevPage : page + 1)}>
                                                Next
                                            </AwesomeButton>
                                            :
                                            page === questions.length ?

                                                <>
                                                    <AwesomeButton
                                                        onPress={() => setPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)}>
                                                        Previous
                                                    </AwesomeButton>
                                                    <AwesomeButton onPress={handlesubmit}>submit</AwesomeButton>
                                                </>
                                                :
                                                <>
                                                    <AwesomeButton
                                                        onPress={() => setPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)}>
                                                        Previous
                                                    </AwesomeButton>
                                                    <AwesomeButton
                                                        onPress={() => setPage(prevPage => prevPage > questions.length ? prevPage : page + 1)}>
                                                        Next
                                                    </AwesomeButton>
                                                    <AwesomeButton onPress={handlesubmit}>submit</AwesomeButton>
                                                </>
                                    }

                                </div>
                            </>
                            :
                            null
            }

            <DialogMessage open={open} setOpen={setOpen} back={true}>

                There's no test available for this subject. Please choose another subject.
            </DialogMessage>
        </TestPaneMainContainer>
    )
}

export default TestPanePage
