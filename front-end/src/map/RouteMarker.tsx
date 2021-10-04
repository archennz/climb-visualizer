import * as React from "react";
import { Marker, Popup } from "react-map-gl";
import RouteInfo from "../models/routeInfo";

const RouteCard: React.FC<{ route: RouteInfo }> = (props) => {
  const longitude = props.route.longitude;
  const latitude = props.route.latitude;
  return (
    <Popup longitude={longitude} latitude={latitude}>
      <div>Name: {props.route.name}</div>
      <div>Difficulty: {props.route.rating}</div>
      <div>Popularity: {props.route.stars}</div>
    </Popup>
  );
};

// TODO: make this more harmonious with the heatmap
const RouteMarker: React.FC<{ route: RouteInfo }> = (props) => {
  const longitude = props.route.longitude;
  const latitude = props.route.latitude;
  const [displayPopup, setDisplayPopup] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setDisplayPopup(true)}
      onMouseLeave={() => setDisplayPopup(false)}
    >
      <Marker
        longitude={longitude}
        latitude={latitude}
        offsetLeft={-20}
        offsetTop={-20}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          fillOpacity="0.0"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      </Marker>
      {displayPopup && <RouteCard route={props.route}></RouteCard>}
    </div>
  );
};

export default RouteMarker;
