import React from 'react'
import { NoSsr, CssBaseline, Typography } from '@material-ui/core'
import {
    StyledLayoutBox,
    StyledButton,
    StyledFooterTypography,
} from './Layout.styles'
import { HeaderComponent, ObservationComponent } from '~Aggregator'
import { getObservations } from '~/Services/MiData.service'
import { Observation } from '~Models/Observation'

export const LayoutComponent: React.FunctionComponent = () => {
    const [observation, setObservation] = React.useState<Observation>({})

    const start = async (): Promise<void> => {
        const test = await getObservations()
        setObservation(test)
    }

    return (
        <NoSsr>
            <CssBaseline />
            <StyledLayoutBox>
                <HeaderComponent />
                <StyledButton color="inherit" onClick={start}>
                    Get Observation
                </StyledButton>
                <ObservationComponent {...observation} />
                <StyledFooterTypography>
                    Hackathon Corona Science Web App
                </StyledFooterTypography>
            </StyledLayoutBox>
        </NoSsr>
    )
}
