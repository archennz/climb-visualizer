import * as React from "react";
import ReactMapGL, { Marker, Popup, Source, Layer, LayerProps } from "react-map-gl";
import { Feature, FeatureCollection } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";
import RouteMarker from "./RouteMarker";
import RouteInfo from "../models/routeInfo";

const TOKEN = process.env.REACT_APP_MAP_TOKEN || "";

const fakeGeojson: Feature = {
  type: "Feature",
  geometry: { type: "Point", coordinates: [-122.4, 37.8] },
  properties: {}
};

const fakeGeojsonTwo: Feature = {
  type: "Feature",
  geometry: { type: "Point", coordinates: [-128.4, 37.8] },
  properties: {}
};


const layerStyle: LayerProps = {
  type: "heatmap",
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    'heatmap-weight': {
      property: 'weight',
      type: 'exponential',
      stops: [[0,0], [5,2]]
    },
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 6, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      0.9,
      'rgb(255,201,101)'
    ],
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 6, 20],
    // Transition from heatmap to circle layer by zoom level
    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
  }
};

const Map: React.FC<{ routes: RouteInfo[] }> = (props) => {
  const [viewport, setViewport] = React.useState({
    latitude: 34.012,
    longitude: -116.168,
    zoom: 9,
  });

  const [geojson, setGeojson] = React.useState<FeatureCollection>()

  // render routes async
  React.useEffect( () => {
    const features = props.routes.map((route) => route.getFeature())
    console.log(features)
    const geojson: FeatureCollection = {
      type: "FeatureCollection",
      features: [fakeGeojson, fakeGeojsonTwo]
    }
    setGeojson(geojson)
  } , [props.routes])




  

  // Only rerender markers if props.routes has changed
  const markers = React.useMemo(
    () =>
      props.routes.map((route) => <RouteMarker route={route}></RouteMarker>),
    [props.routes]
  );

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      width="100vw"
      height="88vh"
      onViewportChange={setViewport}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle}>
        </Layer>
      </Source>
      {markers}
    </ReactMapGL>
  );
};

export default Map;
