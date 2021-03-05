import styled, { createGlobalStyle } from "styled-components";
import { device, colors, defaultMargin } from '../utils/definitions'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif !important;
    }
   

`

export const uniformStyle = styled.div`
    margin-top: ${defaultMargin};
    display: grid;
    place-items: center;
    &:before{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.1;
        background-image: url(/images/ubeclogo.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 0;
    }

`

export const uniformTeacherStyle = styled(uniformStyle)`
    .teacherheader{
        background-image: url(/images/teacherheader1.jpg);
        width: 100%;
        height: 30vh;
        background-position: center;
        background-color: rgba(0, 0, 0, 0.1);
        background-blend-mode: darken;
        display: grid;
        place-items: center;
        color: ${colors.darkblue};
        h2{
            font-size: 2.5rem;
            font-weight: 500;
            text-transform: uppercase;
        }
    }
`

export default GlobalStyle