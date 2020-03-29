import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'

export const StyledHeaderBox = styled(Paper)`
    width: 100%;
    border-radius: 0px;
    display: grid;
    background: linear-gradient(259.43deg, #930031 2.14%, #770058 97.78%);
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export const StyledLogoTypography = styled(Typography)`
    color: white;
    font-size: 1.5rem;
    margin: 10px;
    justify-self: start;
`

export const StyledTextTypography = styled(Typography)`
    color: white;
    font-size: 1.5rem;
    margin: 10px;
    justify-self: end;
`
