import React from 'react'
import { StyledBox } from './Overview.styles'
import { HeatMapComponent, SliderComponent, FilterComponent } from '~Aggregator'

export const OverviewComponent: React.FunctionComponent = () => {
    return (
        <StyledBox>
            <HeatMapComponent />
            <FilterComponent />
            <SliderComponent />
        </StyledBox>
    )
}
