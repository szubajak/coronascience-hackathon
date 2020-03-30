import React, {Component} from 'react'
import {Map, TileLayer, Marker, Popup, Polygon} from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import sampleData from '~Assets/Data/sample.json'
import cantonData from '~Assets/Data/cantons.json'
import cantonNames from '~Assets/Data/canton-names.json'
import PolygonWithText from "~Components/PolygonWithText/PolygonWithText.component";
import "./HeatMap.css"

type State = {
    lat: number
    lng: number
    zoom: number
}

type Sample = {
    KUERZEL: string
    nCasesCanton: number
    pCasesCanton: number
}

export const HeatMapComponent: React.FC = () => {
    const [samples, setSamples] = React.useState<Sample[]>(new Array<Sample>())

    React.useEffect(() => {
        setSamples(sampleData.data)
    }, [])

    console.log(cantonData)
    console.log(samples)

    const state: State = {
        lat: 46.967178,
        lng: 8.055188,
        zoom: 9,
    }

    const cities = [
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

    const addressPoints = new Array<State>()

    const fillAddressPoints = () => (): void => {
        for (let citynr = 0; citynr < cities.length; citynr++) {
            console.log(citynr)
            const city = cities[citynr]
            for (let i = 0; i < 100; i++) {
                addressPoints.push({
                    lat: city.lat + Math.random() / 10,
                    lng: city.lng + Math.random() / 10,
                    zoom: Math.random() * 10,
                })
            }
        }
    }
    fillAddressPoints()

    const position = [state.lat, state.lng]

    const polygon = [
        [47.19625, 8.52954],
        [51.52, -0.1],
        [51.52, -0.12],
    ]

    const cantons: any[] = []

    cantonData.features.map((canton, index) => {
        return canton.geometry.coordinates.map((item: any, index2: any) => {
                if (cantonData.features[index].length > 1) {
                    return cantons.push(
                        <PolygonWithText color="#555555" fillColor="#eee" positions={item[0]} key={index + "_" + index2} text={cantonNames.primary[index].de}/>
                    )
                } else {
                    return cantons.push(
                        <PolygonWithText color="#555555" fillColor="#eee" positions={item} key={index + "_" + index2} text={cantonNames.primary[index].de}/>
                    )
                }
            }
        )
    })


    return (
        <Map center={position} zoom={state.zoom}>
            {cantons}

            <HeatmapLayer
                points={addressPoints}
                longitudeExtractor={m => m[1]}
                latitudeExtractor={m => m[0]}
                intensityExtractor={m => parseFloat(m[2])}
            />

            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </Map>
    )
}
