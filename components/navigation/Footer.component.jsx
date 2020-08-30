import React from 'react'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//         {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//     </GoogleMap>
// ))

const Footer = () => {
    return (
        <footer className="w-full bg-text-color text-white p-4 text-center">
            {/* <div className="w-1/2"> */}
                <p><i aria-hidden className="far fa-copyright"></i> Auto Iordache - {new Date().getFullYear()}</p>
            {/* </div> */}
            {/* <div className="w-1/2">
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div> */}
        </footer>
    )
}

export default Footer