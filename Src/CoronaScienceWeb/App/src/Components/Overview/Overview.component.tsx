import React from 'react'
import { StyledBox } from './Overview.styles'
import { MapComponent, SliderComponent, FilterComponent } from '~Aggregator'

export const OverviewComponent: React.FunctionComponent = () => {
    return (
        <StyledBox>
            <MapComponent />
            <FilterComponent />
            <SliderComponent />
        </StyledBox>
    )
}
