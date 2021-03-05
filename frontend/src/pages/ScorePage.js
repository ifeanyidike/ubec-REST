import React, { useEffect } from 'react'
import { NameSubjectContainer, ScorePageContainer } from '../styles/TestSubjectStyles'
import { subjects } from "../utils/authjson"
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { colors } from "../utils/definitions"
import { getSubject } from '../redux/actions/subjectActions'

const ScorePage = () => {
    const location = useLocation()
    const history = useHistory()
    const { subjectId } = queryString.parse(location.search)
    const dispatch = useDispatch()

    const { studentInfo } = useSelector(state => state.studentLogin)

    const { result } = useSelector(state => state.resultSet)
    const { result: correctResults } = useSelector(state => state.correctResultSet)

    useEffect(() => {
        if (!studentInfo) {
            history.push('/')
        }
        if (!result) {
            history.push('/mainarea')
        }
    }, [studentInfo, result, history, correctResults])


    useEffect(() => {
        dispatch(getSubject(subjectId))
    }, [dispatch, subjectId])

    // const currentSubject = subjects.find(subject => subject._id === parseInt(subjectId))

    const { subject } = useSelector(state => state.aSubject)


    return (
        <ScorePageContainer scoreColor={
            result && correctResults && (correctResults.length < result.length / 2) ? colors.sweetRed : colors.darkblue}>
            <NameSubjectContainer>
                <span className='subject'>{subject && subject.name}</span>
                <span className='student'>{studentInfo && studentInfo.name}</span>
            </NameSubjectContainer>

            <div className="score">
                <p>You Scored</p>
                <span>
                    {
                        correctResults && result &&
                        <>
                            <span className='scoreValue'>
                                {correctResults.length}
                            </span>
                            {` out of `}
                            <span className='total'>{result.length}</span>
                        </>
                    }
                </span>
            </div>
            <AwesomeButton type='secondary'
                onPress={() => history.push(`/resultoverview?subjectId=${subjectId}`)}
            >View your results</AwesomeButton>
        </ScorePageContainer>
    )
}

export default ScorePage
