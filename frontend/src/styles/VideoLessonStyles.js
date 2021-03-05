import styled from 'styled-components'
import { device, colors, defaultMargin } from '../utils/definitions'
import { uniformStyle } from './GlobalStyles'

export const VideoLessonsContainer = styled(uniformStyle)`
    display: grid;
    grid-gap: 20px;
    padding: 50px;

    iframe{
        width: 100%;
    }

`