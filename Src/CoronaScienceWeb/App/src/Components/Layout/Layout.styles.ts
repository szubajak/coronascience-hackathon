import styled from 'styled-components'
import { Box, Typography } from '@material-ui/core'

export const StyledLayoutBox = styled(Box)`
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    user-select: none;
    display: grid;
    background-color: white;
    grid-template-rows: min-content 1fr min-content;
    align-items: center;
    justify-items: center;
`

export const StyledFooterBox = styled(Box)`
    width: 100%;
    padding: 10px;
`

export const StyledFooterTypography = styled(Typography)`
    color: darkblue;
    font-size: 1rem;
`
