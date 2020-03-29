import React from 'react'
import { StyledHeaderBox, StyledLogoTypography } from './Header.styles'

export const HeaderComponent: React.FC = () => (
    <StyledHeaderBox elevation={4}>
        <StyledLogoTypography>Corona Science Web App</StyledLogoTypography>
        <StyledLogoTypography>Hackathon</StyledLogoTypography>
    </StyledHeaderBox>
)
