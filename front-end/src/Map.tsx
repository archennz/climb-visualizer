import * as React from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';




const TOKEN = process.env.REACT_APP_MAP_TOKEN || '';


function Map(): JSX.Element {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      width="100vw"
      height="80vh"
      onViewportChange={setViewport}>
      <Marker latitude={37.7577} longitude={-122.4376}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" />
      </Marker>
      <Marker latitude={40.7577} longitude={-100.4376}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Map_pin_icon.svg" />
      </Marker>
    </ReactMapGL>)

}

export default Map