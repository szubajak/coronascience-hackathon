import React from 'react'
import { StyledHeaderBox, StyledLogoTypography } from './Header.styles'

export const HeaderComponent: React.FC = () => (
    <StyledHeaderBox elevation={2}>
        <StyledLogoTypography>Corona Science</StyledLogoTypography>
        <StyledLogoTypography>Powered by Hackathon</StyledLogoTypography>
    </StyledHeaderBox>
)
