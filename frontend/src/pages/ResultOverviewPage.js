import React, { useEffect } from 'react'
import ResultOverviewPane from '../components/ResultOverviewPane'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'
import { subjects } from '../utils/authjson'
import { NameSubjectContainer } from '../styles/TestSubjectStyles'
import { ResultOverviewContainer } from '../styles/ResultStyles'
import { getSubject } from '../redux/actions/subjectActions'


const ResultOverviewPage = () => {
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()

    const { subjectId } = queryString.parse(location.search)
    const { studentInfo } = useSelector(state => state.studentLogin)

    const { result: results } = useSelector(state => state.resultSet)
    const { result: correctResults } = useSelector(state => state.correctResultSet)
    const { result: inCorrectResults } = useSelector(state => state.inCorrectResultSet)

    useEffect(() => {
        if (!studentInfo) {
            history.push('/')
        }
        if (!results) {
            history.push('/mainarea')
        }
    }, [studentInfo, results, history])

    useEffect(() => {
        dispatch(getSubject(subjectId))
    }, [dispatch, subjectId])

    // const currentSubject = subjects.find(subject => subject._id === parseInt(subjectId))

    const { subject } = useSelector(state => state.aSubject)

    return (
        <ResultOverviewContainer>

            <NameSubjectContainer>
                <span className='subject'>{subject && subject.name}</span>
                <span className='student'>{studentInfo && studentInfo.name}</span>
            </NameSubjectContainer>


            {   results &&
                results.map((result, index) =>
                    <ResultOverviewPane
                        key={index}
                        number={index + 1}
                        question={result.question}
                        options={result.options}
                        correctAnswer={result.answer}
                        givenAnswer={result.givenAnswer}
                    />
                )
            }
        </ResultOverviewContainer>
    )
}

export default ResultOverviewPage
