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
                FaItemElement={<FaEdit class='faicon' />}
                text='Set Assessment'
                href='/createassessment'
            />

            <OptionCard
                iconColor={colors.lightBrown}
                FaItemElement={<FaPhotoVideo class='faicon' />}
                text='Upload Video'
                href='/uploadvideo'
            />

            <OptionCard
                iconColor={colors.sweetBlue}
                FaItemElement={<FaVideo class='faicon' />}
                text='Host a class'
            />

            <OptionCard
                iconColor={colors.lightBrown}
                FaItemElement={<FaUserLock class='faicon' />}
                text='View your profile'
            />


            <OptionCard
                iconColor={colors.orchid}
                FaItemElement={<FaHistory class='faicon' />}
                text='Add revision'
            />
            <OptionCard
                iconColor={colors.gold}
                FaItemElement={<FaComments class='faicon' />}
                text='Talk to students'
            />
        </MainDashboardContainer>
    )
}

export default MainDashboard
