import React from 'react';
import L from 'leaflet';
import { Marker, Polygon } from 'react-leaflet';

const PolygonWithText = props => {
    const center = L.polygon(props.positions).getBounds().getCenter();
    const text = L.divIcon({html: props.text});

    return(
        <Polygon color={props.color} fillColor={props.fillColor} positions={props.positions} fillOpacity="0.5" weight={1}>
            <Marker position={center} icon={text} />
        </Polygon>
    );
}

export default PolygonWithText
