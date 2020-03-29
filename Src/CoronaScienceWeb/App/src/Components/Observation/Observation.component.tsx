import React from 'react'
import { StyledObservationBox, StyledTypography } from './Observation.styles'
import { Observation } from '~Models/Observation'

export const ObservationComponent: React.FC<Observation> = observation => {
    if (Object.keys(observation).length === 0) {
        return <div>No Observation</div>
    }
    return (
        <StyledObservationBox>
            <StyledTypography>Id: {observation.id}</StyledTypography>
            <StyledTypography>Total: {observation.total}</StyledTypography>
            <StyledTypography>
                ResourceType: {observation.resourceType}
            </StyledTypography>
            <StyledTypography>Type: {observation.type}</StyledTypography>
        </StyledObservationBox>
    )
}
