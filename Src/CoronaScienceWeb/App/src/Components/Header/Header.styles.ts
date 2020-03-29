import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'

export const StyledHeaderBox = styled(Paper)`
    width: 100%;
    display: grid;
    background-color: lightgray;
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export const StyledLogoTypography = styled(Typography)`
    color: darkblue;
    font-size: 1.5rem;
    margin: 10px;
    justify-self: start;
`

export const StyledTextTypography = styled(Typography)`
    color: darkblue;
    font-size: 1.5rem;
    margin: 10px;
    justify-self: end;
`
