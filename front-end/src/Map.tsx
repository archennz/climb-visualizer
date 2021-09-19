import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RouteMarker from "./RouteMarker";

const TOKEN = process.env.REACT_APP_MAP_TOKEN || "";

function Map(props: any): JSX.Element {
  const [viewport, setViewport] = React.useState({
    latitude: 34.012,
    longitude: -116.168,
    zoom: 9,
  });

  // Only rerender markers if props.routes has changed
  const markers = React.useMemo(
    () =>
      props.routes.map((route: any) => (
        <RouteMarker route={route}></RouteMarker>
      )),
    [props.routes]
  );

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      width="100vw"
      height="80vh"
      onViewportChange={setViewport}
    >
      {markers}
    </ReactMapGL>
  );
}

export default Map;
