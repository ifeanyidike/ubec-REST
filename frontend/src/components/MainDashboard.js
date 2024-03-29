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
                text='Take a test'
                href='/subjects'
            />

            <OptionCard
                iconColor={colors.sweetBlue}
                FaItemElement={<FaVideo className='faicon' />}
                text='Enter a class'
                href='/videolessons'
            />

            <OptionCard
                iconColor={colors.lightBrown}
                FaItemElement={<FaUserLock className='faicon' />}
                text='View your profile'
            />
            <OptionCard
                iconColor={colors.dye}
                FaItemElement={<FaBook className='faicon' />}
                text='Read Books'
            />
            <OptionCard
                iconColor={colors.orange}
                FaItemElement={<FaPhotoVideo className='faicon' />}
                text='Library'
            />
            <OptionCard
                iconColor={colors.orchid}
                FaItemElement={<FaHistory className='faicon' />}
                text='Do revision'
            />
            <OptionCard
                iconColor={colors.gold}
                FaItemElement={<FaComments className='faicon' />}
                text='Talk to a teacher'
            />
        </MainDashboardContainer>
    )
}

export default MainDashboard
