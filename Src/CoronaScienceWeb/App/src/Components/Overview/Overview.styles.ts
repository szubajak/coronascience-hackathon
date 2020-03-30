import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const StyledBox = styled(Box)`
    margin: 0;
    padding: 0;
    grid-gap: 0 0;
    height: calc(100% - 48px);
    background-color: lightblue;
    display: grid;
    grid-template-columns: 1fr 250px;
`
