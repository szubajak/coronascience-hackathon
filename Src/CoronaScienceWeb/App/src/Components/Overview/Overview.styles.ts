import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const StyledBox = styled(Box)`
    padding: 5px;
    width: 100%;
    height: calc(100% - 5px);
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-template-rows: 1fr 150px;
`
