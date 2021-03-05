import React from 'react'
import { MainDashboardContainer } from '../styles/MainDashboardStyles'
import OptionCard from './OptionCard'
import { colors } from "../utils/definitions"
import { FaEdit, FaVideo, FaUserLock, FaBook, FaPhotoVideo, FaHistory, FaComments } from 'react-icons/fa'

const MainDashboard = () => {
    return (
        <MainDashboardContainer>
            <OptionCard
                iconColor={colors.sweetRed}
                FaItemElement={<FaEdit className='faicon' />}
                text='Set Assessment'
                href='/createassessment'
            />

            <OptionCard
                iconColor={colors.lightBrown}
                FaItemElement={<FaPhotoVideo className='faicon' />}
                text='Upload Video'
                href='/uploadvideo'
            />

            <OptionCard
                iconColor={colors.sweetBlue}
                FaItemElement={<FaVideo className='faicon' />}
                text='Host a class'
            />

            <OptionCard
                iconColor={colors.lightBrown}
                FaItemElement={<FaUserLock className='faicon' />}
                text='View your profile'
            />


            <OptionCard
                iconColor={colors.orchid}
                FaItemElement={<FaHistory className='faicon' />}
                text='Add revision'
            />
            <OptionCard
                iconColor={colors.gold}
                FaItemElement={<FaComments className='faicon' />}
                text='Talk to students'
            />
        </MainDashboardContainer>
    )
}

export default MainDashboard
