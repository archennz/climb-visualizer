import * as React from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';



const TOKEN = process.env.REACT_APP_MAP_TOKEN || '';

function Map(): JSX.Element {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "80vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })
  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN} 
      {...viewport}
      onViewportChange={(nextViewport: React.SetStateAction<{ width: any; height: any; latitude: number; longitude: number; zoom: number; }>) => setViewport(nextViewport)}></ReactMapGL>
  )
}

export default Map