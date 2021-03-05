import styled from 'styled-components'
import { device, colors, defaultMargin } from '../utils/definitions'
import { ResultOverviewItem } from './ResultStyles'
import { uniformTeacherStyle } from './GlobalStyles'

export const CreateAssessmentContainer = styled(uniformTeacherStyle)`
    .assessmentcreate{
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
        display: grid; 
        width: 80%;
        margin: 50px 0;
        padding: 30px 50px;
    }
    .formcontrol{
            width: 100%;
            margin-top: 30px;
    }

    .submitassessment{
        margin: 0 auto;
    }
`


export const AddQuestionsContainer = styled(uniformTeacherStyle)`
    

    .createassessment{
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
        display: grid; 
        place-items: center;
        width: 80%;
        margin: 50px 0;
        padding: 30px 50px;
        h3{
                text-transform: uppercase;
                text-align: center;
            }
        
        .formcontrol{
            width: 100%;
            margin-top: 30px;
        }
        .options{
            margin: 50px 0;
            box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0,0,0,0.2);
            padding: 30px 50px;
            
        }
        .answer{
            margin-bottom: 30px;
        }
        .submitassessment{
            margin: 0 auto;
            width: fit-content;
        }
    }

    .listassessments{
        overflow-y: scroll;
        height: 500px;
    }
`

export const AssessmentItem = styled(ResultOverviewItem)