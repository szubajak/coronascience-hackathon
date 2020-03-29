import React from 'react'
import { StyledBox, StyledButton } from './Observations.styles'
import { ObservationComponent } from '~Aggregator'
import { getObservations } from '~/Services/MiData.service'
import { Observation } from '~Models/Observation'

export const ObservationsComponent: React.FunctionComponent = () => {
    const [observation, setObservation] = React.useState<Observation>({})

    const start = async (): Promise<void> => {
        const test = await getObservations()
        setObservation(test)
    }

    return (
        <StyledBox>
            <StyledButton color="inherit" onClick={start}>
                Get Observation
            </StyledButton>
            <ObservationComponent {...observation} />
        </StyledBox>
    )
}
