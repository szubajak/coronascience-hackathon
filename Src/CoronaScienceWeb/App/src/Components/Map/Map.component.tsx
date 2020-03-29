import React from 'react'
import { StyledBox, StyledImage } from './Map.styles'

export const MapComponent: React.FunctionComponent = () => {
    const map =
        'https://storage.needpix.com/rsynced_images/world-2169041_1280.jpg'
    return (
        <StyledBox>
            <StyledImage src={map} />
        </StyledBox>
    )
}
