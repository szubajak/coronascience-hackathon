import React from 'react'
import { NoSsr, CssBaseline } from '@material-ui/core'
import {
    StyledLayoutBox,
    StyledFooterTypography,
    StyledFooterBox,
} from './Layout.styles'
import { HeaderComponent, TabsComponent } from '~Aggregator'

export const LayoutComponent: React.FunctionComponent = () => {
    return (
        <NoSsr>
            <CssBaseline />
            <StyledLayoutBox>
                <HeaderComponent />
                <TabsComponent />
                <StyledFooterBox>
                    <StyledFooterTypography>
                        Hackathon Corona Science Web App
                    </StyledFooterTypography>
                </StyledFooterBox>
            </StyledLayoutBox>
        </NoSsr>
    )
}
