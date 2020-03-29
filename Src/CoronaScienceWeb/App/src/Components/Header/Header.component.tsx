import React from 'react'
import { StyledHeaderBox, StyledLogoTypography, StyledTextTypography } from './Header.styles'

export const HeaderComponent: React.FC = () => (
    <StyledHeaderBox elevation={2}>
        <StyledLogoTypography>Corona Science Web App</StyledLogoTypography>
        <StyledTextTypography>Hackathon</StyledTextTypography>
    </StyledHeaderBox>
)
