import React from 'react'
import SignIn from '../components/SignIn'
import { SignInContainer } from '../styles/AuthStyles'

const SignInPage = ({ setLogState }) => {
    return (
        <SignInContainer>
            <SignIn setLogState={setLogState} />
        </SignInContainer>
    )
}

export default SignInPage
