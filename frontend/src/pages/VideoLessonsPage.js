import React from 'react'
import { VideoLessonsContainer } from '../styles/VideoLessonStyles'
import { useDispatch, useSelector } from "react-redux"
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

const VideoLessonsPage = () => {

    const { studentInfo } = useSelector(state => state.studentLogin)
    return (
        <VideoLessonsContainer>
            <ReactPlayer url='https://www.youtube.com/watch?v=TLreVQckGro' />
            <ReactPlayer url='https://www.youtube.com/watch?v=80C0t-HQWpY' />
            <ReactPlayer url='https://www.youtube.com/watch?v=Oh72Mx1lPP0' />

        </VideoLessonsContainer>
    )
}

export default VideoLessonsPage
