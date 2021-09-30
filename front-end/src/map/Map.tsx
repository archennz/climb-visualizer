import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RouteMarker from "./RouteMarker";
import RouteInfo from "../models/routeInfo";

const TOKEN = process.env.REACT_APP_MAP_TOKEN || "";

// TODO: need to work out map pro
// interface

const Map: React.FC<{ routes: RouteInfo[] }> = (props) => {
  const [viewport, setViewport] = React.useState({
    latitude: 34.012,
    longitude: -116.168,
    zoom: 9,
  });

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
      {markers}
    </ReactMapGL>
  );
};

export default Map;
