import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [47.170815, 27.565329]

const AIMap = () => {
    return (
        <Map center={position} zoom={17} style={{ height: 410 }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
                <Popup>Scoala Auto Iordache</Popup>
            </Marker>
        </Map>
    )
}

export default AIMap