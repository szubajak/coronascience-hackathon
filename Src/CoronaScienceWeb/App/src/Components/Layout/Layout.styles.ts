import styled from 'styled-components'
import { Box, Typography, Button } from '@material-ui/core'

export const StyledLayoutBox = styled(Box)`
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    user-select: none;
    display: grid;
    background-color: white;
    grid-template-rows: min-content 1fr min-content;
    text-align: center;
`

export const StyledFooterTypography = styled(Typography)`
    color: darkblue;
    font-size: 1rem;
    margin: 10px auto;
`
