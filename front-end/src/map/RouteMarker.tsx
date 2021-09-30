import * as React from "react";
import { Marker, Popup } from "react-map-gl";
import { isPropertySignature } from "typescript";
import RouteInfo from "../models/routeInfo";

const RouteCard: React.FC<{ route: RouteInfo }> = (props) => {
  const longitude = props.route.longitude;
  const latitude = props.route.latitude;
  return (
    <Popup longitude={longitude} latitude={latitude}>
      <div>Name: {props.route.name}</div>
      <div>Rating: {props.route.rating}</div>
    </Popup>
  );
};

const RouteMarker: React.FC<{ route: RouteInfo }> = (props) => {
  const key = props.route.id;
  const longitude = props.route.longitude;
  const latitude = props.route.latitude;
  const [displayPopup, setDisplayPopup] = React.useState(false);

  //TODO the offset and sizes are hard coded
  return (
    <div
      onMouseEnter={() => setDisplayPopup(true)}
      onMouseLeave={() => setDisplayPopup(false)}
    >
      <Marker
        key={key}
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
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        </svg>
      </Marker>
      {displayPopup && <RouteCard route={props.route}></RouteCard>}
    </div>
  );
};

export default RouteMarker;
