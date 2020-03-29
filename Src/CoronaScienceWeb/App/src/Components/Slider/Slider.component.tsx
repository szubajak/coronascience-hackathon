import React from 'react'
import { StyledBox, StyledTypography } from './Slider.styles'
import { Slider } from '@material-ui/core'

export const SliderComponent: React.FunctionComponent = () => {
    return (
        <StyledBox>
            <StyledTypography>Timeline</StyledTypography>
            <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />
        </StyledBox>
    )
}
