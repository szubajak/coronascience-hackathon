import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'

type State = {
    lat: number
    lng: number
    zoom: number
}

export class HeatMapComponent extends Component<{}, State> {
    state = {
        lat: 46.967178,
        lng: 8.055188,
        zoom: 9,
    }

    cities = [
        {
            name: 'Basel',
            lat: 47.55839,
            lng: 7.57327,
        },
        {
            name: 'Bern',
            lat: 46.94809,
            lng: 7.44744,
        },
        {
            name: 'Biel',
            lat: 47.13713,
            lng: 7.24608,
        },
        {
            name: 'Allschwil',
            lat: 47.55074,
            lng: 7.53599,
        },
        {
            name: 'Zürich',
            lat: 47.37752,
            lng: 8.52127,
        },
        {
            name: 'Baar',
            lat: 47.19625,
            lng: 8.52954,
        },
    ]

    addressPoints = []

    render() {
        for (let citynr = 0; citynr < this.cities.length; citynr++) {
            console.log(citynr)
            let city = this.cities[citynr]
            for (let i = 0; i < 100; i++) {
                this.addressPoints.push([
                    city.lat + Math.random() / 10,
                    city.lng + Math.random() / 10,
                    Math.random() * 10,
                ])
            }
        }
        const position = [this.state.lat, this.state.lng]
        return (
            <Map center={position} zoom={this.state.zoom}>
                <HeatmapLayer
                    points={this.addressPoints}
                    longitudeExtractor={m => m[1]}
                    latitudeExtractor={m => m[0]}
                    intensityExtractor={m => parseFloat(m[2])}
                />
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />
            </Map>
        )
    }
}
